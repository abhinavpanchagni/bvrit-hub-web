import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const updateSession = async (request: NextRequest) => {
  // Create an unmodified response
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    },
  );

  // IMPORTANT: You *must* call getUser to refresh the session!
  const { data: { user } } = await supabase.auth.getUser();

  const protectedRoutes = [
    '/dashboard',
    '/explore',
    '/freshers',
    '/toolkit',
    '/clubs',
    '/network',
    '/tasks',
    '/settings',
    '/profile',
    '/suggestions-hub' // Protect student suggestions hub too
  ];

  const isProtected = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isAdminLogin = request.nextUrl.pathname === '/admin/login';

  if (isAdminRoute) {
    if (!user) {
      if (!isAdminLogin) {
        const url = request.nextUrl.clone();
        url.pathname = '/admin/login';
        return NextResponse.redirect(url);
      }
    } else {
      // User is logged in. Check role from profiles table.
      const { data: profile } = await supabase
        .from('profiles')
        .select('role, must_change_password')
        .eq('id', user.id)
        .single();
        
      const role = profile?.role || 'student';
      const mustChangePassword = profile?.must_change_password || false;

      if (role !== 'admin') {
        // Students cannot access admin portal (except the login page).
        if (!isAdminLogin) {
          const url = request.nextUrl.clone();
          url.pathname = '/dashboard';
          return NextResponse.redirect(url);
        }
      } else {
        // User is an admin
        if (isAdminLogin) {
          const url = request.nextUrl.clone();
          url.pathname = '/admin';
          return NextResponse.redirect(url);
        }

        if (mustChangePassword && request.nextUrl.pathname !== '/admin/settings/change-password') {
          const url = request.nextUrl.clone();
          url.pathname = '/admin/settings/change-password';
          return NextResponse.redirect(url);
        }

        if (!mustChangePassword && request.nextUrl.pathname === '/admin/settings/change-password') {
          const url = request.nextUrl.clone();
          url.pathname = '/admin';
          return NextResponse.redirect(url);
        }
      }
    }
  } else if (!user && isProtected) {
    // Standard student protected routes
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
};

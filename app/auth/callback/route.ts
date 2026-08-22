import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/dashboard";

  if (!code) {
    return NextResponse.redirect(
      new URL("/login?error=google-login-failed", requestUrl.origin)
    );
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL("/login?error=google-login-failed", requestUrl.origin)
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    let profileData: any = {
      id: user.id,
      name: user.user_metadata.full_name,
      email: user.email,
      avatar_url: user.user_metadata.avatar_url,
    };

    const registerCookie = cookieStore.get("bvrithub_register");
    if (registerCookie?.value) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(registerCookie.value));
        profileData = {
          ...profileData,
          name: parsedData.name || profileData.name,
          username: parsedData.username,
          branch: parsedData.branch,
          year: parsedData.year,
        };
      } catch (err) {
        console.error("Failed to parse registration cookie", err);
      }
    }

    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("id, avatar_url")
      .eq("id", user.id)
      .single();

    if (existingProfile) {
      // Update email, but only update avatar_url if it is not a custom uploaded avatar
      const updateData: any = { email: profileData.email };
      if (!existingProfile.avatar_url || !existingProfile.avatar_url.includes("/storage/v1/object/public/avatars/")) {
        updateData.avatar_url = profileData.avatar_url;
      }

      await supabase.from("profiles").update(updateData).eq("id", user.id);
    } else {
      await supabase.from("profiles").insert([profileData]);
    }
  }

  // Clear the cookie so it doesn't apply on future logins
  cookieStore.delete("bvrithub_register");

  return NextResponse.redirect(new URL(next, requestUrl.origin));
}
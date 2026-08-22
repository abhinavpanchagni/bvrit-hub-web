import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_INITIAL_PASSWORD;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!email || !password || !supabaseUrl || !serviceRoleKey) {
      return NextResponse.json({ error: "Missing required environment variables." }, { status: 500 });
    }

    // Use service role key to bypass RLS and create admin safely
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Check if the admin already exists
    const { data: usersData, error: listError } = await supabaseAdmin.auth.admin.listUsers();
    
    if (listError) {
      console.error("List users error:", listError);
      return NextResponse.json({ error: "Failed to list users." }, { status: 500 });
    }

    const adminUser = usersData.users.find((u) => u.email === email);

    if (adminUser) {
      // User exists in auth. Ensure profile exists and has admin role.
      const { data: profile, error: profileError } = await supabaseAdmin
        .from('profiles')
        .select('id, role')
        .eq('id', adminUser.id)
        .single();
        
      if (profileError || !profile) {
        // Profile missing, create it
        await supabaseAdmin.from('profiles').insert({
          id: adminUser.id,
          name: 'BVRIT Hub Admin',
          email: adminUser.email,
          role: 'admin',
          must_change_password: true
        });
        return NextResponse.json({ message: "Admin profile created for existing auth user." });
      }

      if (profile.role !== 'admin') {
         await supabaseAdmin.from('profiles').update({ role: 'admin' }).eq('id', adminUser.id);
         return NextResponse.json({ message: "Existing user upgraded to admin role." });
      }

      return NextResponse.json({ message: "Admin account already exists and is configured correctly." });
    }

    // Admin doesn't exist, create via admin API
    const { data: newUserData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: "BVRIT Hub Admin" }
    });

    if (createError || !newUserData.user) {
      console.error("Create user error:", createError);
      return NextResponse.json({ error: "Failed to create admin user.", details: createError }, { status: 500 });
    }

    // Wait a moment for triggers to run, then explicitly set role
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Explicitly update or insert the profile
    const { error: upsertError } = await supabaseAdmin.from('profiles').upsert({
      id: newUserData.user.id,
      name: "BVRIT Hub Admin",
      email: email,
      role: 'admin',
      must_change_password: true
    }, { onConflict: 'id' });
    
    if (upsertError) {
       console.error("Profile update error:", upsertError);
    }

    return NextResponse.json({ message: "Admin account initialized successfully!" });
  } catch (error) {
    console.error("Init admin error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

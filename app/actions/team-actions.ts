"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function addTeamResource(teamId: string, title: string, url: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: team } = await supabase.from("teams").select("shared_resources").eq("id", teamId).single();
  if (!team) return { success: false, error: "Team not found" };

  const newResource = { id: crypto.randomUUID(), title, url };
  const currentResources = team.shared_resources || [];
  
  const { error } = await supabase
    .from("teams")
    .update({ shared_resources: [...currentResources, newResource] })
    .eq("id", teamId);

  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function removeTeamResource(teamId: string, resourceId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: team } = await supabase.from("teams").select("shared_resources").eq("id", teamId).single();
  if (!team) return { success: false, error: "Team not found" };

  const currentResources = team.shared_resources || [];
  const updatedResources = currentResources.filter((r: any) => r.id !== resourceId);
  
  const { error } = await supabase
    .from("teams")
    .update({ shared_resources: updatedResources })
    .eq("id", teamId);

  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function leaveTeam(teamId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: team } = await supabase.from("teams").select("creator_id").eq("id", teamId).single();

  const { error } = await supabase
    .from("team_members")
    .delete()
    .eq("team_id", teamId)
    .eq("user_id", user.id);

  if (error) return { success: false, error: error.message };

  if (team) {
    // Cancel accepted requests between this user and the creator to prevent auto-sync from re-adding them
    await supabase.from("team_requests")
      .update({ status: 'cancelled' })
      .eq("status", "accepted")
      .or(`and(sender_id.eq.${user.id},receiver_id.eq.${team.creator_id}),and(sender_id.eq.${team.creator_id},receiver_id.eq.${user.id})`);
  }
  
  // Decrement team count and un-form if necessary
  const { count } = await supabase.from("team_members").select("*", { count: 'exact' }).eq("team_id", teamId);
  if (count && count < 4) {
      await supabase.from("teams").update({ status: 'forming' }).eq("id", teamId);
  }

  return { success: true };
}

export async function deleteTeam(teamId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: team } = await supabase.from("teams").select("creator_id").eq("id", teamId).single();
  if (!team || team.creator_id !== user.id) return { success: false, error: "Not authorized" };

  const { data: members } = await supabase.from("team_members").select("user_id").eq("team_id", teamId);

  // Manually delete dependencies to avoid foreign key constraint errors
  await supabase.from("team_messages").delete().eq("team_id", teamId);
  await supabase.from("team_members").delete().eq("team_id", teamId);

  // Cancel accepted requests to prevent auto-syncing them back into a new team
  if (members) {
    for (const member of members) {
      if (member.user_id !== user.id) {
        await supabase.from("team_requests")
          .update({ status: 'cancelled' })
          .eq("status", "accepted")
          .or(`and(sender_id.eq.${member.user_id},receiver_id.eq.${user.id}),and(sender_id.eq.${user.id},receiver_id.eq.${member.user_id})`);
      }
    }
  }

  const { error } = await supabase
    .from("teams")
    .delete()
    .eq("id", teamId);

  if (error) return { success: false, error: error.message };
  return { success: true };
}

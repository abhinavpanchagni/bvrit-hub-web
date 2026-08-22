"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Profile, TeamRequest, Team, TeamMember, TeamMessage } from "@/lib/network-types";

// Helper to get connected user IDs for the current user
async function getConnectedUserIds(supabase: any, currentUserId: string): Promise<string[]> {
  // A connection exists if there is an accepted team request between the two users
  const { data: requests } = await supabase
    .from("team_requests")
    .select("sender_id, receiver_id")
    .eq("status", "accepted")
    .or(`sender_id.eq.${currentUserId},receiver_id.eq.${currentUserId}`);

  if (!requests) return [];

  const connectedIds = new Set<string>();
  requests.forEach((req: any) => {
    if (req.sender_id !== currentUserId) connectedIds.add(req.sender_id);
    if (req.receiver_id !== currentUserId) connectedIds.add(req.receiver_id);
  });

  return Array.from(connectedIds);
}

// 1. Fetch profiles securely (privacy-first)
export async function getMatchesSecurely(): Promise<Profile[]> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  let connectedUserIds: string[] = [];
  if (user) {
    connectedUserIds = await getConnectedUserIds(supabase, user.id);
  }

  // Fetch all open to collaborate
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("open_to_collaborate", true)
    .order("name", { ascending: true });

  if (error || !data) {
    console.error("Error fetching profiles:", error);
    return [];
  }

  // Map data to profiles with privacy enforcement
  const mappedData = data.map((p: any) => {
    const isConnected = user && (connectedUserIds.includes(p.id) || p.id === user.id);

    // Baseline profile (privacy safe)
    const baseProfile: Profile = {
      id: p.id,
      username: p.username,
      branch: p.branch,
      year: p.year || 1, // fallback to 1st year
      skills: p.skills || [],
      skill_levels: p.skill_levels || {},
      interests: p.interests || [],
      interested_in: p.interested_in || ["Hackathon", "Project", "Ideathon"],
      looking_for: p.looking_for || [],
      avatar_url: p.avatar_url,
      // Private fields hidden initially
      name: "",
      bio: "",
      projects: [],
      github_url: "",
      linkedin_url: "",
      portfolio_url: ""
    };

    if (isConnected) {
      // Reveal private information if connected or it's the current user
      baseProfile.name = p.name;
      baseProfile.bio = p.bio;
      baseProfile.projects = p.projects;
      baseProfile.github_url = p.github_url;
      baseProfile.linkedin_url = p.linkedin_url;
      baseProfile.portfolio_url = p.portfolio_url;
    }

    return baseProfile;
  });

  return mappedData;
}

// 2. Fetch requests (incoming & sent)
export async function getTeamRequests(): Promise<{ incoming: TeamRequest[], sent: TeamRequest[] }> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { incoming: [], sent: [] };

  const { data: incomingData } = await supabase
    .from("team_requests")
    .select(`*, sender:profiles!team_requests_sender_id_fkey(*)`)
    .eq("receiver_id", user.id)
    .order("created_at", { ascending: false });

  const { data: sentData } = await supabase
    .from("team_requests")
    .select(`*, receiver:profiles!team_requests_receiver_id_fkey(*)`)
    .eq("sender_id", user.id)
    .order("created_at", { ascending: false });

  // Map to enforce privacy on the nested profiles if status != 'accepted'
  const mapRequests = (reqs: any[], profileKey: 'sender' | 'receiver') => {
    return (reqs || []).map((req) => {
      const p = req[profileKey];
      const isAccepted = req.status === "accepted";
      
      const safeProfile: Profile = {
        id: p.id,
        username: p.username,
        branch: p.branch,
        year: p.year || 1,
        skills: p.skills || [],
        skill_levels: p.skill_levels || {},
        avatar_url: p.avatar_url,
        name: isAccepted ? p.name : "",
        email: isAccepted ? p.email : "",
        bio: isAccepted ? p.bio : "",
        github_url: isAccepted ? p.github_url : "",
        linkedin_url: isAccepted ? p.linkedin_url : "",
        portfolio_url: isAccepted ? p.portfolio_url : "",
      };

      return {
        ...req,
        [profileKey]: safeProfile
      };
    });
  };

  return {
    incoming: mapRequests(incomingData || [], 'sender'),
    sent: mapRequests(sentData || [], 'receiver')
  };
}

// 3. Send Team Request
export async function sendTeamRequest(receiverId: string, teamType: string, requestedSkills: string[]) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  if (user.id === receiverId) throw new Error("Cannot send request to yourself");

  // Check if pending request exists
  const { data: existing } = await supabase
    .from("team_requests")
    .select("id")
    .eq("sender_id", user.id)
    .eq("receiver_id", receiverId)
    .in("status", ["pending", "accepted"]);

  if (existing && existing.length > 0) {
    return { success: false, error: "Request already sent or accepted" };
  }

  const { error } = await supabase
    .from("team_requests")
    .insert({
      sender_id: user.id,
      receiver_id: receiverId,
      team_type: teamType,
      requested_skills: requestedSkills,
      status: "pending"
    });

  if (error) return { success: false, error: error.message };
  return { success: true };
}

// 4. Update Request Status (Accept/Decline/Cancel)
export async function updateRequestStatus(requestId: string, status: 'accepted' | 'declined' | 'cancelled') {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: request } = await supabase
    .from("team_requests")
    .select("*")
    .eq("id", requestId)
    .single();

  if (!request) return { success: false, error: "Request not found" };

  // Authorization check
  if (status === 'cancelled' && request.sender_id !== user.id) {
    return { success: false, error: "Unauthorized" };
  }
  if ((status === 'accepted' || status === 'declined') && request.receiver_id !== user.id) {
    return { success: false, error: "Unauthorized" };
  }

  const { error } = await supabase
    .from("team_requests")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", requestId);

  if (error) return { success: false, error: error.message };

  if (status === 'accepted') {
    // Check if sender has a team
    const { data: memberData } = await supabase
      .from("team_members")
      .select("team_id")
      .eq("user_id", request.sender_id)
      .limit(1)
      .single();

    let teamIdToJoin = memberData?.team_id;

    if (!teamIdToJoin) {
      // Create a team for the sender
      const teamName = `${request.team_type} Team`;
      const { data: newTeam } = await supabase
        .from("teams")
        .insert({
          name: teamName,
          team_type: request.team_type,
          creator_id: request.sender_id,
          status: "forming"
        })
        .select()
        .single();
      
      if (newTeam) {
        teamIdToJoin = newTeam.id;
        await supabase
          .from("team_members")
          .insert({
            team_id: newTeam.id,
            user_id: request.sender_id,
            role: 'owner'
          });
      }
    }

    if (teamIdToJoin) {
      // Add receiver to the team
      await supabase
        .from("team_members")
        .insert({
          team_id: teamIdToJoin,
          user_id: request.receiver_id,
          role: 'member'
        });
        
      // Update team status if formed
      const { count } = await supabase.from("team_members").select("*", { count: 'exact' }).eq("team_id", teamIdToJoin);
      if (count && count >= 4) {
          await supabase.from("teams").update({ status: 'formed' }).eq("id", teamIdToJoin);
      }
    }
  }

  return { success: true };
}

// 5. Get User's Team
export async function getMyTeam() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  // Find a team where user is a member
  const { data: memberData } = await supabase
    .from("team_members")
    .select("team_id")
    .eq("user_id", user.id)
    .limit(1)
    .single();

  if (!memberData) return null;

  const { data: teamData } = await supabase
    .from("teams")
    .select(`*, members:team_members(*, user:profiles!team_members_user_id_fkey(*))`)
    .eq("id", memberData.team_id)
    .single();

  return { team: teamData as Team, currentUserId: user.id };
}

// 6. Create Team
export async function createTeam(name: string, teamType: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // Check if already in a team
  const existingTeam = await getMyTeam();
  if (existingTeam) return { success: false, error: "Already in a team" };

  const { data: newTeam, error: teamError } = await supabase
    .from("teams")
    .insert({
      name,
      team_type: teamType,
      creator_id: user.id,
      status: "forming"
    })
    .select()
    .single();

  if (teamError) return { success: false, error: teamError.message };

  const { error: memberError } = await supabase
    .from("team_members")
    .insert({
      team_id: newTeam.id,
      user_id: user.id,
      role: 'owner'
    });

  if (memberError) return { success: false, error: memberError.message };

  return { success: true, teamId: newTeam.id };
}

// 7. Add Member to Team (after request is accepted, owner can add them)
export async function addMemberToTeam(teamId: string, userId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // Check if current user is creator/owner
  const { data: team } = await supabase.from("teams").select("creator_id").eq("id", teamId).single();
  if (!team || team.creator_id !== user.id) return { success: false, error: "Not authorized" };

  // Check team size limit (6)
  const { count } = await supabase.from("team_members").select("*", { count: 'exact' }).eq("team_id", teamId);
  if (count && count >= 6) return { success: false, error: "Team is full (max 6 members)" };

  const { error } = await supabase
    .from("team_members")
    .insert({
      team_id: teamId,
      user_id: userId,
      role: 'member'
    });

  if (error) return { success: false, error: error.message };
  
  // Check if team is fully formed now (>= 4 members)
  if (count && count + 1 >= 4) {
      await supabase.from("teams").update({ status: 'formed' }).eq("id", teamId);
  }

  return { success: true };
}

// 8. Fetch Chat Messages
export async function getTeamMessages(teamId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  // RLS will ensure user is a member
  const { data } = await supabase
    .from("team_messages")
    .select(`*, sender:profiles!team_messages_sender_id_fkey(name, username, avatar_url)`)
    .eq("team_id", teamId)
    .order("created_at", { ascending: true });

  return data as TeamMessage[] || [];
}

// 9. Send Chat Message
export async function sendTeamMessage(teamId: string, message: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { error } = await supabase
    .from("team_messages")
    .insert({
      team_id: teamId,
      sender_id: user.id,
      message
    });

  if (error) return { success: false, error: error.message };
  return { success: true };
}

// 10. Sync Accepted Requests to Teams
export async function syncAcceptedRequestsToTeams() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Unauthorized" };

  const { data: acceptedRequests } = await supabase
    .from("team_requests")
    .select("*")
    .eq("status", "accepted")
    .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`);

  if (!acceptedRequests || acceptedRequests.length === 0) return { success: true };

  for (const request of acceptedRequests) {
    const { data: memberData } = await supabase
      .from("team_members")
      .select("team_id")
      .eq("user_id", request.sender_id)
      .limit(1)
      .maybeSingle();

    let teamIdToJoin = memberData?.team_id;

    if (!teamIdToJoin) {
      const { data: newTeam } = await supabase
        .from("teams")
        .insert({
          name: `${request.team_type} Team`,
          team_type: request.team_type,
          creator_id: request.sender_id,
          status: "forming"
        })
        .select()
        .single();
      
      if (newTeam) {
        teamIdToJoin = newTeam.id;
        await supabase
          .from("team_members")
          .insert({ team_id: newTeam.id, user_id: request.sender_id, role: 'owner' });
      }
    }

    if (teamIdToJoin) {
      const { data: existing } = await supabase
        .from("team_members")
        .select("id")
        .eq("team_id", teamIdToJoin)
        .eq("user_id", request.receiver_id)
        .maybeSingle();

      if (!existing) {
        await supabase
          .from("team_members")
          .insert({ team_id: teamIdToJoin, user_id: request.receiver_id, role: 'member' });
          
        const { count } = await supabase.from("team_members").select("*", { count: 'exact' }).eq("team_id", teamIdToJoin);
        if (count && count >= 4) {
            await supabase.from("teams").update({ status: 'formed' }).eq("id", teamIdToJoin);
        }
      }
    }
  }
  return { success: true };
}

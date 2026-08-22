export interface Profile {
  id: string;
  name: string;
  email?: string;
  username: string;
  avatar_url: string;
  branch: string;
  year: number;
  bio: string;
  skills: string[];
  projects?: string[];
  github_url: string;
  linkedin_url: string;
  portfolio_url: string;
  
  // New fields for Team Finder
  skill_levels?: Record<string, 'Learning' | 'Comfortable' | 'Strong'>;
  interests?: string[];
  interested_in?: string[];
  looking_for?: string[];
}

export interface TeamRequest {
  id: string;
  sender_id: string;
  receiver_id: string;
  team_id?: string | null;
  team_type: string;
  requested_skills: string[];
  status: 'pending' | 'accepted' | 'declined' | 'cancelled';
  created_at: string;
  updated_at: string;
  sender?: Profile; // Populated from join
  receiver?: Profile; // Populated from join
}

export interface Team {
  id: string;
  name: string;
  creator_id: string;
  team_type: string;
  status: 'forming' | 'formed';
  created_at: string;
  shared_resources?: { id: string; title: string; url: string; }[] | null;
  members?: TeamMember[];
}

export interface TeamMember {
  id: string;
  team_id: string;
  user_id: string;
  role: string;
  joined_at: string;
  user?: Profile; // Populated from join
}

export interface TeamMessage {
  id: string;
  team_id: string;
  sender_id: string;
  message: string;
  created_at: string;
  sender?: Profile; // Populated from join
}

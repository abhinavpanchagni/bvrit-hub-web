-- DROP existing tables to cleanly re-create them with proper references
DROP TABLE IF EXISTS public.team_messages;
DROP TABLE IF EXISTS public.team_requests;
DROP TABLE IF EXISTS public.team_members;
DROP TABLE IF EXISTS public.teams;

-- Create Teams Table
CREATE TABLE public.teams (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    team_type TEXT NOT NULL,
    status TEXT DEFAULT 'forming' CHECK (status IN ('forming', 'formed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Team Members Table
CREATE TABLE public.team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    team_id UUID REFERENCES public.teams(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'member',
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(team_id, user_id)
);

-- Create Team Requests Table
CREATE TABLE public.team_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    receiver_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    team_id UUID REFERENCES public.teams(id) ON DELETE SET NULL,
    team_type TEXT NOT NULL,
    requested_skills TEXT[] DEFAULT '{}',
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Team Messages Table
CREATE TABLE public.team_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    team_id UUID REFERENCES public.teams(id) ON DELETE CASCADE,
    sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Notifications Table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    link_url TEXT
);

-- Enable RLS
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_messages ENABLE ROW LEVEL SECURITY;

-- Team Policies
-- Anyone can read a team if they are a member of it. For simplicity in the app, let's say anyone authenticated can read team basic info.
CREATE POLICY "Anyone can view teams" ON public.teams FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users can create teams" ON public.teams FOR INSERT WITH CHECK (auth.uid() = creator_id);
CREATE POLICY "Creator can update team" ON public.teams FOR UPDATE USING (auth.uid() = creator_id);

-- Team Members Policies
CREATE POLICY "Anyone can view team members" ON public.team_members FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users can insert themselves or creators can add" ON public.team_members FOR INSERT WITH CHECK (
    auth.uid() = user_id OR EXISTS (SELECT 1 FROM public.teams WHERE id = team_id AND creator_id = auth.uid())
);
CREATE POLICY "Team creator can manage members" ON public.team_members FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.teams WHERE id = team_id AND creator_id = auth.uid())
);
CREATE POLICY "Members can leave" ON public.team_members FOR DELETE USING (auth.uid() = user_id);

-- Team Requests Policies
-- Users can see requests they sent or received
CREATE POLICY "Users can view their requests" ON public.team_requests FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = receiver_id);
CREATE POLICY "Users can insert requests they send" ON public.team_requests FOR INSERT WITH CHECK (auth.uid() = sender_id);
CREATE POLICY "Receiver can update request status" ON public.team_requests FOR UPDATE USING (auth.uid() = receiver_id);
CREATE POLICY "Sender can cancel request" ON public.team_requests FOR UPDATE USING (auth.uid() = sender_id);

-- Team Messages Policies
-- Only members can view and insert messages
CREATE POLICY "Members can view messages" ON public.team_messages FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.team_members WHERE team_id = public.team_messages.team_id AND user_id = auth.uid())
);
CREATE POLICY "Members can insert messages" ON public.team_messages FOR INSERT WITH CHECK (
    auth.uid() = sender_id AND EXISTS (SELECT 1 FROM public.team_members WHERE team_id = public.team_messages.team_id AND user_id = auth.uid())
);

-- Notifications Policies
DROP POLICY IF EXISTS "Users can view their notifications" ON public.notifications;
DROP POLICY IF EXISTS "System can insert notifications" ON public.notifications;
DROP POLICY IF EXISTS "Users can update their notifications" ON public.notifications;

CREATE POLICY "Users can view their notifications" ON public.notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "System can insert notifications" ON public.notifications FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update their notifications" ON public.notifications FOR UPDATE USING (auth.uid() = user_id);

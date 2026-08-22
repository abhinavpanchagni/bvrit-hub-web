ALTER TABLE public.teams ADD COLUMN IF NOT EXISTS shared_resources JSONB DEFAULT '[]'::jsonb;

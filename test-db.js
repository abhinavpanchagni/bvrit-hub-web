const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTables() {
  console.log("Checking tables...");
  
  const { data, error } = await supabase.from('team_requests').select('id').limit(1);
  
  if (error) {
    console.error("Error accessing team_requests:", error.message);
  } else {
    console.log("team_requests table exists!");
  }

  const { data: teamData, error: teamError } = await supabase.from('teams').select('id').limit(1);
  
  if (teamError) {
    console.error("Error accessing teams:", teamError.message);
  } else {
    console.log("teams table exists!");
  }
}

checkTables();

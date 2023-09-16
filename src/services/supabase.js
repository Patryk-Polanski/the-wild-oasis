import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qqfzusonfjlfukizyush.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZnp1c29uZmpsZnVraXp5dXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NjE0OTYsImV4cCI6MjAxMDQzNzQ5Nn0.qRa8uLgYriWg55jMyqj9vqLpq89wfH6qYCqyiyCKads';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

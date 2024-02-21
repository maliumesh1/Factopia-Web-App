import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ylvwpolxxswaddbjbfbc.supabase.com";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsdndwb2x4eHN3YWRkYmpiZmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MzU5MzUsImV4cCI6MjAyMzUxMTkzNX0.L8QihNctEJMG1fUo2zI18ehXlJ7FBtzittmIUvauLqI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

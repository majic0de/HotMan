import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sartqrmvzlvnuryhyfwf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcnRxcm12emx2bnVyeWh5ZndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzOTc4MzYsImV4cCI6MjA1NDk3MzgzNn0.KBFElgfac6y4Ff9VvcO0b1qmAGAR6RqzDhom6lKkvzo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rvsczbunfmroundhoumo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2c2N6YnVuZm1yb3VuZGhvdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMDMxMjAsImV4cCI6MjAxNDY3OTEyMH0._YsSkTvTd-z_keDFohUppOqFv6Cp0Aj5SbdYv11Zf_0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

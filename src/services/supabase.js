import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xuxpqowhavlzgfiqouvs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1eHBxb3doYXZsemdmaXFvdXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNDcwNjAsImV4cCI6MjA1NTYyMzA2MH0.1jDxjg9HGSjGPH3WKQ7fuSJ_cKLBiCL4D1S7212bDmQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://eiwzgkicvadkzyrtwnct.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpd3pna2ljdmFka3p5cnR3bmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MzA3ODAsImV4cCI6MjAyOTIwNjc4MH0.rD65dR5X_33jutGpfDBPUcAKTPf1Tyoq-e5TvZGQAw4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

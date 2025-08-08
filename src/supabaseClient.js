import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mxbwindhdsyqmppalcpq.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14YndpbmRoZHN5cW1wcGFsY3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NTU3NjYsImV4cCI6MjA3MDIzMTc2Nn0.Pk7-KXJyOY5atS-hvV_1_Bx-klrg0EIiYEMhgMNHsu0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

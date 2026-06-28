import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mnsblgvjkrckjllubwbo.supabase.co';
const supabaseAnonKey = 'sb_publishable_vgSeRONJ5D7mwSAiIJRQmw_BVuI_Hcx';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;

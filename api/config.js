import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = 'https://prometeoatenasades5781.supabase.co';
const supabaseKey = process.env.SB_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

const { createClient } = require('@supabase/supabase-js');
const url = process.env.SUPABASE_URL;
const clave = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(url, clave);
module.exports = supabase;

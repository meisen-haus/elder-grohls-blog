import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Server-side Supabase client with service role key
// This should only be used in server components and server actions
export const supabase = createClient(supabaseUrl, supabaseServiceKey)


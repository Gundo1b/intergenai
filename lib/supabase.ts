import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kqfahnpoqiwfbmkgclzx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZmFobnBvcWl3ZmJta2djbHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTEwNjAsImV4cCI6MjA4MDk2NzA2MH0.xySLj4oQhzTZ7EUFRecnlB-hC3XjG8iv4OgHLOFGQhk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const syncUserToSupabase = async (user: any) => {
    if (!user) {
        console.log('No user provided to sync');
        return;
    }

    console.log('Syncing user to Supabase:', user);

    const { id, email_addresses, first_name, last_name } = user;
    const email = email_addresses?.[0]?.email_address;
    const name = `${first_name || ''} ${last_name || ''}`.trim();

    console.log('User data:', { id, email, name });

    // Check if user already exists
    const { data: existingUser, error: selectError } = await supabase
        .from('users')
        .select('id')
        .eq('id', id)
        .single();

    if (selectError && selectError.code !== 'PGRST116') { // PGRST116 is "not found"
        console.error('Error checking existing user:', selectError);
        return;
    }

    if (existingUser) {
        console.log('User already exists in Supabase');
        return; // Already synced
    }

    // Insert new user
    const { error } = await supabase
        .from('users')
        .insert({
            id,
            email,
            name,
            created_at: new Date().toISOString(),
        });

    if (error) {
        console.error('Error inserting user to Supabase:', error);
    } else {
        console.log('User successfully synced to Supabase');
    }
};

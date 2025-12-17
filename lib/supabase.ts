import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kqfahnpoqiwfbmkgclzx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZmFobnBvcWl3ZmJta2djbHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTEwNjAsImV4cCI6MjA4MDk2NzA2MH0.xySLj4oQhzTZ7EUFRecnlB-hC3XjG8iv4OgHLOFGQhk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

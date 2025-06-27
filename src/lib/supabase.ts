'use client';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cbycaviwhiaejirlovcy.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNieWNhdml3aGlhZWppcmxvdmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5OTUxMjMsImV4cCI6MjA2NjU3MTEyM30.xjTUnJHP-UUaL2b6BCA6DIfzBaiuo4FGP-gkDPUjbRo';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Type definitions for our database
export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  message: string;
  pathway: 'tech' | 'biotech';
  created_at?: string;
  updated_at?: string;
} 
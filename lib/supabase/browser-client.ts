"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { supabaseUrl, supabasePublishableKey } from "./config";

// Module-level singleton — one client instance shared across the entire browser session.
// IMPORTANT: Do not create a new client on every render or call. Multiple instances
// can cause duplicate auth listeners and unexpected session behaviour.
let client: SupabaseClient | null = null;

// Returns the shared Supabase browser client, creating it on the first call.
// Use this in Client Components whenever you need to interact with Supabase from the browser.
export function getSupabaseBrowserClient(): SupabaseClient {
  // Lazy-initialise: only create the client once, then reuse it.
  if (!client) {
    client = createBrowserClient(supabaseUrl, supabasePublishableKey);
  }
  return client;
}

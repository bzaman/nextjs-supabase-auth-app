// Single source of truth for Supabase connection config.
// IMPORTANT: Both vars must be prefixed with NEXT_PUBLIC_ so they are
// available in both server and browser bundles. Set them in .env.local before running the app.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

// Fail fast so a missing env var surfaces immediately at startup, not silently at runtime.
if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are not set yet",
  );
}

export { supabaseUrl, supabasePublishableKey };

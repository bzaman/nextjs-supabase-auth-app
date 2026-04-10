import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { supabaseUrl, supabasePublishableKey } from "./config";

// Creates a Supabase client scoped to the current server request.
// IMPORTANT: Call this inside a Server Component, Server Action, or Route Handler —
// never at the module level. `cookies()` from next/headers is request-scoped and
// will throw if accessed outside a request context.
export async function createSupabaseServerClient() {
  // Grab the request's cookie store so the client can read and write auth tokens.
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabasePublishableKey, {
    cookies: {
      // Return all cookies from the current request for the Supabase client to inspect.
      getAll() {
        return cookieStore.getAll();
      },
      // Write updated auth cookies back to the response.
      // The try/catch is intentional — setAll can be called from a Server Component
      // where the response is already finalized and cookie writes are not allowed.
      // In that case the error is logged and ignored rather than crashing the render.
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch (error) {
          console.error(error);
        }
      },
    },
  });
}

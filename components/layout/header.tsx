"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { User } from "@supabase/supabase-js";

import Logo from "@/components/shared/logo";


const supabase = getSupabaseBrowserClient();

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <header className="relative w-full flex items-center py-4 md:py-5 border-b border-b-card-background bg-card-background/30">
      <nav className="container flex items-center justify-between">
        <Logo
          href="/"
          size={28}
          fill="var(--ink-soft)"
          title="Brand name"
        />

        <div className="flex items-center gap-4">
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-sm hover:text-white transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link href="/auth/login" className="transition-colors">
                Sign In
              </Link>
              <Link href="/google-login" className="transition-colors">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

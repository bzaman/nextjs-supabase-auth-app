import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <p className="text-lg tracking-wide"><Link href="/email-password">email-password</Link></p>
       <p className="text-lg tracking-wide"><Link href="/google-login">Register</Link></p>
      </main>
    </div>
  );
}

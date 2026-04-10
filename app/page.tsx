import Link from "next/link";
import FluidText from "@/components/ui/fluid-text";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full min-h-svh flex items-center justify-center py-6 md:py-10 lg:py-14">
      <article className="container">
        <FluidText
          as="h1"
          minFontSize={40}
          maxFontSize={70}
          className="font-extrabold text-center mb-4"
        >
          bzaman Studio
        </FluidText>

        <div className="flex justify-center mb-5 md:mb-8">
          <FluidText
            minFontSize={19}
            maxFontSize={25}
            className="text-center flex-1 max-w-2xl"
          >
            Creative hub where inspiration meets innovation. This space reflects
            our design ethos, blending local charm with modern functinality,
            welcoming clients to collaborate on their dream projects.
          </FluidText>
        </div>

        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/auth/login">Sign In</Link>
          </Button>

          <Button asChild size="lg" variant="secondary">
            <Link href="/auth/sign-up">Sign Up</Link>
          </Button>
        </div>
      </article>
    </main>
  );
}

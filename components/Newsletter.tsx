import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="w-full min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center bg-[#D35C65]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mabry font-semibold text-white">
            Join our newsletter.
          </h2>
          <p className="text-xl text-white/90 max-w-xl">
            Get insider tips, career hacks, and the latest job
            opportunities—delivered right to your inbox.
          </p>

          {/* Email input section */}
          <div className="space-y-3 max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 text-lg bg-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="h-12 px-8 text-lg font-normal rounded-md bg-[#E75A82] hover:bg-[#E75A82]/90 text-white whitespace-nowrap">
                Subscribe now!
              </Button>
            </div>
            <p className="text-sm text-white/70">We won't spam you!</p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
          <Image
            src="/newsletter.svg"
            alt="Newsletter illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <section className="-mt-5 w-full min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center bg-[#D35C65]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mabry font-semibold text-white">
            Join our newsletter.
          </h2>
          <p className="text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
            Get insider tips, career hacks, and the latest job opportunities—
            delivered right to your inbox.
          </p>

          {/* Email input section */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-3/4 bg-white p-1 rounded-xl shadow-[0_4px_30px_rgba(231,90,130,0.15)] mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-14 text-xl text-[#b88c8e] border-transparent text-center placeholder:text-[#B88C8E] placeholder:text-lg flex-1"
              />
              <Button
                onClick={() => setIsSubscribed(true)}
                className="h-14 px-8 text-lg font-normal rounded-xl bg-gradient-to-t from-[#b24e55] to-[#E3405F] hover:opacity-90 text-white w-full sm:w-auto"
              >
                Subscribe Now
                <svg
                  className="ml-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
            {isSubscribed && (
              <p className="text-white font-medium text-center lg:text-left sm:w-3/4 mx-auto lg:mx-0">
                Subscribed! ✅
              </p>
            )}
          </div>
          <p className="text-sm text-white text-center lg:text-left sm:w-3/4 mx-auto lg:mx-0">
            We won't spam you. Promise.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
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

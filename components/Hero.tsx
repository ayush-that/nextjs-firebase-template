"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-8 lg:pt-20 w-full flex flex-col items-center justify-center px-4 bg-[#fff7f8]">
      {/* What's new badge */}
      <div className="mb-8 lg:pl-2 lg:pr-24">
        <div className="inline-flex items-center rounded-full border border-[#ffe0e0] bg-[#ffe0e0] px-4 py-1.5">
          <span className="text-sm font-medium text-[#3e3233]">What's new</span>
          <div className="mx-2 h-4 w-[1px] bg-[#b16368]" />
          <span className="text-sm font-semibold text-[#b16368]">
            Coming soon to mobile
          </span>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-mabry font-semibold text-[#403334] max-w-4xl mb-6">
        Land your <span className="text-[#b24e55]">next opportunity</span>{" "}
        without lifting a finger.
      </h1>

      {/* Subheading */}
      <p className="font-light text-lg md:text-xl text-center text-[#4A3D55] max-w-3xl mb-12">
        Answer a brief set of questions, and our AI will match you with
        opportunities, tailor your applications, and submit them — automating
        your whole search for the right role.
      </p>

      {/* Email input section */}
      <div className="w-full max-w-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-xl shadow-[0_4px_60px_rgba(231,90,130,0.35)]">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-14 text-xl text-[#b88c8e] border-transparent text-center placeholder:text-[#B88C8E] placeholder:text-lg"
          />
          <Button
            className="h-14 px-8 text-lg font-normal rounded-xl bg-gradient-to-t from-[#b24e55] to-[#E3405F] hover:opacity-90 text-white whitespace-nowrap"
            onClick={() => (window.location.href = "#contact")}
          >
            Find your next role
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
        <p className="text-sm text-center text-[#b26469]">
          Try now- first few applications free!
        </p>
      </div>
    </div>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fff7f8] flex flex-col items-center justify-center p-4">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-[#ffe0e0] bg-[#ffe0e0] px-4 py-1.5 mb-8">
        <span className="text-sm font-medium text-[#b16368]">Coming Soon</span>
      </div>

      {/* Main Content */}
      <p className="text-lg md:text-xl text-center text-[#4A3D55] max-w-2xl mb-12">
        We're currently crafting our privacy policy to ensure your data is
        protected. Please check back soon!
      </p>

      {/* Back to Home Button */}
      <Link href="/">
        <Button className="h-14 px-8 text-lg font-normal rounded-xl bg-gradient-to-t from-[#b24e55] to-[#E3405F] hover:opacity-90 text-white">
          Back to Home
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
      </Link>
    </div>
  );
}

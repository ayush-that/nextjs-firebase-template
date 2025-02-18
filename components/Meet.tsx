import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Meet = () => {
  return (
    <section className="pt-36 w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#FFEDED]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/meet/hand.svg"
                alt="Wave hand"
                width={48}
                height={48}
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mabry font-semibold text-[#403334]">
            Meet <span className="text-[#b24e55]">Hirebuddy</span>
          </h2>
          <p className="text-xl font-light text-[#4A3D55] max-w-2xl mx-auto">
            Your personal career companion,
            <br /> making opportunities come to you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Search Card */}
          <div className="bg-[#d35c65] rounded-3xl p-8 text-center space-y-4">
            <div className="relative w-full aspect-square max-w-[300px] mx-auto">
              <Image
                src="/meet/targeted-search.svg"
                alt="Targeted search"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl font-mabry font-semibold text-white">
              Targeted search
            </h3>
            <p className="text-white/90 text-base font-light">
              Our algorithm finds and matches you
              <br /> with jobs that suit your skills and
              <br /> preferences from across the web.
            </p>
          </div>

          {/* Apply Card */}
          <div className="bg-white rounded-3xl p-8 text-center space-y-4">
            <div className="relative w-full aspect-square max-w-[300px] mx-auto">
              <Image
                src="/meet/apply-effortlessly.svg"
                alt="Apply effortlessly"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-mabry font-semibold text-[#403334]">
              Apply effortlessly
            </h2>
            <p className="font-light text-[#403334] text-base">
              Apply to multiple jobs with a single <br />
              click. We handle the application <br />
              process, so you don't have to.
            </p>
          </div>

          {/* CVs Card */}
          <div className="bg-[#d35c65] rounded-3xl p-8 text-center space-y-4">
            <div className="relative w-full aspect-square max-w-[300px] mx-auto">
              <Image
                src="/meet/tailored-svg.svg"
                alt="Tailored CVs"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl font-mabry font-semibold text-white">
              Tailored CVs
            </h3>
            <p className="text-white/90 text-base font-light">
              Get professionally tailored CVs and cover
              <br /> letters that make your applications stand out.
            </p>
          </div>
        </div>

        {/* Bottom Section with Bento Filler */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Email Card */}
          <div className="flex-1 bg-white rounded-3xl p-4 pt-2 pb-3 text-center">
            <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto mb-2">
              <Image
                src="/meet/personalized-email.svg"
                alt="Personalized Emails"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-mabry font-semibold text-[#403334] mb-1">
              Personalized Emails
            </h3>
            <p className="text-[#403334] font-light text-base leading-snug">
              We send personalized cold emails to
              <br /> recruiters on your behalf, increasing your
              <br /> chances of getting noticed.
            </p>
          </div>

          {/* Bento Filler - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="rounded-2xl p-4 h-full flex items-center">
              <Image
                src="/meet/bento-filler.svg"
                alt="Feature icons"
                width={80}
                height={400}
                className="w-auto h-max -my-5"
              />
            </div>
          </div>

          {/* Tracking Card */}
          <div className="flex-1 bg-white rounded-3xl p-4 pt-2 pb-3 text-center">
            <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto mb-2">
              <Image
                src="/meet/application-tracking.svg"
                alt="Application Tracking"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-mabry font-semibold text-[#403334] mb-1">
              Application Tracking
            </h3>
            <p className="text-[#4A3D55] text-base font-light leading-snug">
              Stay updated with real-time notifications
              <br /> and status updates for all your job
              <br /> applications.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 px-4 sm:px-0">
          <Button
            className="w-full sm:w-[280px] h-14 px-8 text-xl font-normal rounded-md bg-gradient-to-t from-[#b24e55] to-[#E3405F] hover:opacity-90 text-white flex items-center justify-center gap-2 mx-auto"
            asChild
          >
            <a href="#contact">
              Try Hirebuddy for free
              <svg
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
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Meet;

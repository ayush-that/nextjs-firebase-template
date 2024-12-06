import Image from "next/image";
import { Button } from "@/components/ui/button";

const Working = () => {
  return (
    <section className="w-full min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center bg-[#D35C65]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative w-full aspect-video lg:aspect-square max-w-[600px] mx-auto rounded-3xl overflow-hidden">
            <Image
              src="/cv.png"
              alt="CV upload interface"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[#FFE0E0] px-4 py-1.5">
              <span className="text-sm font-medium text-[#4A3D55]">
                How it works
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                {/* Step number */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-xl font-semibold text-[#D35C65]">
                      1
                    </span>
                  </div>
                </div>

                {/* Step heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-mabry font-semibold text-white">
                  Upload your CV and preferences
                </h2>

                {/* Step description */}
                <p className="text-lg text-white/90 max-w-xl">
                  Start by uploading your CV and sharing your job preferences.
                  This helps us understand your skills and goals, so we can
                  match you with the right opportunities.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button className="h-12 px-8 text-lg font-normal rounded-md bg-white text-[#D35C65] hover:bg-white/90">
                    Try for yourself!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;

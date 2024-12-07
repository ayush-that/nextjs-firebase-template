import Image from "next/image";

const Problem = () => {
  return (
    <section className="mt-12 w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center bg-[#fff7f8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative w-full max-w-[600px] mx-auto">
            <Image
              src="/problem/problem.svg"
              alt="Frustrated job seeker"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-[#FFE0E0] px-4 py-1.5">
              <span className="text-sm font-medium text-[#b26469]">
                The Problem
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-mabry font-semibold text-[#403334]">
                <span className="lg:hidden">
                  Hunting for roles manually can be <span className="text-[#b24e55]">stressful</span> and <span className="text-[#b24e55]">time-consuming</span>.
                </span>
                <span className="hidden lg:inline">
                  Hunting for roles manually can<br /> be <span className="text-[#b24e55]">stressful</span> and{" "}
                  <span className="text-[#b24e55]">time-consuming</span>.
                </span>
              </h2>

              <div className="space-y-6">
                {/* Problem points */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#FFE0E0] rounded-full flex items-center justify-center">
                    <Image
                      src="/problem/search.svg"
                      alt="Search icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="text-lg font-light text-[#403334]">
                    <span className="lg:hidden">Manually applying for roles at multiple places is frustrating.</span>
                    <span className="hidden lg:inline">Manually applying for roles at multiple places<br /> is frustrating.</span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#FFE0E0] rounded-full flex items-center justify-center">
                    <Image
                      src="/problem/hourglass.svg"
                      alt="Time icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="text-lg font-light text-[#403334]">
                    <span className="lg:hidden">Customizing applications repeatedly is time-consuming.</span>
                    <span className="hidden lg:inline">Customizing applications repeatedly is time-<br /> consuming.</span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#FFE0E0] rounded-full flex items-center justify-center">
                    <Image
                      src="/problem/heartbreak.svg"
                      alt="Heartbreak icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="text-lg font-light text-[#403334]">
                    <span className="lg:hidden">Facing constant rejections can lower your confidence.</span>
                    <span className="hidden lg:inline">Facing constant rejections can lower your <br /> confidence.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

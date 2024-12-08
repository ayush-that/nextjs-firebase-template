"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Define the steps data
const steps = [
  {
    number: 1,
    title: "Upload your CV and preferences",
    description:
      "Start by uploading your CV and sharing your job preferences. This helps us understand your skills and goals, so we can match you with the right opportunities.",
    image: "/cv.png",
  },
  {
    number: 2,
    title: "AI-Powered Matching",
    description:
      "Our advanced AI analyzes your profile and matches you with relevant job opportunities across multiple platforms, saving you hours of manual searching.",
    image: "/cv.png",
  },
  {
    number: 3,
    title: "Automated Applications",
    description:
      "We automatically submit tailored applications to matched positions, handling the entire process while keeping you updated on the progress.",
    image: "/cv.png",
  },
];

// Define animation variants for step indicators
const stepVariant = {
  initial: { scale: 1 },
  animate: { scale: 1.2 },
  exit: { scale: 1 },
};

// Define animation variants for content
const contentVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Working = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Add useEffect for auto-advancing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 7000); // Change slide every 7 seconds to accommodate animation delay

    return () => clearInterval(timer);
  }, []);

  // Simplify the button click handler
  const handleClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full min-h-screen py-8 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center">
      <div className="max-w-7xl mx-auto bg-[#D35C65] rounded-3xl p-4 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-video lg:aspect-square max-w-[600px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden"
            >
              <Image
                src={steps[currentStep].image}
                alt={steps[currentStep].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-8">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:pb-11">
              How it works
            </h2>

            <div className="mt-6 sm:mt-12 flex gap-4 sm:gap-12">
              {/* Steps indicator */}
              <div className="flex flex-col items-center gap-3 sm:gap-6 mt-6">
                {steps.map((step, position) =>
                  position === currentStep ? (
                    <motion.div
                      key={position}
                      variants={stepVariant}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center"
                    >
                      <span className="text-base sm:text-xl font-semibold text-[#D35C65]">
                        {step.number}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={position}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white cursor-pointer"
                      onClick={() => setCurrentStep(position)}
                    />
                  )
                )}
              </div>

              {/* Content section */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  variants={contentVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-4 sm:space-y-6 flex-1"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-mabry font-semibold text-white">
                    {steps[currentStep].title}
                  </h3>

                  <p className="text-base sm:text-lg font-light text-white max-w-xl">
                    {steps[currentStep].description}
                  </p>

                  <div className="pt-2 sm:pt-4">
                    <Button
                      onClick={handleClick}
                      className="h-10 sm:h-12 px-6 sm:px-8 text-base sm:text-lg font-normal rounded-md bg-gradient-to-t from-[#f9b6bc] to-[#fffcfd] text-[#8f5055] hover:bg-white/90"
                    >
                      Try it yourself
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;

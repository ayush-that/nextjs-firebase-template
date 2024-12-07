"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const Working = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep === steps.length - 1) {
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <section className="w-full min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center bg-[#D35C65]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-video lg:aspect-square max-w-[600px] mx-auto rounded-3xl overflow-hidden"
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
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[#FFE0E0] px-4 py-1.5">
              <span className="text-sm font-medium text-[#4A3D55]">
                How it works
              </span>
            </div>

            {/* Steps indicator */}
            <div className="flex gap-4 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`w-3 h-3 rounded-full ${
                    index === currentStep ? "bg-white" : "bg-white/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentStep(index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Step number */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-xl font-semibold text-[#D35C65]">
                      {steps[currentStep].number}
                    </span>
                  </div>
                </div>

                {/* Step heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-mabry font-semibold text-white">
                  {steps[currentStep].title}
                </h2>

                {/* Step description */}
                <p className="text-lg text-white/90 max-w-xl">
                  {steps[currentStep].description}
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    onClick={nextStep}
                    className="h-12 px-8 text-lg font-normal rounded-md bg-gradient-to-t from-[#f9b6bc] to-[#fffcfd] text-[#8f5055] hover:bg-white/90"
                  >
                    {currentStep === steps.length - 1
                      ? "Get Started!"
                      : "Next Step"}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;

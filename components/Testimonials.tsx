"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    title: "Effortless",
    quote:
      "I struggled with college placements for months without any interviews. In just two weeks, Hirebuddy got me multiple interviews with zero effort on my part.  ",
    author: "Arnab Kundu",
  },
  {
    id: 2,
    title: "Succesful",
    quote:
      "Hirebuddy's efforts in finding my internship were amazing! After interacting with several companies, I found the perfect fit. Their algorithm works, and the outcomes are fantastic! 10/10 recommended",
    author: "Charvi Sethi",
  },
  {
    id: 3,
    title: "Supportive",
    quote:
      "Hirebuddy completely changed my job search! It made everything so much easier and within weeks I had interviews lined up. I honestly couldn’t have asked for a better experience! ",
    author: "Raghav Gaur",
  },
  {
    id: 4,
    title: "Game Changing",
    quote:
      "Hirebuddy completely changed my job search! It made everything so much easier and within weeks I had interviews lined up. I honestly couldn’t have asked for a better experience! ",
    author: "Raghav Gaur",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="min-h-screen py-8 sm:py-10 md:py-20 bg-[#fccfd1] relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-16 text-[#403334]">
          See what our <span className="text-[#b24e55]">customers</span> have
          <br className="hidden md:block" /> to{" "}
          <span className="text-[#b24e55]">say about us...</span>
        </h2>

        <div className="max-w-7xl mx-auto relative">
          <div className="relative bg-gradient-to-t from-[#b45057] to-[#e4656e] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-12 md:p-16 border-8 sm:border-16 border-[#f78f97] min-h-[400px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]">
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white"
              aria-label="Previous testimonials"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white"
              aria-label="Next testimonials"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 -mx-4 sm:-mx-12 md:-mx-24"
              >
                {[0, 1, 2].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length;
                  return (
                    <div
                      key={index}
                      className="bg-[#ffedee] rounded-[1rem] sm:rounded-[1.5rem] p-4 sm:p-6 md:p-8 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] w-full flex flex-col"
                    >
                      <div className="mb-4 px-2 sm:px-4 flex-1 space-y-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 font-mabry">
                          "{testimonials[index].title}"
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                          {testimonials[index].quote}
                        </p>
                        <p className="font-semibold text-gray-800">
                          {testimonials[index].author}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#ffedee]"
                      : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

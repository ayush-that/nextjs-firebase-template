"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    title: "Effortless",
    quote:
      "I struggled with college placements for months without any interviews. In just two weeks, Hirebuddy got me multiple interviews with zero effort on my part.",
    author: "Arnab Kundu",
  },
  {
    id: 2,
    title: "Successful",
    quote:
      "Hirebuddy's efforts in finding my internship were amazing! After interacting with several companies, I found the perfect fit. Their algorithm works, and the outcomes are fantastic! 10/10 recommended",
    author: "Charvi Sethi",
  },
  {
    id: 3,
    title: "Supportive",
    quote:
      "Hirebuddy completely changed my job search! It made everything so much easier and within weeks I had interviews lined up. I honestly couldn’t have asked for a better experience!",
    author: "Raghav Gaur",
  },
  {
    id: 4,
    title: "Relieving",
    quote:
      "Job hunting used to be so stressful, but Hirebuddy made it so much easier. The platform handled everything, and I landed interviews quickly. It was such a relief!",
    author: "Satyansh Kumar",
  },
  {
    id: 5,
    title: "Seamless",
    quote:
      "Hirebuddy made my job search seamless! From personalized job matches to application tracking, everything was handled effortlessly. I landed interviews fast, and the whole experience was smooth and stress-free!",
    author: "Vaishnavi Kant",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="min-h-screen py-8 sm:py-10 md:py-20 bg-[#fccfd1] relative flex items-center">
      <div className="container mx-auto px-12 relative z-20">
        <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-16 text-[#403334]">
          See what our <span className="text-[#b24e55]">customers</span> have
          <br className="hidden md:block" /> to{" "}
          <span className="text-[#b24e55]">say about us...</span>
        </h2>

        <div className="max-w-7xl mx-auto relative px-24">
          <button
            onClick={handlePrevious}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-[#ffedee] hover:bg-white rounded-full p-2 text-[#b24e55] shadow-md"
            aria-label="Previous testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
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
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-[#ffedee] hover:bg-white rounded-full p-2 text-[#b24e55] shadow-md"
            aria-label="Next testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="relative bg-gradient-to-t from-[#b45057] to-[#e4656e] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-12 md:p-16 border-8 sm:border-16 border-[#f78f97] min-h-[400px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <div className="flex items-center justify-center relative min-h-[300px]">
                  {/* Previous Card (Left) */}
                  <motion.div
                    key={`prev-${currentIndex}`}
                    custom={direction}
                    initial={
                      direction > 0
                        ? { x: -300, opacity: 0 }
                        : { x: -150, opacity: 0.5 }
                    }
                    animate={{ x: -150, opacity: 0.5 }}
                    exit={
                      direction > 0
                        ? { x: -300, opacity: 0 }
                        : { x: 0, opacity: 0 }
                    }
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 transform blur-sm pointer-events-none"
                  >
                    <div className="bg-[#ffedee] rounded-[1rem] p-8 w-96">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                          "
                          {
                            testimonials[
                              (currentIndex - 1 + testimonials.length) %
                                testimonials.length
                            ].title
                          }
                          "
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed line-clamp-4">
                          {
                            testimonials[
                              (currentIndex - 1 + testimonials.length) %
                                testimonials.length
                            ].quote
                          }
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Current Card */}
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ x: direction * 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction * -200, opacity: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="bg-[#ffedee] rounded-[1rem] p-8 w-[32rem] z-10"
                  >
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        "{testimonials[currentIndex].title}"
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {testimonials[currentIndex].quote}
                      </p>
                      <p className="font-semibold text-gray-800">
                        {testimonials[currentIndex].author}
                      </p>
                    </div>
                  </motion.div>

                  {/* Next Card (Right) */}
                  <motion.div
                    key={`next-${currentIndex}`}
                    custom={direction}
                    initial={
                      direction > 0
                        ? { x: 300, opacity: 0 }
                        : { x: 150, opacity: 0.5 }
                    }
                    animate={{ x: 150, opacity: 0.5 }}
                    exit={
                      direction > 0
                        ? { x: 0, opacity: 0 }
                        : { x: 300, opacity: 0 }
                    }
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="absolute right-0 transform blur-sm pointer-events-none"
                  >
                    <div className="bg-[#ffedee] rounded-[1rem] p-8 w-96">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                          "
                          {
                            testimonials[
                              (currentIndex + 1) % testimonials.length
                            ].title
                          }
                          "
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed line-clamp-4">
                          {
                            testimonials[
                              (currentIndex + 1) % testimonials.length
                            ].quote
                          }
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>

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

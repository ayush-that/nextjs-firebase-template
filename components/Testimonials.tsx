"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "With HireBuddy, the entire process was so frictionless, I thought that this would've saved so much of my time had I known this before.",
    author: "Robin Sharma",
    role: "Student, XYZ College",
    avatar: "/testimonials/girl1.png",
  },
  {
    id: 2,
    quote:
      "The platform made hiring incredibly simple. The automated processes saved us countless hours of manual work.",
    author: "Jane Cooper",
    role: "HR Manager, ABC Corp",
    avatar: "/testimonials/girl1.png",
  },
  {
    id: 3,
    quote:
      "I was amazed by how quickly we could find qualified candidates. The AI matching system is truly revolutionary.",
    author: "Michael Chen",
    role: "Tech Lead, DEF Startups",
    avatar: "/testimonials/girl1.png",
  },
  {
    id: 4,
    quote:
      "The interview scheduling and feedback collection features streamlined our entire recruitment process.",
    author: "Sarah Johnson",
    role: "Recruiter, GHI Solutions",
    avatar: "/testimonials/girl1.png",
  },
  {
    id: 5,
    quote:
      "HireBuddy has transformed how we approach hiring. The analytics and insights are invaluable.",
    author: "David Miller",
    role: "CEO, JKL Industries",
    avatar: "/testimonials/girl1.png",
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

  return (
    <section className="min-h-screen py-10 md:py-20 bg-[#fccfd1] relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-16 text-[#403334] font">
          See what our <span className="text-[#b24e55]">customers</span> have
          <br className="hidden md:block" /> to <span className="text-[#b24e55]">say about us...</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-4 -right-4 w-full h-full bg-[#ffeded] rounded-2xl transform rotate-2" />
          <div className="absolute top-2 -right-2 w-full h-full bg-[#ffd4d4] rounded-2xl transform rotate-1" />

          <div className="relative bg-[#e17377] text-white hover:bg-[#d66267] rounded-2xl p-6 md:p-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[0, 1].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 md:p-6 shadow-lg"
                    >
                      <div className="mb-4 md:mb-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                          "Frictionless"
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base">
                          {testimonials[index].quote}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4">
                        <Image
                          src={testimonials[index].avatar}
                          alt={testimonials[index].author}
                          width={40}
                          height={40}
                          className="rounded-full w-10 h-10 md:w-12 md:h-12"
                        />
                        <div>
                          <p className="font-semibold text-sm md:text-base">
                            {testimonials[index].author}
                          </p>
                          <p className="text-gray-500 text-xs md:text-sm">
                            {testimonials[index].role}
                          </p>
                        </div>
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
                    index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50"
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

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "I found a job thanks to Hirebuddy’s efforts in helping me navigate the job search process, and I’m so happy that I used it! The platform was transparent and kept me informed about the process from the start. The team even helped with additional things like negotiating pay and building a proper resume, which was incredibly helpful! 10/10 would recommend!",
    author: "Saranya Ramesh",
    role: "Student, XYZ College",
    avatar: "/testimonials/sample.jpg",
  },
  {
    id: 2,
    quote:
      "I was struggling with college placements for months without getting any interviews or opportunities. Then I used Hirebuddy. In just two weeks, I got interview calls from big companies like Purrple, FiMoney, and ShadowFax. I didn’t have to do anything Hirebuddy took care of it all. I just had to focus on preparing for my interviews. It really worked for me!",
    author: "Arnab Kundu",
    role: "HR Manager, ABC Corp",
    avatar: "/testimonials/sample.jpg",
  },
  {
    id: 3,
    quote:
      "After months of sending applications manually, I discovered Hirebuddy. The automated job matching and application system saved me countless hours. Within a month, I had interviews with companies like Google, Microsoft, and Amazon. The personalized cold emails really helped me stand out from other candidates. I landed my dream job at Google, and I couldn't be happier!",
    author: "Sarah Kim",
    role: "Software Developer, Google",
    avatar: "/testimonials/sample.jpg",
  },
  {
    id: 4,
    quote:
      "As a recent graduate, I was overwhelmed by the job search process. Hirebuddy's AI-powered system not only found relevant positions but also tailored my applications for each role. The CV customization feature was incredible - it helped me highlight the right skills for each position. In just three weeks, I received multiple offers. Thank you Hirebuddy for making my job search journey so smooth!",
    author: "Alex Patel",
    role: "Data Analyst, Meta",
    avatar: "/testimonials/sample.jpg",
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
    <section className="min-h-screen py-8 sm:py-10 md:py-20 bg-[#fccfd1] relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-16 text-[#403334]">
          See what our <span className="text-[#b24e55]">customers</span> have
          <br className="hidden md:block" /> to{" "}
          <span className="text-[#b24e55]">say about us...</span>
        </h2>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative bg-gradient-to-t from-[#b45057] to-[#e4656e] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-12 md:p-16 border-8 sm:border-16 border-[#f78f97] min-h-[400px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 -mx-4 sm:-mx-12 md:-mx-24"
              >
                {[0, 1].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length;
                  return (
                    <div
                      key={index}
                      className="bg-[#ffedee] rounded-[1rem] sm:rounded-[1.5rem] p-6 sm:p-10 md:p-12 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)]"
                    >
                      <div className="mb-6 sm:mb-8">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800 font-mabry">
                          "Frictionless"
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                          {testimonials[index].quote}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <Image
                          src={testimonials[index].avatar}
                          alt={testimonials[index].author}
                          width={48}
                          height={48}
                          className="rounded-lg w-12 h-12 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">
                            {testimonials[index].author}
                          </p>
                          <p className="text-gray-500">
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

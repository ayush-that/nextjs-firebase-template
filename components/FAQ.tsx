"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does HireBuddy personalize my job applications?",
    answer:
      "HireBuddy uses AI to analyze your CV and preferences, tailoring each application to match the specific job requirements and company culture. This personalization increases your chances of getting noticed by recruiters.",
  },
  {
    question: "Can I use Hirebuddy for both jobs and internships?",
    answer:
      "Yes! HireBuddy supports applications for both full-time positions and internships. Our platform adapts the application process based on the type of opportunity you're pursuing.",
  },
  {
    question: "What's included in each pricing plan?",
    answer:
      "Each plan includes different levels of access to our job board, application limits, and support features. Check our pricing section for detailed information about what's included in Gold, Platinum, and Diamond plans.",
  },
  {
    question: "How does the outbound reach feature work?",
    answer:
      "Our outbound reach feature automatically sends personalized emails to recruiters and hiring managers on your behalf, increasing your visibility and chances of landing interviews.",
  },
  {
    question: "Is my data secure with HireBuddy?",
    answer: "Yes, we take data security seriously. All your personal information and documents are encrypted and stored securely. We comply with data protection regulations and never share your information without your consent.",
  },
  {
    question: "How quickly can I start applying for jobs?",
    answer: "You can start applying for jobs immediately after creating your account and uploading your CV. Our AI system processes your information within minutes, allowing you to begin sending personalized applications right away.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pb-12 lg:pb-0 w-full px-4 sm:px-6 md:px-8 lg:px-12 bg-[#FFEDED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-[#ffe0e0] px-4 py-1.5">
              <span className="text-sm font-medium text-[#b26469]">FAQs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-mabry font-semibold text-[#b26469]">
              All the A's to your Q's
            </h2>
            <p className="text-xl text-[#b26469]">We got you covered.</p>
            <div className="relative w-full aspect-square max-w-[500px]">
              <Image
                src="/girl.png"
                alt="FAQ illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side - FAQ accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#ffe0e0]  rounded-2xl overflow-hidden shadow-sm border border-[#f0d3d3]"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-medium text-[#403334]">
                    {faq.question}
                  </span>
                  <span className="text-3xl text-[#5f4f50] transform transition-transform duration-200">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`px-6 transition-all duration-200 ease-in-out ${
                    openIndex === index ? "max-h-48 py-4" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-[#4A3D55]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

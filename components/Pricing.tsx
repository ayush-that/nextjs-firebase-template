"use client";

import Image from "next/image";

const pricingData = [
  {
    tier: "All-in-one-Plan",
    description:
      "For active job seekers aiming for more reach and tailored applications.",
    price: "99",
    features: [
      "100 job applications/month",
      "Guaranteed Interview Call",
      "Application Tracker",
      "Tailored resume & Cover Letter",
      "Priority customer support",
    ],
    imagePath: "/pricing/platinum.png",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="min-h-screen bg-[#ffedee] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto m-24">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full bg-[#ffe0e0] px-4 py-1.5">
            <span className="text-sm font-medium text-[#b26469]">Pricing</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#574547]">
            Plans to boost your <span className="text-[#d35c65]">career</span>.
          </h2>
        </div>

        <div className="flex justify-center mt-16">
          {pricingData.map((plan) => (
            <div
              key={plan.tier}
              className="rounded-3xl p-8 flex flex-col bg-gradient-to-t from-[#b45057] to-[#e4656e] border-12 border-[#f78f97] max-w-md w-full relative"
            >
              <div className="h-24 relative">
                <span className="absolute font-semibold top-0 right-0 bg-gradient-to-t from-[#f9b6bc] to-[#fffcfd] text-[#8f5055] px-3 py-1 rounded-full text-sm">
                  MOST POPULAR
                </span>
                <div className="h-12 w-20 relative">
                  <Image
                    src={plan.imagePath}
                    alt={`${plan.tier} tier`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="h-48 flex flex-col">
                <h3 className="text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-2">
                  {plan.tier}
                </h3>
                <p className="text-white mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    ₹{plan.price}
                  </span>
                  <span className="text-white">/month</span>
                </div>
              </div>

              <div className="h-48 mb-auto">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 bg-white/20">
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-4 px-6 rounded-lg font-medium bg-gradient-to-t from-[#f9b6bc] to-[#fffcfd] text-[#8f5055] transition-colors duration-200"
                >
                  Land your role today!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

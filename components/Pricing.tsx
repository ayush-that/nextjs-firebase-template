import Image from "next/image";

const pricingData = [
  {
    tier: "Gold",
    description:
      "For those starting their job search and needing foundational access.",
    price: "10",
    features: [
      "150 job applications/month",
      "Limited job board access",
      "View up to 200 jobs",
      "Basic resume support",
    ],
    imagePath: "/pricing/gold.png",
  },
  {
    tier: "Platinum",
    description:
      "For active job seekers aiming for more reach and tailored applications.",
    price: "25",
    features: [
      "300 job applications/month",
      "Full job board access",
      "Reach up to 200 emails",
      "Tailored resume & CV",
    ],
    imagePath: "/pricing/platinum.png",
    popular: true,
  },
  {
    tier: "Diamond",
    description:
      "For ambitious job hunters needing full support until interview success.",
    price: "40",
    features: [
      "500 job applications/month",
      "Full job board access",
      "Reach until 5 interviews",
      "Tailored resume & CV",
      "Priority customer support",
    ],
    imagePath: "/pricing/diamond.png",
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
            <span className="text-sm font-medium text-[#b26469]">
              Pricing
            </span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#574547]">
            Plans to boost your <span className="text-[#d35c65]">career</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-end">
          {pricingData.map((plan) => (
            <div
              key={plan.tier}
              className={`rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-t from-[#b45057] to-[#e4656e] border-12 border-[#f78f97] scale-105"
                  : plan.tier === "Diamond"
                  ? "bg-gradient-to-t from-[#fcb4b8] to-[#fccfd1]"
                  : "bg-gradient-to-t from-[#fcb4b8] to-[#fccfd1]"
              } relative`}
            >
              <div className="h-24 relative">
                {plan.popular && (
                  <span className="absolute font-semibold top-0 right-0 bg-gradient-to-t from-[#f9b6bc] to-[#fffcfd] text-[#8f5055] px-3 py-1 rounded-full text-sm">
                    MOST POPULAR
                  </span>
                )}
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
                <h3
                  className={`text-3xl font-bold ${
                    plan.popular
                      ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                      : "text-[#574547]"
                  } mb-2`}
                >
                  {plan.tier}
                </h3>
                <p
                  className={`${
                    plan.popular ? "text-white" : "text-[#574547]"
                  } mb-6`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular
                        ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        : "text-[#574547]"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={plan.popular ? "text-white" : "text-[#574547]"}
                  >
                    /month
                  </span>
                </div>
              </div>

              <div className="h-48 mb-auto">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div
                        className={`
                        w-6 h-6 rounded-full flex items-center justify-center mr-3
                        ${plan.popular ? "bg-white/20" : "bg-[#efa1a6]"}
                      `}
                      >
                        <svg
                          className={`w-3.5 h-3.5 ${
                            plan.popular ? "text-white" : "text-[#85484c]"
                          }`}
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
                      <span
                        className={
                          plan.popular ? "text-white" : "text-[#574547]"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium ${
                    plan.popular
                      ? "bg-gradient-to-t from-[#f9b6bc] to-[#fffcfd] text-[#8f5055] py-4"
                      : "bg-[#e17377] text-white hover:bg-[#d66267]"
                  } transition-colors duration-200`}
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

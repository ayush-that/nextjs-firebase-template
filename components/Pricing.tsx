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
    imagePath: "/pricing/gold.svg",
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
    imagePath: "/pricing/platinum.svg",
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
    imagePath: "/pricing/diamond.svg",
  },
];

export default function Pricing() {
  return (
    <section className="min-h-screen bg-pink-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-400 mb-4">The Problem</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Plans to boost your <span className="text-red-400">career</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pricingData.map((plan) => (
            <div
              key={plan.tier}
              className={`rounded-3xl p-8 ${
                plan.popular ? "bg-red-400" : "bg-pink-100"
              } relative`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-white text-red-400 px-3 py-1 rounded-full text-sm">
                  MOST POPULAR
                </span>
              )}

              <div className="h-12 w-20 relative mb-6">
                <Image
                  src={plan.imagePath}
                  alt={`${plan.tier} tier`}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.tier}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div
                      className={`
                      w-6 h-6 rounded-full flex items-center justify-center mr-3
                      ${plan.popular ? "bg-white/20" : "bg-red-200"}
                    `}
                    >
                      <svg
                        className={`w-3.5 h-3.5 ${
                          plan.popular ? "text-white" : "text-red-400"
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
                      className={plan.popular ? "text-white" : "text-gray-600"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium ${
                  plan.popular
                    ? "bg-white text-red-400"
                    : "bg-red-400 text-white hover:bg-red-500"
                } transition-colors duration-200`}
              >
                Land your role today!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

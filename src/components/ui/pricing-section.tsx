import { Pricing } from "@/components/ui/pricing"

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    yearlyPrice: "23",
    period: "month",
    features: [
      "Up to 5 team members",
      "Basic analytics & reporting",
      "10 GB storage",
      "Email support",
      "Community access",
    ],
    description: "Perfect for lean teams testing the waters",
    buttonText: "Get Started",
    href: "#contact",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "79",
    yearlyPrice: "63",
    period: "month",
    features: [
      "Up to 25 team members",
      "Advanced analytics & reporting",
      "100 GB storage",
      "Priority email & chat support",
      "Advanced integrations",
      "Custom workflows",
      "API access",
    ],
    description: "Best for growing product teams",
    buttonText: "Get Started",
    href: "#contact",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    yearlyPrice: "159",
    period: "month",
    features: [
      "Unlimited team members",
      "Enterprise analytics & reporting",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security & compliance",
      "Dedicated account manager",
      "Custom contracts & SLA",
    ],
    description: "Scale with tailored workflows",
    buttonText: "Contact Sales",
    href: "#contact",
    isPopular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative">
      <Pricing
        plans={pricingPlans}
        title="Choose the plan that fits"
        description="Flexible pricing for teams of all sizes. Upgrade or downgrade at any time."
      />
    </section>
  )
}

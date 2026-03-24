import { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import RelatedCalculators from "@/components/RelatedCalculators";
import StructuredData, { getWebApplicationSchema } from "@/components/StructuredData";
import { createId } from "@/utils/calculator";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://howmuchitscostingyou.com";

export const metadata: Metadata = {
  title: "True Cost Calculator — What Are Your Habits Really Costing You?",
  description:
    "Calculate the true lifetime cost of your daily habits. See how much coffee, subscriptions, and small expenses really cost with compound growth.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "True Cost Calculator — What Are Your Habits Really Costing You?",
    description:
      "Calculate the true lifetime cost of your daily habits. See how much coffee, subscriptions, and small expenses really cost with compound growth.",
    url: BASE_URL,
    type: "website",
  },
};

const defaultHabits = [
  { id: createId(), name: "Coffee", cost: 5, frequency: "daily" as const },
];

export default function Home() {
  return (
    <>
      <StructuredData data={getWebApplicationSchema(BASE_URL)} />
      <CalculatorPage
        heading="What is your habit really costing you?"
        subheading="See the lifetime cost of small expenses — with the power of compounding."
        defaultHabits={defaultHabits}
      >
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-text-secondary leading-relaxed">
              Every daily habit has a hidden cost. Beyond what you spend directly,
              there is an opportunity cost — what that money could become if
              invested over years and decades. Our True Cost Calculator reveals
              the full financial picture of your recurring expenses, using real
              compound growth rates to show the true lifetime impact.
            </p>
          </div>
        </section>
        <RelatedCalculators />
      </CalculatorPage>
    </>
  );
}

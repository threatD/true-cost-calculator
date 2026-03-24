import { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import SeoContent from "@/components/SeoContent";
import RelatedCalculators from "@/components/RelatedCalculators";
import StructuredData, {
  getWebApplicationSchema,
  getFAQSchema,
} from "@/components/StructuredData";
import { createId } from "@/utils/calculator";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://truecostcalculator.com";
const PAGE_URL = `${BASE_URL}/lifetime-cost-calculator`;

export const metadata: Metadata = {
  title: "Lifetime Cost Calculator — See the True Cost of Any Habit Over Decades",
  description:
    "Calculate the true lifetime cost of any recurring expense. Stack multiple habits and see the combined impact with compound investment growth over 10, 20, 30, or 40+ years.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Lifetime Cost Calculator — See the True Cost of Any Habit Over Decades",
    description:
      "Calculate the true lifetime cost of any recurring expense. Stack multiple habits and see the combined impact with compound investment growth.",
    url: PAGE_URL,
    type: "website",
  },
};

const defaultHabits = [
  { id: createId(), name: "Coffee", cost: 5, frequency: "daily" as const },
  { id: createId(), name: "Lunch out", cost: 15, frequency: "daily" as const },
];

const hubIntro =
  "Every recurring expense has a hidden cost that goes far beyond what you pay at the register. The concept of lifetime cost captures both your direct spending and the opportunity cost — the wealth you could have built if that money had been invested instead. Understanding this dual cost is the key to making informed financial decisions about your daily habits.";

const hubBody = `## What Is Lifetime Cost?

Lifetime cost is the total financial impact of a recurring expense measured over years or decades. It has two components: the money you spend directly, and the money you lose by not investing it.

### The Power of Compounding

When money is invested, it earns returns. Those returns then earn their own returns — this is compound growth, and it's why small daily expenses have such outsized long-term impact. A single dollar invested today at 7% annual returns becomes **$7.61** in 30 years and **$14.97** in 40 years without any additional contributions.

### Why Small Habits Matter Most

Counterintuitively, your smallest daily expenses often carry the highest lifetime cost. This is because:

- **They're frequent** — daily expenses compound 365 times per year
- **They're invisible** — you rarely track a $5 purchase
- **They're long-lasting** — daily habits persist for decades
- **They're the easiest to change** — unlike rent or insurance

### How to Use This Calculator

1. **Add your habits** — enter up to 5 recurring expenses
2. **Set the time horizon** — how many years to project forward
3. **Review the results** — see both spending and investment growth
4. **Compare scenarios** — what if you reduced or eliminated a habit?
5. **Make informed choices** — not every habit needs to be cut, but every habit should be understood

### Categories of Recurring Expenses

We've built dedicated calculators for the most common habits. Each one includes pre-filled defaults, targeted insights, and actionable strategies specific to that category. Explore them below to see where your money is really going.

## Start Calculating

Use the calculator above to stack your own habits and see their combined lifetime impact. The numbers might just change the way you think about your daily spending.`;

const faqQuestions = [
  {
    question: "What is a lifetime cost calculator?",
    answer:
      "A lifetime cost calculator shows you the total financial impact of a recurring expense over years or decades. It includes both direct spending and the opportunity cost — what that money could have grown to if invested instead.",
  },
  {
    question: "How does compound growth affect the cost of daily habits?",
    answer:
      "Compound growth means your money earns returns on its returns. A $5 daily expense doesn't just cost $1,825/year — if invested at 7% returns, that money could grow to over $400,000 in 40 years. Compounding makes small habits very expensive over time.",
  },
  {
    question: "What return rate should I use in the calculator?",
    answer:
      "The default 7% represents the historical average annual return of the S&P 500 after inflation. You can adjust this rate based on your own investment assumptions. Conservative estimates use 5-6%, while optimistic projections might use 8-10%.",
  },
];

export default function LifetimeCostCalculator() {
  return (
    <>
      <StructuredData data={getWebApplicationSchema(PAGE_URL)} />
      <StructuredData data={getFAQSchema(faqQuestions)} />
      <CalculatorPage
        heading="The True Lifetime Cost of Your Habits"
        subheading="Stack up to 5 habits and see their combined cost over decades — including compound investment growth."
        defaultHabits={defaultHabits}
      >
        <SeoContent intro={hubIntro} body={hubBody} />
        <RelatedCalculators showAll />
      </CalculatorPage>
    </>
  );
}

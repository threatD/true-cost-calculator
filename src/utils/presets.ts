import { Habit, createId } from "./calculator";

export interface PagePreset {
  title: string;
  description: string;
  heading: string;
  subheading: string;
  seoContent: string;
  defaultHabits: Habit[];
}

export const presets: Record<string, PagePreset> = {
  "/": {
    title: "True Cost Calculator — What Are Your Habits Really Costing You?",
    description:
      "Calculate the true lifetime cost of your daily habits. See how much coffee, subscriptions, and small expenses really cost with compound growth.",
    heading: "What is your habit really costing you?",
    subheading:
      "See the lifetime cost of small expenses — with the power of compounding.",
    seoContent: "",
    defaultHabits: [
      { id: createId(), name: "Coffee", cost: 5, frequency: "daily" },
    ],
  },
  "/coffee-cost-calculator": {
    title: "Coffee Cost Calculator — The True Price of Your Daily Coffee",
    description:
      "How much does your daily coffee really cost? Calculate the lifetime cost including compound investment growth. You might be shocked.",
    heading: "What is your coffee habit really costing you?",
    subheading:
      "That $5 latte adds up faster than you think — especially with compounding.",
    seoContent:
      "The average American spends $5 or more per day on coffee. Over a working lifetime, that daily habit represents far more than just the sticker price. When you factor in the opportunity cost — the money you could have invested — a daily coffee can cost hundreds of thousands of dollars. Our coffee cost calculator shows you exactly how much your coffee habit costs over 10, 20, 30, or 40 years. We use real compound growth rates to show not just what you spend, but what you lose by not investing that money instead. Whether you buy a $3 drip coffee or a $7 specialty latte, understanding the true cost helps you make informed decisions about your daily spending.",
    defaultHabits: [
      { id: createId(), name: "Coffee", cost: 5, frequency: "daily" },
    ],
  },
  "/smoking-cost-calculator": {
    title: "Smoking Cost Calculator — The True Price of Cigarettes",
    description:
      "Calculate the true lifetime cost of smoking. See how much cigarettes cost over your lifetime including compound investment growth.",
    heading: "What is smoking really costing you?",
    subheading:
      "The cost of smoking goes far beyond the pack — see the true lifetime price.",
    seoContent:
      "A pack of cigarettes costs between $7 and $14 depending on where you live. For a pack-a-day smoker, that adds up quickly — but the real cost is far greater when you consider what that money could become if invested. Our smoking cost calculator reveals the true lifetime cost of your smoking habit. Beyond the direct cost, we show the opportunity cost: the wealth you could build by investing that money instead. Many smokers are shocked to learn that their habit could cost them over half a million dollars over 30 years. This calculator helps you see the full financial picture, giving you one more powerful reason to consider quitting.",
    defaultHabits: [
      { id: createId(), name: "Cigarettes", cost: 10, frequency: "daily" },
    ],
  },
  "/subscription-cost-calculator": {
    title: "Subscription Cost Calculator — The True Price of Monthly Subscriptions",
    description:
      "Calculate the true lifetime cost of your subscriptions. Streaming, gym, apps — see what they really cost with compound growth.",
    heading: "What are your subscriptions really costing you?",
    subheading:
      "Streaming, gym memberships, apps — small monthly fees hide massive lifetime costs.",
    seoContent:
      "The average person spends over $200 per month on subscriptions — streaming services, gym memberships, software, meal kits, and more. Each one seems affordable on its own, but together they represent a significant financial commitment. Our subscription cost calculator lets you stack multiple subscriptions and see their combined lifetime cost. More importantly, we show you the opportunity cost: what that money could grow to if invested instead. You can compare scenarios — what if you cut one subscription? What if you reduced spending by half? The results may surprise you and help you make smarter choices about which subscriptions truly add value to your life.",
    defaultHabits: [
      { id: createId(), name: "Streaming", cost: 15, frequency: "monthly" },
      { id: createId(), name: "Gym", cost: 50, frequency: "monthly" },
    ],
  },
  "/lifetime-cost-calculator": {
    title: "Lifetime Cost Calculator — See the True Cost of Any Habit",
    description:
      "Calculate the true lifetime cost of any recurring expense. Stack multiple habits and see the total impact with compound investment growth.",
    heading: "What are your habits really costing you?",
    subheading:
      "Stack up to 5 habits and see their combined lifetime cost — including investment growth.",
    seoContent:
      "Every recurring expense has a hidden cost. Beyond what you spend directly, there is the opportunity cost — what that money could become if invested over decades. Our lifetime cost calculator lets you analyze any habit: dining out, coffee, subscriptions, impulse purchases, or anything else you spend on regularly. Stack up to five habits to see their combined impact. Compare scenarios to see how reducing or eliminating habits could change your financial future. With real compound growth calculations, this calculator gives you the full picture of how small, regular expenses shape your long-term wealth.",
    defaultHabits: [
      { id: createId(), name: "Coffee", cost: 5, frequency: "daily" },
      { id: createId(), name: "Lunch out", cost: 15, frequency: "daily" },
    ],
  },
};

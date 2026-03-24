"use client";

import Hero from "./Hero";
import Calculator from "./Calculator";
import { Habit } from "@/utils/calculator";

interface CalculatorPageProps {
  heading: string;
  subheading: string;
  defaultHabits: Habit[];
  /** SEO content and related links rendered by the parent page as server components */
  children?: React.ReactNode;
}

export default function CalculatorPage({
  heading,
  subheading,
  defaultHabits,
  children,
}: CalculatorPageProps) {
  return (
    <main className="min-h-screen bg-surface-alt">
      <Hero heading={heading} subheading={subheading} />
      <Calculator defaultHabits={defaultHabits} />
      {children}
    </main>
  );
}

"use client";

import { useState, useMemo } from "react";
import { Habit, calculateAllHabits, getAggregatedTotals, getChartData, getMilestones } from "@/utils/calculator";
import HabitList from "./HabitList";
import GlobalControls from "./GlobalControls";
import ResultsSummary from "./ResultsSummary";
import ComparisonView from "./ComparisonView";
import GrowthChart from "./GrowthChart";
import MilestonesComponent from "./Milestones";
import ShareCard from "./ShareCard";
import AdBlock from "./AdBlock";

interface CalculatorProps {
  defaultHabits: Habit[];
}

export default function Calculator({ defaultHabits }: CalculatorProps) {
  const [habits, setHabits] = useState<Habit[]>(defaultHabits);
  const [years, setYears] = useState(40);
  const [returnRate, setReturnRate] = useState(0.07);
  const [adjustForInflation, setAdjustForInflation] = useState(false);
  const [reducedPercent, setReducedPercent] = useState(0.5);

  const validHabits = useMemo(
    () => habits.filter((h) => h.cost > 0),
    [habits]
  );

  const results = useMemo(
    () =>
      calculateAllHabits(
        validHabits,
        years,
        returnRate,
        adjustForInflation,
        0.025,
        reducedPercent
      ),
    [validHabits, years, returnRate, adjustForInflation, reducedPercent]
  );

  const totals = useMemo(() => getAggregatedTotals(results), [results]);

  const chartData = useMemo(
    () => getChartData(validHabits, years, returnRate, adjustForInflation),
    [validHabits, years, returnRate, adjustForInflation]
  );

  const milestones = useMemo(
    () => getMilestones(validHabits, years, returnRate, adjustForInflation),
    [validHabits, years, returnRate, adjustForInflation]
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column — Inputs */}
        <div className="lg:col-span-5 space-y-6">
          <HabitList habits={habits} onChange={setHabits} />
          <GlobalControls
            years={years}
            returnRate={returnRate}
            adjustForInflation={adjustForInflation}
            onYearsChange={setYears}
            onReturnRateChange={setReturnRate}
            onInflationToggle={setAdjustForInflation}
          />
        </div>

        {/* Right column — Results */}
        <div className="lg:col-span-7 space-y-6">
          {validHabits.length > 0 ? (
            <>
              <ResultsSummary
                totalSpent={totals.totalSpent}
                totalFutureValue={totals.totalFutureValue}
                difference={totals.difference}
                years={years}
              />

              <AdBlock slot="primary" />

              <GrowthChart data={chartData} />

              <AdBlock slot="mid-content" />

              <ComparisonView
                results={results}
                reducedPercent={reducedPercent}
                onReducedPercentChange={setReducedPercent}
              />

              <MilestonesComponent milestones={milestones} />

              <AdBlock slot="secondary" />

              <ShareCard results={results} years={years} />
            </>
          ) : (
            <div className="bg-white rounded-xl border border-border p-12 shadow-sm text-center">
              <p className="text-text-secondary text-lg">
                Enter a habit cost to see your results
              </p>
              <p className="text-text-muted mt-2">
                Try $5 daily coffee — the results might surprise you
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HabitResult, formatCurrency } from "@/utils/calculator";
import AnimatedNumber from "./AnimatedNumber";

interface ComparisonViewProps {
  results: HabitResult[];
  reducedPercent: number;
  onReducedPercentChange: (pct: number) => void;
}

type Scenario = "current" | "reduced" | "eliminated";

const scenarioLabels: Record<Scenario, string> = {
  current: "Current",
  reduced: "Reduced",
  eliminated: "Eliminated",
};

export default function ComparisonView({
  results,
  reducedPercent,
  onReducedPercentChange,
}: ComparisonViewProps) {
  const [activeScenario, setActiveScenario] = useState<Scenario>("current");

  const totalForScenario = (scenario: Scenario) => {
    return results.reduce((sum, r) => sum + r[scenario].futureValue, 0);
  };

  const spentForScenario = (scenario: Scenario) => {
    return results.reduce((sum, r) => sum + r[scenario].totalSpent, 0);
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-lg font-bold text-text-primary mb-4">
        Compare Scenarios
      </h3>

      {/* Segmented control */}
      <div className="flex bg-surface-alt rounded-lg p-1 mb-5">
        {(Object.keys(scenarioLabels) as Scenario[]).map((s) => (
          <button
            key={s}
            onClick={() => setActiveScenario(s)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
              activeScenario === s
                ? "bg-white text-text-primary shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {scenarioLabels[s]}
          </button>
        ))}
      </div>

      {/* Reduced % slider */}
      {activeScenario === "reduced" && (
        <div className="mb-5 p-3 bg-accent-light rounded-lg">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm text-text-secondary">Reduce spending by</span>
            <span className="font-bold text-accent">
              {Math.round((1 - reducedPercent) * 100)}%
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            step="10"
            value={(1 - reducedPercent) * 100}
            onChange={(e) =>
              onReducedPercentChange(1 - parseInt(e.target.value) / 100)
            }
            className="w-full accent-accent h-2 rounded-lg cursor-pointer"
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeScenario}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* Totals */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="text-center p-4 bg-spending-light rounded-lg">
              <p className="text-xs text-text-muted mb-1">Total Spent</p>
              <AnimatedNumber
                value={spentForScenario(activeScenario)}
                className="text-xl font-bold text-spending"
              />
            </div>
            <div className="text-center p-4 bg-growth-light rounded-lg">
              <p className="text-xs text-text-muted mb-1">Future Value</p>
              <AnimatedNumber
                value={totalForScenario(activeScenario)}
                className="text-xl font-bold text-growth"
              />
            </div>
          </div>

          {/* Per-habit breakdown */}
          {results.length > 1 && (
            <div className="space-y-2">
              {results.map((r) => (
                <div
                  key={r.habit.id}
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface-alt"
                >
                  <span className="text-sm text-text-secondary">
                    {r.habit.name || "Unnamed"}
                  </span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-spending mr-3">
                      {formatCurrency(r[activeScenario].totalSpent)}
                    </span>
                    <span className="text-sm font-medium text-growth">
                      {formatCurrency(r[activeScenario].futureValue)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Savings callout */}
          {activeScenario !== "current" && (
            <div className="mt-4 p-4 bg-growth-light rounded-lg text-center">
              <p className="text-sm text-text-secondary">
                You could save
              </p>
              <AnimatedNumber
                value={
                  totalForScenario("current") -
                  totalForScenario(activeScenario)
                }
                className="text-2xl font-bold text-growth"
              />
              <p className="text-xs text-text-muted mt-1">
                by {activeScenario === "eliminated" ? "eliminating" : "reducing"} these habits
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

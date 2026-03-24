"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

interface ResultsSummaryProps {
  totalSpent: number;
  totalFutureValue: number;
  difference: number;
  years: number;
}

export default function ResultsSummary({
  totalSpent,
  totalFutureValue,
  difference,
  years,
}: ResultsSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
        <p className="text-sm text-text-secondary mb-1">
          Your habits could cost you
        </p>
        <AnimatedNumber
          value={totalSpent}
          className="text-4xl font-bold text-spending"
        />
        <p className="text-sm text-text-muted mt-1">
          over {years} years in direct spending
        </p>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-400 mb-1">
          If invested, this could be
        </p>
        <AnimatedNumber
          value={totalFutureValue}
          className="text-4xl font-bold text-white"
        />
        <p className="text-sm text-slate-400 mt-1">
          with compound growth over {years} years
        </p>
      </div>

      <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
        <p className="text-sm text-text-secondary mb-1">
          That&apos;s lost potential of
        </p>
        <AnimatedNumber
          value={difference}
          className="text-4xl font-bold text-amber-600"
        />
        <p className="text-sm text-text-muted mt-1">
          in opportunity cost beyond what you spend
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Milestone } from "@/utils/calculator";

interface MilestonesProps {
  milestones: Milestone[];
}

export default function Milestones({ milestones }: MilestonesProps) {
  if (milestones.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-lg font-bold text-text-primary mb-4">
        Milestones
      </h3>
      <div className="space-y-3">
        {milestones.map((m, i) => (
          <motion.div
            key={m.amount}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100"
          >
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-sm font-bold shrink-0">
              {i + 1}
            </div>
            <p className="text-sm text-text-primary">
              You hit{" "}
              <span className="font-bold text-amber-600">{m.label}</span> in
              year{" "}
              <span className="font-bold text-amber-600">{m.year}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Habit, Frequency } from "@/utils/calculator";
import { HABIT_PRESETS } from "@/utils/habitPresets";

interface HabitCardProps {
  habit: Habit;
  canRemove: boolean;
  onChange: (updated: Habit) => void;
  onRemove: () => void;
}

const frequencies: { value: Frequency; label: string }[] = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

export default function HabitCard({
  habit,
  canRemove,
  onChange,
  onRemove,
}: HabitCardProps) {
  const handlePresetChange = (value: string) => {
    if (value === "__custom__") {
      onChange({ ...habit, name: "" });
      return;
    }
    const preset = HABIT_PRESETS.find((p) => p.name === value);
    if (preset) {
      onChange({
        ...habit,
        name: preset.name,
        cost: preset.cost,
        frequency: preset.frequency,
      });
    }
  };

  const isCustom = !HABIT_PRESETS.some((p) => p.name === habit.name);
  const matchedPreset = HABIT_PRESETS.find((p) => p.name === habit.name);
  const emoji = matchedPreset?.emoji;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="bg-white rounded-xl border border-border p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <select
            value={isCustom ? "__custom__" : habit.name}
            onChange={(e) => handlePresetChange(e.target.value)}
            className="text-lg font-semibold bg-transparent border-none outline-none focus:ring-0 text-text-primary cursor-pointer appearance-none pr-6 min-w-0 flex-1"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0 center",
            }}
          >
            {HABIT_PRESETS.map((p) => (
              <option key={p.name} value={p.name}>
                {p.emoji} {p.name}
              </option>
            ))}
            <option value="__custom__">Custom...</option>
          </select>
        </div>
        {canRemove && (
          <button
            onClick={onRemove}
            className="ml-2 text-text-muted hover:text-spending transition-colors p-1 rounded-lg hover:bg-spending-light shrink-0"
            aria-label="Remove habit"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Show custom name input when "Custom..." is selected */}
      {isCustom && (
        <div className="mb-4">
          <label className="block text-sm text-text-secondary mb-1.5">
            Habit name
          </label>
          <input
            type="text"
            value={habit.name}
            onChange={(e) => onChange({ ...habit, name: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-alt text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
            placeholder="Enter habit name"
            autoFocus
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-secondary mb-1.5">
            Cost
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              $
            </span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={habit.cost || ""}
              onChange={(e) =>
                onChange({
                  ...habit,
                  cost: Math.max(0, parseFloat(e.target.value) || 0),
                })
              }
              className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-border bg-surface-alt text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
              placeholder="0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-1.5">
            Frequency
          </label>
          <select
            value={habit.frequency}
            onChange={(e) =>
              onChange({ ...habit, frequency: e.target.value as Frequency })
            }
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-alt text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition appearance-none cursor-pointer"
          >
            {frequencies.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
}

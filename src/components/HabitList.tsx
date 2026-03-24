"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Habit, createId } from "@/utils/calculator";
import { HABIT_PRESETS, HabitPreset } from "@/utils/habitPresets";
import HabitCard from "./HabitCard";

interface HabitListProps {
  habits: Habit[];
  onChange: (habits: Habit[]) => void;
}

const MAX_HABITS = 5;

export default function HabitList({ habits, onChange }: HabitListProps) {
  const [showPicker, setShowPicker] = useState(false);

  const updateHabit = (index: number, updated: Habit) => {
    const next = [...habits];
    next[index] = updated;
    onChange(next);
  };

  const removeHabit = (index: number) => {
    if (habits.length <= 1) return;
    onChange(habits.filter((_, i) => i !== index));
  };

  const addFromPreset = (preset: HabitPreset) => {
    if (habits.length >= MAX_HABITS) return;
    onChange([
      ...habits,
      {
        id: createId(),
        name: preset.name,
        cost: preset.cost,
        frequency: preset.frequency,
      },
    ]);
    setShowPicker(false);
  };

  const addCustom = () => {
    if (habits.length >= MAX_HABITS) return;
    onChange([
      ...habits,
      { id: createId(), name: "", cost: 0, frequency: "daily" },
    ]);
    setShowPicker(false);
  };

  return (
    <div className="space-y-4">
      <AnimatePresence mode="popLayout">
        {habits.map((habit, i) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            canRemove={habits.length > 1}
            onChange={(updated) => updateHabit(i, updated)}
            onRemove={() => removeHabit(i)}
          />
        ))}
      </AnimatePresence>

      {habits.length < MAX_HABITS && (
        <>
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="w-full py-3 rounded-xl border-2 border-dashed border-border text-text-secondary hover:border-accent hover:text-accent transition-colors font-medium"
          >
            + Add habit
          </button>

          <AnimatePresence>
            {showPicker && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="text-sm font-medium text-text-secondary mb-3">
                    Choose a common habit or add your own
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {HABIT_PRESETS.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => addFromPreset(preset)}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-surface-alt hover:bg-accent-light hover:text-accent border border-transparent hover:border-accent/20 transition-all text-left text-sm"
                      >
                        <span className="text-base shrink-0">
                          {preset.emoji}
                        </span>
                        <div className="min-w-0">
                          <span className="font-medium text-text-primary block truncate">
                            {preset.name}
                          </span>
                          <span className="text-xs text-text-muted">
                            ${preset.cost}/{preset.frequency === "daily" ? "day" : preset.frequency === "weekly" ? "wk" : preset.frequency === "monthly" ? "mo" : "yr"}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={addCustom}
                    className="w-full py-2.5 rounded-lg border border-border text-text-secondary hover:bg-surface-alt transition-colors text-sm font-medium"
                  >
                    + Custom habit
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

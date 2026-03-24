import { Frequency } from "./calculator";

export interface HabitPreset {
  name: string;
  cost: number;
  frequency: Frequency;
  emoji: string;
}

export const HABIT_PRESETS: HabitPreset[] = [
  { name: "Coffee", cost: 5, frequency: "daily", emoji: "☕" },
  { name: "Lunch out", cost: 15, frequency: "daily", emoji: "🍔" },
  { name: "Smoking", cost: 12, frequency: "daily", emoji: "🚬" },
  { name: "Alcohol", cost: 30, frequency: "weekly", emoji: "🍺" },
  { name: "Takeout dinner", cost: 35, frequency: "weekly", emoji: "🥡" },
  { name: "Rideshare", cost: 25, frequency: "weekly", emoji: "🚗" },
  { name: "Streaming", cost: 15, frequency: "monthly", emoji: "📺" },
  { name: "Gym", cost: 50, frequency: "monthly", emoji: "💪" },
  { name: "Snacks & drinks", cost: 5, frequency: "daily", emoji: "🍿" },
  { name: "Impulse shopping", cost: 75, frequency: "monthly", emoji: "🛍️" },
  { name: "Bottled water", cost: 3, frequency: "daily", emoji: "💧" },
  { name: "Lottery tickets", cost: 10, frequency: "weekly", emoji: "🎰" },
  { name: "Vaping", cost: 8, frequency: "daily", emoji: "💨" },
  { name: "Energy drinks", cost: 4, frequency: "daily", emoji: "⚡" },
  { name: "Parking", cost: 10, frequency: "daily", emoji: "🅿️" },
  { name: "Subscription box", cost: 40, frequency: "monthly", emoji: "📦" },
];

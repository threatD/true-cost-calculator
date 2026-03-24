export type Frequency = "daily" | "weekly" | "monthly" | "yearly";

export interface Habit {
  id: string;
  name: string;
  cost: number;
  frequency: Frequency;
}

export interface ScenarioResult {
  totalSpent: number;
  futureValue: number;
}

export interface HabitResult {
  habit: Habit;
  annualSpend: number;
  current: ScenarioResult;
  reduced: ScenarioResult;
  eliminated: ScenarioResult;
}

export interface Milestone {
  label: string;
  amount: number;
  year: number;
}

export interface ChartDataPoint {
  year: number;
  totalSpent: number;
  futureValue: number;
}

const FREQUENCY_MULTIPLIER: Record<Frequency, number> = {
  daily: 365,
  weekly: 52,
  monthly: 12,
  yearly: 1,
};

const MILESTONE_THRESHOLDS = [50_000, 100_000, 250_000, 500_000, 1_000_000];

export function getAnnualSpend(cost: number, frequency: Frequency): number {
  return cost * FREQUENCY_MULTIPLIER[frequency];
}

export function getTotalSpend(annualSpend: number, years: number): number {
  return annualSpend * years;
}

export function getFutureValue(
  annualPayment: number,
  rate: number,
  years: number
): number {
  if (rate === 0) return annualPayment * years;
  return annualPayment * ((Math.pow(1 + rate, years) - 1) / rate);
}

export function getAdjustedRate(
  nominalRate: number,
  inflationRate: number
): number {
  return (1 + nominalRate) / (1 + inflationRate) - 1;
}

export function calculateHabit(
  habit: Habit,
  years: number,
  returnRate: number,
  adjustForInflation: boolean,
  inflationRate: number = 0.025,
  reducedPercent: number = 0.5
): HabitResult {
  const rate = adjustForInflation
    ? getAdjustedRate(returnRate, inflationRate)
    : returnRate;

  const annualSpend = getAnnualSpend(habit.cost, habit.frequency);

  const current: ScenarioResult = {
    totalSpent: getTotalSpend(annualSpend, years),
    futureValue: getFutureValue(annualSpend, rate, years),
  };

  const reducedAnnual = annualSpend * reducedPercent;
  const reduced: ScenarioResult = {
    totalSpent: getTotalSpend(reducedAnnual, years),
    futureValue: getFutureValue(reducedAnnual, rate, years),
  };

  const eliminated: ScenarioResult = {
    totalSpent: 0,
    futureValue: 0,
  };

  return { habit, annualSpend, current, reduced, eliminated };
}

export function calculateAllHabits(
  habits: Habit[],
  years: number,
  returnRate: number,
  adjustForInflation: boolean,
  inflationRate?: number,
  reducedPercent?: number
) {
  return habits.map((h) =>
    calculateHabit(h, years, returnRate, adjustForInflation, inflationRate, reducedPercent)
  );
}

export function getAggregatedTotals(results: HabitResult[]) {
  const totalSpent = results.reduce((s, r) => s + r.current.totalSpent, 0);
  const totalFutureValue = results.reduce(
    (s, r) => s + r.current.futureValue,
    0
  );
  const difference = totalFutureValue - totalSpent;
  return { totalSpent, totalFutureValue, difference };
}

export function getChartData(
  habits: Habit[],
  maxYears: number,
  returnRate: number,
  adjustForInflation: boolean,
  inflationRate: number = 0.025
): ChartDataPoint[] {
  const rate = adjustForInflation
    ? getAdjustedRate(returnRate, inflationRate)
    : returnRate;

  const totalAnnualSpend = habits.reduce(
    (s, h) => s + getAnnualSpend(h.cost, h.frequency),
    0
  );

  const data: ChartDataPoint[] = [];
  for (let y = 0; y <= maxYears; y++) {
    data.push({
      year: y,
      totalSpent: getTotalSpend(totalAnnualSpend, y),
      futureValue: y === 0 ? 0 : getFutureValue(totalAnnualSpend, rate, y),
    });
  }
  return data;
}

export function getMilestones(
  habits: Habit[],
  maxYears: number,
  returnRate: number,
  adjustForInflation: boolean,
  inflationRate: number = 0.025
): Milestone[] {
  const rate = adjustForInflation
    ? getAdjustedRate(returnRate, inflationRate)
    : returnRate;

  const totalAnnualSpend = habits.reduce(
    (s, h) => s + getAnnualSpend(h.cost, h.frequency),
    0
  );

  const milestones: Milestone[] = [];
  const found = new Set<number>();

  for (let y = 1; y <= maxYears; y++) {
    const fv = getFutureValue(totalAnnualSpend, rate, y);
    for (const threshold of MILESTONE_THRESHOLDS) {
      if (fv >= threshold && !found.has(threshold)) {
        found.add(threshold);
        milestones.push({
          label: formatCurrency(threshold),
          amount: threshold,
          year: y,
        });
      }
    }
  }
  return milestones;
}

export function formatCurrency(value: number): string {
  if (Math.abs(value) >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function generateShareText(
  results: HabitResult[],
  years: number
): string {
  const { totalSpent, totalFutureValue, difference } =
    getAggregatedTotals(results);

  const lines: string[] = [];
  lines.push(`I just calculated the TRUE cost of my habits:\n`);

  results.forEach((r) => {
    const freqLabel =
      r.habit.frequency === "daily"
        ? "a day"
        : r.habit.frequency === "weekly"
          ? "a week"
          : r.habit.frequency === "monthly"
            ? "a month"
            : "a year";
    lines.push(
      `${r.habit.name}: $${r.habit.cost}/${freqLabel} = ${formatCurrency(r.current.totalSpent)} spent, but ${formatCurrency(r.current.futureValue)} if invested`
    );
  });

  lines.push(`\nOver ${years} years:`);
  lines.push(`Total spent: ${formatCurrency(totalSpent)}`);
  lines.push(`If invested instead: ${formatCurrency(totalFutureValue)}`);
  lines.push(`Lost potential: ${formatCurrency(difference)}`);
  lines.push(`\nSmall habits, massive impact. Calculate yours:`);

  return lines.join("\n");
}

export function createId(): string {
  return Math.random().toString(36).slice(2, 9);
}

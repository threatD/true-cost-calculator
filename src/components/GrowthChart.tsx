"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint, formatCurrency } from "@/utils/calculator";

interface GrowthChartProps {
  data: ChartDataPoint[];
}

export default function GrowthChart({ data }: GrowthChartProps) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-lg font-bold text-text-primary mb-4">
        Growth Over Time
      </h3>
      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gradSpent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradFV" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              tickLine={false}
              axisLine={{ stroke: "#e2e8f0" }}
              label={{
                value: "Years",
                position: "insideBottom",
                offset: -2,
                style: { fontSize: 12, fill: "#94a3b8" },
              }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v: number) => formatCurrency(v)}
              width={70}
            />
            <Tooltip
              formatter={(value, name) => [
                formatCurrency(Number(value)),
                name === "totalSpent" ? "Total Spent" : "If Invested",
              ]}
              labelFormatter={(label) => `Year ${label}`}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                fontSize: 13,
              }}
            />
            <Area
              type="monotone"
              dataKey="totalSpent"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#gradSpent)"
              name="totalSpent"
              animationDuration={800}
            />
            <Area
              type="monotone"
              dataKey="futureValue"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#gradFV)"
              name="futureValue"
              animationDuration={800}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-3">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span className="w-3 h-3 rounded-full bg-spending" />
          Total Spent
        </div>
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span className="w-3 h-3 rounded-full bg-growth" />
          If Invested
        </div>
      </div>
    </div>
  );
}

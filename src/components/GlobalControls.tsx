"use client";

interface GlobalControlsProps {
  years: number;
  returnRate: number;
  adjustForInflation: boolean;
  onYearsChange: (years: number) => void;
  onReturnRateChange: (rate: number) => void;
  onInflationToggle: (on: boolean) => void;
}

export default function GlobalControls({
  years,
  returnRate,
  adjustForInflation,
  onYearsChange,
  onReturnRateChange,
  onInflationToggle,
}: GlobalControlsProps) {
  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
        Settings
      </h3>

      <div className="space-y-5">
        {/* Years slider */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <label className="text-sm text-text-secondary">Time horizon</label>
            <span className="text-lg font-bold text-text-primary">
              {years} years
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={years}
            onChange={(e) => onYearsChange(parseInt(e.target.value))}
            className="w-full accent-accent h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>1 yr</span>
            <span>50 yrs</span>
          </div>
        </div>

        {/* Return rate */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <label className="text-sm text-text-secondary">
              Annual return rate
            </label>
            <span className="text-lg font-bold text-growth">
              {(returnRate * 100).toFixed(0)}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="15"
            step="1"
            value={returnRate * 100}
            onChange={(e) =>
              onReturnRateChange(parseInt(e.target.value) / 100)
            }
            className="w-full accent-growth h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>0%</span>
            <span>15%</span>
          </div>
        </div>

        {/* Inflation toggle */}
        <div className="flex items-center justify-between">
          <label className="text-sm text-text-secondary">
            Adjust for inflation (2.5%)
          </label>
          <button
            onClick={() => onInflationToggle(!adjustForInflation)}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              adjustForInflation ? "bg-accent" : "bg-gray-300"
            }`}
            role="switch"
            aria-checked={adjustForInflation}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                adjustForInflation ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

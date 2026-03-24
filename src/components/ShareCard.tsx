"use client";

import { useState } from "react";
import { HabitResult, generateShareText } from "@/utils/calculator";

interface ShareCardProps {
  results: HabitResult[];
  years: number;
}

export default function ShareCard({ results, years }: ShareCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = generateShareText(results, years);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
      <h3 className="text-lg font-bold text-text-primary mb-3">
        Share Your Results
      </h3>
      <pre className="text-sm text-text-secondary bg-surface-alt p-4 rounded-lg whitespace-pre-wrap mb-4 leading-relaxed">
        {generateShareText(results, years)}
      </pre>
      <button
        onClick={handleCopy}
        className={`w-full py-2.5 rounded-lg font-medium transition-all ${
          copied
            ? "bg-growth text-white"
            : "bg-text-primary text-white hover:bg-text-primary/90"
        }`}
      >
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
}

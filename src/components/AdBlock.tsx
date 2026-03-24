"use client";

interface AdBlockProps {
  slot?: string;
  className?: string;
}

export default function AdBlock({ slot = "primary", className = "" }: AdBlockProps) {
  return (
    <div
      className={`bg-surface-alt border border-dashed border-border rounded-xl flex items-center justify-center text-text-muted text-sm py-8 ${className}`}
      data-ad-slot={slot}
    >
      Ad Placement — {slot}
    </div>
  );
}

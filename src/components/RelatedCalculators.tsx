import Link from "next/link";
import { habits, HabitData } from "@/data/habits";

interface RelatedCalculatorsProps {
  /** Slug of the current page to exclude from the list */
  currentSlug?: string;
  /** Max number of related links to show (default 8) */
  limit?: number;
  /** Show all habits (for hub page) */
  showAll?: boolean;
}

function getAnchorText(habit: HabitData): string {
  return `Calculate the true cost of ${habit.name.toLowerCase()}`;
}

export default function RelatedCalculators({
  currentSlug,
  limit = 8,
  showAll = false,
}: RelatedCalculatorsProps) {
  const filtered = habits.filter((h) => h.slug !== currentSlug);
  const displayed = showAll ? filtered : filtered.slice(0, limit);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
      <h2 className="text-2xl font-bold text-text-primary mb-6">
        Related Cost Calculators
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {displayed.map((habit) => (
          <Link
            key={habit.slug}
            href={`/${habit.slug}`}
            className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all group"
          >
            <span className="text-2xl" aria-hidden="true">
              {habit.emoji}
            </span>
            <div>
              <span className="text-accent font-medium group-hover:underline">
                {getAnchorText(habit)}
              </span>
              <p className="text-sm text-text-muted mt-0.5">
                {habit.seo.metaDescription.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
      {!showAll && !currentSlug && (
        <div className="mt-6 text-center">
          <Link
            href="/lifetime-cost-calculator"
            className="text-accent font-medium hover:underline"
          >
            View all habit cost calculators &rarr;
          </Link>
        </div>
      )}
    </section>
  );
}

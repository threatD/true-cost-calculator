import { Metadata } from "next";
import { notFound } from "next/navigation";
import { habitsBySlug, getAllSlugs, getDefaultHabits } from "@/data/habits";
import CalculatorPage from "@/components/CalculatorPage";
import SeoContent from "@/components/SeoContent";
import RelatedCalculators from "@/components/RelatedCalculators";
import StructuredData, {
  getWebApplicationSchema,
  getFAQSchema,
} from "@/components/StructuredData";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://howmuchitscostingyou.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const habit = habitsBySlug[slug];
  if (!habit) return {};

  return {
    title: habit.seo.title,
    description: habit.seo.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/${habit.slug}`,
    },
    openGraph: {
      title: habit.seo.title,
      description: habit.seo.metaDescription,
      url: `${BASE_URL}/${habit.slug}`,
      type: "website",
    },
  };
}

export default async function HabitPage({ params }: PageProps) {
  const { slug } = await params;
  const habit = habitsBySlug[slug];
  if (!habit) notFound();

  const defaultHabits = getDefaultHabits(habit);
  const pageUrl = `${BASE_URL}/${habit.slug}`;

  const faqQuestions = [
    {
      question: `How much does ${habit.name.toLowerCase()} cost over a lifetime?`,
      answer: `Use our calculator to see the exact lifetime cost of your ${habit.name.toLowerCase()} habit. The true cost includes both direct spending and the opportunity cost of not investing that money, which can be 2-4x higher than direct spending alone.`,
    },
    {
      question: `How is the true cost of ${habit.name.toLowerCase()} calculated?`,
      answer: `We calculate both the direct spending over your chosen time period and the future value that money could reach if invested at a typical market return rate (7% default). The difference shows the real opportunity cost of the habit.`,
    },
  ];

  return (
    <>
      <StructuredData data={getWebApplicationSchema(pageUrl)} />
      <StructuredData data={getFAQSchema(faqQuestions)} />
      <CalculatorPage
        heading={habit.seo.h1}
        subheading={habit.seo.subheading}
        defaultHabits={defaultHabits}
      >
        <SeoContent intro={habit.content.intro} body={habit.content.body} />
        <RelatedCalculators currentSlug={habit.slug} />
      </CalculatorPage>
    </>
  );
}

interface HeroProps {
  heading: string;
  subheading: string;
}

export default function Hero({ heading, subheading }: HeroProps) {
  return (
    <header className="text-center py-12 sm:py-16 lg:py-20 px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight max-w-3xl mx-auto">
        {heading}
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
        {subheading}
      </p>
    </header>
  );
}

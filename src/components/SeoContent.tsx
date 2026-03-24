interface SeoContentProps {
  intro: string;
  body: string;
}

/**
 * Renders SEO content with proper heading hierarchy.
 * Supports a subset of markdown: ## H2, ### H3, **bold**, and bullet lists.
 */
export default function SeoContent({ intro, body }: SeoContentProps) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          {intro}
        </p>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          {renderBody(body)}
        </div>
      </div>
    </section>
  );
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc pl-6 space-y-1">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineMd(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={key++}
          className="text-xl font-semibold text-text-primary mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-bold text-text-primary mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    } else {
      flushList();
      elements.push(
        <p
          key={key++}
          dangerouslySetInnerHTML={{ __html: inlineMd(line) }}
        />
      );
    }
  }

  flushList();
  return elements;
}

/** Convert **bold** markdown to <strong> tags */
function inlineMd(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

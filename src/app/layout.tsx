import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Cost Calculator — What Are Your Habits Really Costing You?",
  description:
    "Calculate the true lifetime cost of your daily habits. See how much you spend on coffee, subscriptions, and more — plus what that money could grow to if invested.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

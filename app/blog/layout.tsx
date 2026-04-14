import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - BrandGate",
  description: "B2B distribution insights, wholesale growth strategies, and tips for scaling your brand.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

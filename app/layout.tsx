import type { Metadata } from "next";
import "./globals.css";
// fonts are in the drive

export const metadata: Metadata = {
  title: "Oriana Solutions",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

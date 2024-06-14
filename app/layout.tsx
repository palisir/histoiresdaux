import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const bodyClasses = merriweather.className + " home blog hfeed";

export const metadata: Metadata = {
  title: "Histoires Daux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClasses}>{children}</body>
    </html>
  );
}

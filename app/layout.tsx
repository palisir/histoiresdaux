import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./css/style.css";

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
      <body className={bodyClasses}>
        <div id="page" className="site">
          <div className="site-inner">
            <Header />
            <div id="content" className="site-content">
              <div id="primary" className="content-area">
                <main id="main" className="site-main" role="main">
                  {children}{" "}
                </main>
              </div>
              <Sidebar />

              <hr className="clear" />
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

import { Poppins, Rubik } from "next/font/google";
import CookieNotice from "@/components/CookieNotice";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const display = Poppins({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Rubik({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: {
    default: `${site.name} welcome week`,
    template: `%s · ${site.name}`,
  },
  description: site.blurb,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <div className="wrap">{children}</div>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import StairTransition from "../components/StairTransition";
import PageTransition from "../components/PageTransition";

// componants

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Arnob Mahmud - Full Stack Developer",
  description:
    "Arnob Mahmud is a full stack developer specializing in web and mobile app development, QA test automation, and digital marketing for SEO. Explore his modern portfolio built with Next.js.",
  keywords: [
    "Arnob Mahmud",
    "Full Stack Developer",
    "Web Development",
    "Mobile App Development",
    "QA Test Automation",
    "Digital Marketing",
    "SEO",
    "Portfolio",
    "Next.js",
  ],
  author: "Arnob Mahmud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

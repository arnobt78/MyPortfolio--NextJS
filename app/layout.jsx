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
  title:
    "Arnob Mahmud | Full-Stack Developer, Automation & Digital Solutions Engineer | Frankfurt, Germany",
  description:
    "Dynamic Full-Stack Developer based in Frankfurt, Germany, with 4+ years of experience building fast, scalable web and mobile apps. Specialized in React, Next.js, Angular, Node.js, Python, PHP, PostgreSQL, and cloud deployments (AWS, Vercel, Docker, Kubernetes). Proven expertise in UI/UX, test automation, SEO, and Google Ads. Explore my portfolio, certifications, and projects in web, mobile, automation, and digital marketing.",
  keywords: [
    "Arnob Mahmud",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile App Developer",
    "Automation Engineer",
    "Digital Solutions Engineer",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Python",
    "PHP",
    "PostgreSQL",
    "NoSQL",
    "Cloud",
    "AWS",
    "Vercel",
    "Docker",
    "Kubernetes",
    "UI/UX",
    "Test Automation",
    "Selenium",
    "Cypress",
    "SEO",
    "Google Ads",
    "Portfolio",
    "Frankfurt",
    "Germany",
    "GitHub",
    "LinkedIn",
    "OpenAI",
    "Machine Learning",
    "Figma",
    "Stripe",
    "Odoo ERP",
    "CakePHP",
    "Jira",
    "DevOps",
    "Digital Marketing",
    "English",
    "German",
    "Bengali",
    "Hindi",
    "Urdu",
  ],
  author: "Arnob Mahmud",
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  robots: "index, follow",
  applicationName: "Arnob Mahmud Portfolio",
  openGraph: {
    title:
      "Arnob Mahmud | Full-Stack Developer & Automation Engineer | Frankfurt, Germany",
    description:
      "Portfolio of Arnob Mahmud, Full-Stack Developer and Automation Engineer in Frankfurt, Germany. Explore projects in web, mobile, automation, SEO, and cloud.",
    url: "https://arnob-mahmud.vercel.app",
    siteName: "Arnob Mahmud Portfolio",
    images: [
      {
        url: "/assets/photo.png",
        width: 800,
        height: 800,
        alt: "Arnob Mahmud - Full-Stack Developer in Frankfurt, Germany",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arnob_t78",
    creator: "@arnob_t78",
    title:
      "Arnob Mahmud | Full-Stack Developer & Automation Engineer | Frankfurt, Germany",
    description:
      "Portfolio of Arnob Mahmud, Full-Stack Developer and Automation Engineer in Frankfurt, Germany. Explore projects in web, mobile, automation, SEO, and cloud.",
    images: ["/assets/photo.png"],
  },
  alternates: {
    canonical: "https://arnob-mahmud.vercel.app",
  },
  contact: {
    email: "arnob_t78@yahoo.com",
    phone: "+49 1573 4664351",
    address: "Riedstraße 2, 60388 Frankfurt am Main, Germany",
    linkedin: "https://linkedin.com/in/arnob-mahmud-05839655",
    github: "https://github.com/arnobt78",
  },
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

import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {karla} from "@/fonts/karla";
import {ThemeProvider} from "@/components/theme-provider/ThemeProvider";
import {ThemeToggle} from "@/components/theme-provider/ThemeToggle";
import SEOJsonLd from "@/components/SEOJsonLd";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  metadataBase: new URL("https://farhankeriwala.com"),
  applicationName: "Farhan Keriwala",
  title: {
    default: "Farhan Keriwala",
    template: "%s | Farhan Keriwala",
  },
  description: "Software portfolio of Farhan Keriwala — full-stack developer and MSc Computational Science student.",
  keywords: [
    "Farhan Keriwala",
    "software developer",
    "full-stack",
    "Next.js",
    "TypeScript",
    "AI projects",
    "computational science",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
    languages: { "en-GB": "/", "en-US": "/us" }, // drop if you don't have /us
  },
  openGraph: {
    type: "website",
    url: "https://farhankeriwala.com",
    siteName: "Farhan Keriwala",
    title: "Farhan Keriwala — Software Developer",
    description: "Modern web, data, and AI projects.",
    images: [{ url: "/og/portfolio-og.png", width: 1200, height: 630, alt: "Farhan Keriwala Portfolio" }],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Keriwala — Software Developer",
    description: "Modern web, data, and AI projects.",
    images: ["/og/portfolio-og.png"],
    creator: "@farhankeriwala", // set if you have it
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_TOKEN", // replace
  },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
      <body
        className={[
          "antialiased",
          karla.className,
          "flex flex-col items-center min-h-screen",
          // smoother light/dark transitions:
          "transition-colors duration-300",
          // avoid motion for users who prefer reduced motion:
          "motion-reduce:transition-none",
        ].join(" ")}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem /* keep disableTransitionOnChange off for smoothness */>
          <SEOJsonLd />
          <Header />
          <main className="flex-grow container max-w-7xl mx-auto">
            {children}
            <Analytics/>
            <div className="fixed bottom-8 right-8 z-50">
              <ThemeToggle />
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
    );
}

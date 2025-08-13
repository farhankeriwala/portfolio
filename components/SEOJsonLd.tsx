"use client";
import Script from "next/script";

export default function SEOJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Farhan Keriwala",
    url: "https://farhankeriwala.com",
    jobTitle: "Software Developer",
    sameAs: [
      "https://github.com/<your-username>",
      "https://www.linkedin.com/in/<your-handle>/",
      "https://x.com/farhankeriwala"
    ],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Farhan Keriwala",
    url: "https://farhankeriwala.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://farhankeriwala.com/search?q={query}",
      "query-input": "required name=query",
    },
  };

  return (
    <>
      <Script id="ld-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}

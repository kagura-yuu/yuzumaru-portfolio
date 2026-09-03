import { siteConfig } from "@/constants/siteConfig";

export const JsonLd = () => {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.creatorName,
    alternateName: ["Yuzumaru", siteConfig.name],
    url: siteConfig.url,
    jobTitle: "QA Engineer",
    description: siteConfig.description,
    sameAs: [
      siteConfig.sns.twitter,
      siteConfig.sns.github,
      siteConfig.sns.note,
      siteConfig.sns.lineStamp,
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "ja",
    publisher: {
      "@type": "Person",
      name: siteConfig.creatorName,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
};

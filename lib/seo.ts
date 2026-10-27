export const SITE_URL = "https://saksham.space";

/** Default social preview, for pages without their own opengraph-image. */
export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Saksham Chauhan — AI Product Manager & Builder",
};

/** Schema.org reference to the Person node defined in the root layout. */
export const personRef = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Saksham Chauhan",
  url: SITE_URL,
};

/** BlogPosting and BreadcrumbList nodes for an on-site essay's JSON-LD @graph. */
export function articleGraph({
  path,
  headline,
  description,
  datePublished,
  dateModified = datePublished,
  image,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image: string;
}) {
  const url = `${SITE_URL}${path}`;
  return [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline,
      description,
      image: `${SITE_URL}${image}`,
      author: personRef,
      publisher: personRef,
      datePublished,
      dateModified,
      inLanguage: "en",
      mainEntityOfPage: url,
      isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Writing", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: headline, item: url },
      ],
    },
  ];
}

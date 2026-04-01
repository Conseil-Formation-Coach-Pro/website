import { useMemo } from "react";

const internalLinkMap = {
  "index.html": "/",
  "index.html#contact": "/#contact",
  "bilan-de-competences.html": "/bilan-de-competences.html",
  "bilan-de-competences.html#formules-section": "/bilan-de-competences.html#formules-section",
  "coaching.html": "/coaching.html",
  "coaching.html#tarification": "/coaching.html#tarification",
  "formation.html": "/formation.html",
  "bureau.html": "/bureau.html",
  "bureau.html#photos": "/bureau.html#photos",
  "parcours.html": "/parcours.html",
  "mentions-legales.html": "/mentions-legales.html"
};

function normalizeHtml(html) {
  const withLinks = Object.entries(internalLinkMap).reduce(
    (content, [from, to]) => content.split(`href="${from}"`).join(`href="${to}"`),
    html
  );

  return withLinks.replaceAll("<main>", "").replaceAll("</main>", "");
}

export default function LegacyHtmlContent({ html, className = "" }) {
  const normalizedHtml = useMemo(() => normalizeHtml(html), [html]);

  return (
    <div
      className={`legacy-content ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: normalizedHtml }}
    />
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_IMAGE, SITE_URL } from "../../data/seo";

function upsertMeta(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.setAttribute("data-seo-managed", "true");
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href, extra = {}) {
  const selector = `link[rel="${rel}"]${Object.entries(extra)
    .map(([name, value]) => `[${name}="${value}"]`)
    .join("")}`;

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    element.setAttribute("data-seo-managed", "true");
    document.head.appendChild(element);
  }

  Object.entries(extra).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
  element.setAttribute("href", href);
}

function removeManagedStructuredData() {
  document.head
    .querySelectorAll('script[data-seo-managed="true"][type="application/ld+json"]')
    .forEach((script) => script.remove());
}

function appendStructuredData(entries) {
  removeManagedStructuredData();

  entries.forEach((entry) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-managed", "true");
    script.textContent = JSON.stringify(entry);
    document.head.appendChild(script);
  });
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt,
  type = "website",
  keywords = [],
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  structuredData = []
}) {
  const location = useLocation();

  useEffect(() => {
    const pathname = path || location.pathname || "/";
    const canonicalUrl = new URL(pathname, SITE_URL).toString();
    const keywordValue = Array.isArray(keywords) ? keywords.join(", ") : keywords;

    document.documentElement.lang = "fr";

    if (title) {
      document.title = title;
    }

    if (description) {
      upsertMeta("name", "description", description);
    }

    upsertMeta("name", "robots", robots);
    upsertMeta("name", "author", "Amelie Riche");
    upsertMeta("name", "publisher", "Conseil Formation Coach Pro");
    upsertMeta("name", "theme-color", "#08111f");
    upsertMeta("name", "format-detection", "telephone=yes");
    upsertMeta("name", "geo.region", "FR-62");
    upsertMeta("name", "geo.placename", "Arras");
    upsertMeta("name", "geo.position", "50.291;2.777");
    upsertMeta("name", "ICBM", "50.291, 2.777");

    if (keywordValue) {
      upsertMeta("name", "keywords", keywordValue);
    }

    upsertMeta("property", "og:locale", "fr_FR");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", "Amelie Riche - Conseil Formation Coach Pro");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", image);
    if (imageAlt) {
      upsertMeta("property", "og:image:alt", imageAlt);
    }

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    upsertLink("canonical", canonicalUrl);
    upsertLink("alternate", canonicalUrl, { hreflang: "fr-FR" });
    upsertLink("alternate", canonicalUrl, { hreflang: "x-default" });
    upsertLink("sitemap", `${SITE_URL}/sitemap.xml`, { type: "application/xml" });

    if (structuredData.length > 0) {
      appendStructuredData(structuredData);
    } else {
      removeManagedStructuredData();
    }

    return () => {
      removeManagedStructuredData();
    };
  }, [description, image, imageAlt, keywords, location.pathname, path, robots, structuredData, title, type]);

  return null;
}

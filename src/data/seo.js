const SITE_URL = "https://amelieriche.fr";
const DEFAULT_IMAGE = `${SITE_URL}/amelie.png`;

const BUSINESS_NAME = "Amelie Riche - Conseil Formation Coach Pro";
const BUSINESS_DESCRIPTION =
  "Bilan de competences, coaching professionnel et formations soft skills a Arras et dans toute la France.";
const BUSINESS_PHONE = "+33 6 99 75 66 61";
const BUSINESS_EMAIL = "coach@amelieriche.fr";
const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "119 avenue Lobbedez",
  postalCode: "62000",
  addressLocality: "Arras",
  addressCountry: "FR"
};
const BUSINESS_SECONDARY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "42 boulevard Carnot, app. 4",
  postalCode: "62000",
  addressLocality: "Arras",
  addressCountry: "FR"
};
const SAME_AS = ["https://www.linkedin.com/in/amelie-riche-00b28a91"];

function toAbsoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

function buildProfessionalServiceSchema({ image = DEFAULT_IMAGE } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS_NAME,
    image,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: [BUSINESS_ADDRESS, BUSINESS_SECONDARY_ADDRESS],
    areaServed: {
      "@type": "Country",
      name: "France"
    },
    sameAs: SAME_AS,
    priceRange: "EUR",
    founder: {
      "@type": "Person",
      name: "Amelie Riche"
    },
    description: BUSINESS_DESCRIPTION
  };
}

function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_NAME,
    url: SITE_URL,
    inLanguage: "fr-FR"
  };
}

function buildWebPageSchema({ title, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: toAbsoluteUrl(path),
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: BUSINESS_NAME,
      url: SITE_URL
    }
  };
}

function buildServiceSchema({ name, description, path, image, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: toAbsoluteUrl(path),
    image,
    serviceType,
    areaServed: {
      "@type": "Country",
      name: "France"
    },
    provider: {
      "@type": "ProfessionalService",
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL
    }
  };
}

function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path)
    }))
  };
}

function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amelie Riche",
    jobTitle: "Coach professionnelle, formatrice et consultante",
    worksFor: {
      "@type": "Organization",
      name: "Conseil Formation Coach Pro"
    },
    url: toAbsoluteUrl("/parcours.html"),
    image: toAbsoluteUrl("/amelie.png"),
    sameAs: SAME_AS
  };
}

export const seoPages = {
  home: {
    title: "Amelie Riche - Bilan de competences, coaching et formations a Arras",
    description:
      "Bilan de competences certifie Qualiopi, coaching professionnel et formations soft skills a Arras avec Amelie Riche. Accompagnement en presentiel et a distance dans toute la France.",
    path: "/",
    image: toAbsoluteUrl("/amelie.png"),
    imageAlt: "Amelie Riche, coach professionnelle et formatrice a Arras",
    type: "website",
    keywords: [
      "Amelie Riche",
      "bilan de competences Arras",
      "coaching professionnel Arras",
      "formation soft skills Arras",
      "coach professionnelle Arras",
      "bilan CPF Arras",
      "formation entreprise Arras"
    ],
    structuredData: [
      buildProfessionalServiceSchema({ image: toAbsoluteUrl("/amelie.png") }),
      buildWebSiteSchema(),
      buildWebPageSchema({
        title: "Amelie Riche - Bilan de competences, coaching et formations a Arras",
        description:
          "Bilan de competences certifie Qualiopi, coaching professionnel et formations soft skills a Arras avec Amelie Riche.",
        path: "/"
      })
    ]
  },
  bilan: {
    title: "Bilan de competences pour femmes a Arras - Amelie Riche",
    description:
      "Bilan de competences certifie Qualiopi a Arras avec Amelie Riche : formules Speed, Classique, Intense et Entreprise, finançables selon votre situation.",
    path: "/bilan-de-competences.html",
    image: toAbsoluteUrl("/bilan-visuel.png"),
    imageAlt: "Bilan de competences a Arras avec Amelie Riche",
    type: "article",
    keywords: [
      "bilan de competences Arras",
      "bilan de competences femmes",
      "bilan de competences CPF",
      "reconversion professionnelle Arras",
      "coach bilan de competences Arras",
      "bilan de competences Qualiopi"
    ],
    structuredData: [
      buildProfessionalServiceSchema({ image: toAbsoluteUrl("/bilan-visuel.png") }),
      buildWebPageSchema({
        title: "Bilan de competences pour femmes a Arras - Amelie Riche",
        description:
          "Bilan de competences certifie Qualiopi a Arras avec Amelie Riche : accompagnement personnalise pense en priorite pour les femmes.",
        path: "/bilan-de-competences.html"
      }),
      buildServiceSchema({
        name: "Bilan de competences",
        description:
          "Accompagnement individualise, pense en priorite pour les femmes, pour clarifier un projet professionnel, une evolution ou une reconversion.",
        path: "/bilan-de-competences.html",
        image: toAbsoluteUrl("/bilan-visuel.png"),
        serviceType: "Bilan de competences"
      }),
      buildBreadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Bilan de competences", path: "/bilan-de-competences.html" }
      ])
    ]
  },
  coaching: {
    title: "Coaching professionnel a Arras - Amelie Riche",
    description:
      "Coaching professionnel a Arras pour dirigeants, managers, salaries et particuliers : relationnel, posture, evolution, management et communication.",
    path: "/coaching.html",
    image: toAbsoluteUrl("/coaching.png"),
    imageAlt: "Coaching professionnel avec Amelie Riche",
    type: "article",
    keywords: [
      "coaching professionnel Arras",
      "coach professionnelle Arras",
      "coaching manager Arras",
      "coaching dirigeant Arras",
      "coaching communication Arras"
    ],
    structuredData: [
      buildProfessionalServiceSchema({ image: toAbsoluteUrl("/coaching.png") }),
      buildWebPageSchema({
        title: "Coaching professionnel a Arras - Amelie Riche",
        description:
          "Coaching professionnel a Arras pour dirigeants, managers, salaries et particuliers.",
        path: "/coaching.html"
      }),
      buildServiceSchema({
        name: "Coaching professionnel",
        description:
          "Coaching individuel et professionnel pour clarifier des objectifs, franchir un cap et developper une posture plus juste.",
        path: "/coaching.html",
        image: toAbsoluteUrl("/coaching.png"),
        serviceType: "Coaching professionnel"
      }),
      buildBreadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Coaching", path: "/coaching.html" }
      ])
    ]
  },
  formation: {
    title: "Formations professionnelles a Arras - Amelie Riche",
    description:
      "Formations professionnelles soft skills sur mesure a Arras et partout en France : communication, emotionnel, relation client, management et changement.",
    path: "/formation.html",
    image: toAbsoluteUrl("/formation.png"),
    imageAlt: "Formations professionnelles avec Amelie Riche",
    type: "article",
    keywords: [
      "formation soft skills Arras",
      "formation professionnelle Arras",
      "formation entreprise Arras",
      "formation communication Arras",
      "formation management Arras"
    ],
    structuredData: [
      buildProfessionalServiceSchema({ image: toAbsoluteUrl("/formation.png") }),
      buildWebPageSchema({
        title: "Formations professionnelles a Arras - Amelie Riche",
        description:
          "Formations professionnelles soft skills sur mesure a Arras et partout en France.",
        path: "/formation.html"
      }),
      buildServiceSchema({
        name: "Formations professionnelles",
        description:
          "Conception et animation de formations soft skills pour entreprises, reseaux et organismes de formation.",
        path: "/formation.html",
        image: toAbsoluteUrl("/formation.png"),
        serviceType: "Formation professionnelle"
      }),
      buildBreadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Formation", path: "/formation.html" }
      ])
    ]
  },
  bureau: {
    title: "Photos a Arras - Amelie Riche",
    description:
      "Decouvrez les photos d'Amelie Riche a Arras : accessibilite, localisation, cabinet et environnement d'accompagnement.",
    path: "/bureau.html",
    image: toAbsoluteUrl("/bureau-accueil.png"),
    imageAlt: "Photos d'Amelie Riche a Arras",
    type: "article",
    keywords: [
      "photos Amelie Riche",
      "cabinet coaching Arras",
      "adresse Amelie Riche Arras",
      "bilan de competences Arras adresse",
      "coach Arras cabinet"
    ],
    structuredData: [
      buildProfessionalServiceSchema({ image: toAbsoluteUrl("/bureau-accueil.png") }),
      buildWebPageSchema({
        title: "Photos a Arras - Amelie Riche",
        description:
          "Decouvrez les photos d'Amelie Riche a Arras, son accessibilite et sa localisation.",
        path: "/bureau.html"
      }),
      buildBreadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Photos", path: "/bureau.html" }
      ])
    ]
  },
  parcours: {
    title: "Parcours professionnel d'Amelie Riche",
    description:
      "Parcours, experiences clefs, expertises et valeurs d'Amelie Riche : coach professionnelle, formatrice et consultante.",
    path: "/parcours.html",
    image: toAbsoluteUrl("/parcours-main.png"),
    imageAlt: "Parcours professionnel d'Amelie Riche",
    type: "profile",
    keywords: [
      "parcours Amelie Riche",
      "coach professionnelle Arras parcours",
      "formatrice Arras parcours",
      "consultante Arras parcours"
    ],
    structuredData: [
      buildProfessionalServiceSchema({ image: toAbsoluteUrl("/parcours-main.png") }),
      buildWebPageSchema({
        title: "Parcours professionnel d'Amelie Riche",
        description:
          "Parcours, experiences clefs, expertises et valeurs d'Amelie Riche.",
        path: "/parcours.html"
      }),
      buildPersonSchema(),
      buildBreadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Parcours", path: "/parcours.html" }
      ])
    ]
  },
  legal: {
    title: "Mentions legales - Amelie Riche",
    description:
      "Mentions legales, informations administratives, accessibilite, protection des donnees et certification Qualiopi d'Amelie Riche.",
    path: "/mentions-legales.html",
    image: toAbsoluteUrl("/admin-legal.png"),
    imageAlt: "Mentions legales et informations administratives",
    type: "article",
    keywords: [
      "mentions legales Amelie Riche",
      "informations administratives Amelie Riche",
      "Qualiopi Amelie Riche",
      "RGPD Amelie Riche"
    ],
    structuredData: [
      buildProfessionalServiceSchema({ image: toAbsoluteUrl("/admin-legal.png") }),
      buildWebPageSchema({
        title: "Mentions legales - Amelie Riche",
        description:
          "Mentions legales, informations administratives, accessibilite et politique de confidentialite.",
        path: "/mentions-legales.html"
      }),
      buildBreadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Mentions legales", path: "/mentions-legales.html" }
      ])
    ]
  }
};

export { SITE_URL, DEFAULT_IMAGE };

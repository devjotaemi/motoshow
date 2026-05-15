import { business, models } from "@/lib/data";

export const siteUrl = "https://motoshowmirassol.com.br";

export const defaultDescription =
  "Scooters e motos eletricas em Mirassol/SP. Economia real, test ride gratuito, financiamento facilitado e atendimento local com Eduardo.";

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MotorcycleDealer",
  name: business.name,
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Neid Maluli Fares, 1021, Lot. Res. Golden Park",
    addressLocality: "Mirassol",
    addressRegion: "SP",
    addressCountry: "BR"
  },
  telephone: "+55 17 99703-1951",
  url: siteUrl,
  sameAs: [business.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "9"
  }
};

export const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: models.map((model, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: model.name,
      category: "Scooter eletrica",
      brand: business.name,
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: business.name
        }
      }
    }
  }))
};

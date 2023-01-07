import { Location, Person, Store } from "@prisma/client";

export const wrapStore = (store: Store & { location: Location; owner: Person }) => {
  const { id: lId, createdAt: lCat, updatedAt: lUat, ...location } = store.location;
  const { id: oId, createdAt: oCat, updatedAt: oUat, ...owner } = store.owner;

  return {
    "@type": "http://schema.org/Store",
    ...store,
    location: {
      "@type": "http://schema.org/GeoCoordinates",
      ...location,
    },
    owner: {
      "@type": "http://schema.org/Person",
      "@context": {
        "@vocab": "http://schema.org/",
        firstName: "givenName",
        lastName: "familyName",
      },
      ...owner,
    },
  };
};

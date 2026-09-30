import { serviceGroups } from '../data/services';

export interface LocalBusinessInput {
  name: string;
  telephone: string;
  areaServed: string;
  description: string;
  url?: string;
}

const ALL_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

/**
 * Builds the schema.org LocalBusiness JSON-LD object using only known facts.
 * No address, rating, review, founding date or email: those are unknown.
 */
export function buildLocalBusiness(input: LocalBusinessInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/HomeAndConstructionBusiness',
    name: input.name,
    description: input.description,
    ...(input.url ? { url: input.url } : {}),
    telephone: input.telephone,
    areaServed: { '@type': 'Place', name: input.areaServed },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...ALL_DAYS],
      opens: '00:00',
      closes: '23:59',
    },
    makesOffer: serviceGroups.flatMap((g) => g.items).map((item) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: item },
    })),
  };
}

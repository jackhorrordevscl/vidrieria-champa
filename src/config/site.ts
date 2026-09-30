export const siteName = 'Vidriería Champa';
export const whatsappNumber = '56966222794';
export const whatsappDisplay = '+56 9 6622 2794';
export const coverage = 'Santiago y regiones';

/** Builds a wa.me link with a URL-encoded prefilled message. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Public site origin, e.g. "https://example.cl" (no trailing slash).
 * Unset until the client owns a domain: canonical and absolute og:url are then omitted.
 * Set it with the PUBLIC_SITE_URL environment variable at build time.
 */
export const siteUrl: string | undefined =
  (import.meta.env?.PUBLIC_SITE_URL as string | undefined)?.trim().replace(/\/+$/, '') || undefined;

/**
 * Path of the social share image inside /public, e.g. "/og.jpg" (1200×630).
 * Unset until the client provides an asset: og:image and twitter:image are then omitted.
 */
export const ogImagePath: string | undefined = undefined;

export const telephone =`+${whatsappNumber}`;
export const areaServed = 'Santiago y regiones de Chile';

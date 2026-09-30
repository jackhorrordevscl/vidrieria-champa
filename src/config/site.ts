export const siteName = 'Vidriería Champa';
export const whatsappNumber = '56966222794';
export const whatsappDisplay = '+56 9 6622 2794';
export const coverage = 'Santiago y regiones';

/** Builds a wa.me link with a URL-encoded prefilled message. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

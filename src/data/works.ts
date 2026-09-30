export interface Work {
  /** Card label, e.g. "OBRA 01". */
  code: string;
  /** All sheet fields are optional: a missing value renders the [PENDIENTE] marker. */
  job?: string;
  place?: string;
  material?: string;
  /** Path to a real, client-authorized photo. Missing means the placeholder frame is shown. */
  photo?: string;
  photoAlt?: string;
}

export const works: Work[] = [{ code: 'OBRA 01' }, { code: 'OBRA 02' }, { code: 'OBRA 03' }];

/** Faceted line drawings used only for the placeholder frames (one per card). */
export const placeholderPaths: string[][] = [
  ['M60 150 L140 60 L280 50 L350 140 L300 240 L160 260 Z', 'M140 60 L190 150 L280 50', 'M60 150 L190 150 L350 140', 'M160 260 L190 150 L300 240'],
  ['M50 170 L130 70 L270 60 L360 150 L290 250 L150 250 Z', 'M130 70 L200 160 L270 60', 'M50 170 L200 160 L360 150', 'M150 250 L200 160 L290 250'],
  ['M70 140 L150 50 L290 70 L350 160 L280 245 L140 255 Z', 'M150 50 L210 150 L290 70', 'M70 140 L210 150 L350 160', 'M140 255 L210 150 L280 245'],
];

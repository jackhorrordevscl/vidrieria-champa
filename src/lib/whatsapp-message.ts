/**
 * Pure helpers for the contact wizard: service options, message builder and
 * light validation. No DOM access and no network calls, so it runs under
 * `node --test` as well as in the browser bundle.
 */

export interface ServiceOption {
  id: string;
  num: string;
  name: string;
  desc: string;
  urgent?: boolean;
}

export const serviceOptions: ServiceOption[] = [
  { id: 'vidrios', num: '01', name: 'Vidrios y cerramientos', desc: 'Ventanas, mamparas, barandas, espejos y cierres de terraza.' },
  { id: 'obra', num: '02', name: 'Obra y remodelación', desc: 'Remodelaciones, ampliaciones y cambio de ventanas en obra.' },
  { id: 'postventa', num: '03', name: 'Mantención y postventa', desc: 'Sellado, herrajes, ruedas y ajustes de lo ya instalado.' },
  { id: 'urgencia', num: '04', name: 'Urgencia 24/7', desc: 'Vidrio roto en local, mampara o puerta. Coordinamos ahora.', urgent: true },
];

export function findService(id: string | null | undefined): ServiceOption | undefined {
  return serviceOptions.find((s) => s.id === id);
}

export interface RequestInput {
  /** Human-readable service name (not the id). */
  service: string;
  urgent: boolean;
  place?: string;
  measures?: string;
  details?: string;
  name: string;
  phone: string;
}

const NOT_SPECIFIED = 'no indicadas';

function clean(value: string | undefined): string {
  return (value ?? '').trim();
}

/** Builds the Spanish WhatsApp message that summarizes a request. */
export function buildRequestMessage(input: RequestInput): string {
  return [
    'Hola, quiero solicitar un servicio de Vidriería Champa.',
    `Servicio: ${clean(input.service)}`,
    `Urgencia: ${input.urgent ? 'sí' : 'no'}`,
    `Lugar: ${clean(input.place) || 'no indicado'}`,
    `Medidas: ${clean(input.measures) || NOT_SPECIFIED}`,
    `Detalle: ${clean(input.details) || 'no indicado'}`,
    `Nombre: ${clean(input.name)}`,
    `Teléfono: ${clean(input.phone)}`,
  ].join('\n');
}

/** Light phone check: digits with optional +, spaces, dashes or parentheses; 8 to 15 digits. */
export function isValidPhone(value: string): boolean {
  const v = clean(value);
  if (!/^\+?[\d\s()-]+$/.test(v)) return false;
  const digits = v.replace(/\D/g, '').length;
  return digits >= 8 && digits <= 15;
}

export function isValidName(value: string): boolean {
  return clean(value).length >= 2;
}

export const errorMessages = {
  service: 'Elige qué necesitas para continuar.',
  name: 'Escribe tu nombre.',
  phone: 'Escribe un teléfono válido, por ejemplo +56 9 0000 0000.',
} as const;

export type ValidationErrors = Partial<Record<'service' | 'name' | 'phone', string>>;

export function validateStep1(serviceId: string | null | undefined): ValidationErrors {
  return findService(serviceId) ? {} : { service: errorMessages.service };
}

export function validateStep3(name: string, phone: string): ValidationErrors {
  const errors: ValidationErrors = {};
  if (!isValidName(name)) errors.name = errorMessages.name;
  if (!isValidPhone(phone)) errors.phone = errorMessages.phone;
  return errors;
}

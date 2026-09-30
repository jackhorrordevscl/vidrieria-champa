export interface FaqItem {
  question: string;
  answer: string;
  /** Optional pending-data marker rendered after the answer. */
  marker?: string;
}

export const faqItems: FaqItem[] = [
  {
    question: '¿Cómo pido una cotización?',
    answer:
      'Escríbenos por WhatsApp con una foto del lugar y las medidas aproximadas. También puedes usar el formulario de contacto.',
  },
  {
    question: '¿Atienden fuera de Santiago?',
    answer: 'Sí. Llegamos a regiones y coordinamos el traslado según el trabajo.',
  },
  {
    question: '¿Atienden urgencias de noche y fines de semana?',
    answer: 'Sí, atendemos 24/7 por WhatsApp.',
  },
  {
    question: '¿Cuánto demoran?',
    answer:
      'Depende de la ubicación, la disponibilidad del momento y el material. Te confirmamos un plazo estimado al coordinar, no antes.',
  },
  {
    question: '¿Dan garantía?',
    answer: 'Sí.',
    marker: '[DETALLES PENDIENTES]',
  },
];

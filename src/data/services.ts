export interface ServiceGroup {
  code: string;
  title: string;
  summary: string;
  items: string[];
}

export interface UrgencyItem {
  label: string;
  /** Renders the [POR CONFIRMAR] marker until the client confirms the service. */
  pending?: boolean;
}

export const serviceGroups: ServiceGroup[] = [
  {
    code: '01.1',
    title: 'Vidrios y cristales',
    summary: 'Cristales a medida para hogar, oficina y comercio.',
    items: [
      'Reposición de cristales',
      'Espejos a medida',
      'Vidrio templado',
      'Vidrio laminado de seguridad',
      'Muebles y cubiertas de vidrio',
      'Vitrinas y divisiones de oficina',
    ],
  },
  {
    code: '01.2',
    title: 'Cerramientos y ventanas',
    summary: 'Aislación, seguridad y terminación para cada abertura.',
    items: [
      'Ventanas termopanel PVC o aluminio',
      'Puertas de aluminio y vidrio',
      'Bow window',
      'Cierre de terraza',
      'Mamparas de ducha',
      'Barandas de vidrio',
    ],
  },
  {
    code: '01.3',
    title: 'Obra y remodelación',
    summary: 'Vidriería integrada a la obra, con un solo interlocutor.',
    items: [
      'Remodelación de baños y cocinas',
      'Ampliaciones llave en mano',
      'Cambio de ventanas en obra existente',
      'Techos, pérgolas y quinchos con vidrio',
      'Albañilería, pintura y terminaciones',
    ],
  },
  {
    code: '01.4',
    title: 'Mantención y postventa',
    summary: 'Lo instalado, funcionando como el primer día.',
    items: ['Mantención y sellado', 'Reparación de herrajes, ruedas y cierres'],
  },
];

export const urgencyCard = {
  code: '01.5',
  label: 'Urgencias 24/7',
  title: 'Cuando no puede esperar',
  summary:
    'Por ejemplo, una mampara rota en un restorán antes de la apertura. Atendemos a toda hora, en Santiago y regiones.',
  items: [
    { label: 'Reposición urgente en locales comerciales' },
    { label: 'Visita técnica exprés' },
    { label: 'Atención fuera de horario, todos los días' },
    { label: 'Soluciones provisorias de resguardo', pending: true },
  ] satisfies UrgencyItem[],
};

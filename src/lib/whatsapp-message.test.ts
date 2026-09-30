import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsAppUrl } from '../config/site.ts';
import {
  buildRequestMessage,
  isValidPhone,
  validateStep1,
  validateStep3,
} from './whatsapp-message.ts';

const base = {
  service: 'Vidrios y cerramientos',
  urgent: false,
  place: 'Providencia',
  measures: '120 x 200 cm',
  details: 'Cambiar el vidrio de una ventana.',
  name: 'Ana Pérez',
  phone: '+56 9 1234 5678',
};

test('builds the full message for a regular request', () => {
  assert.equal(
    buildRequestMessage(base),
    [
      'Hola, quiero solicitar un servicio de Vidriería Champa.',
      'Servicio: Vidrios y cerramientos',
      'Urgencia: no',
      'Lugar: Providencia',
      'Medidas: 120 x 200 cm',
      'Detalle: Cambiar el vidrio de una ventana.',
      'Nombre: Ana Pérez',
      'Teléfono: +56 9 1234 5678',
    ].join('\n'),
  );
});

test('marks urgent requests', () => {
  const message = buildRequestMessage({ ...base, service: 'Urgencia 24/7', urgent: true });
  assert.match(message, /^Servicio: Urgencia 24\/7$/m);
  assert.match(message, /^Urgencia: sí$/m);
});

test('falls back when optional fields are missing or blank', () => {
  const message = buildRequestMessage({ ...base, place: undefined, measures: '   ', details: '' });
  assert.match(message, /^Lugar: no indicado$/m);
  assert.match(message, /^Medidas: no indicadas$/m);
  assert.match(message, /^Detalle: no indicado$/m);
});

test('trims values', () => {
  const message = buildRequestMessage({ ...base, name: '  Ana  ', phone: ' 912345678 ' });
  assert.match(message, /^Nombre: Ana$/m);
  assert.match(message, /^Teléfono: 912345678$/m);
});

test('the WhatsApp URL encodes accents and newlines and round-trips', () => {
  const message = buildRequestMessage(base);
  const url = buildWhatsAppUrl(message);
  assert.ok(url.startsWith('https://wa.me/56966222794?text='));
  const encoded = url.split('?text=')[1];
  assert.ok(!/[\n\sí]/.test(encoded), 'no raw newline, space or accent in the query');
  assert.ok(encoded.includes('%0A'));
  assert.ok(encoded.includes('Vidrier%C3%ADa'));
  assert.equal(decodeURIComponent(encoded), message);
});

test('phone validation accepts common Chilean formats and rejects junk', () => {
  for (const ok of ['+56 9 6622 2794', '966222794', '(2) 2345-6789', '+56966222794']) {
    assert.equal(isValidPhone(ok), true, ok);
  }
  for (const bad of ['', '12345', 'abc', '9662 2279 x', '+'.repeat(3), '1'.repeat(16)]) {
    assert.equal(isValidPhone(bad), false, bad);
  }
});

test('step 1 requires a known service', () => {
  assert.deepEqual(validateStep1('vidrios'), {});
  assert.ok(validateStep1(null).service);
  assert.ok(validateStep1('nope').service);
});

test('step 3 requires name and phone', () => {
  assert.deepEqual(validateStep3('Ana', '966222794'), {});
  const errors = validateStep3(' ', 'x');
  assert.ok(errors.name);
  assert.ok(errors.phone);
});

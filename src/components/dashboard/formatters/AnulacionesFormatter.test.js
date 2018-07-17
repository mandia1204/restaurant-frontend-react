import test from 'tape';
import { AnulacionesFormatter } from './AnulacionesFormatter';

test('AnulacionesFormatter.format(), passing anulaciones array, returns formatted data', (assert) => {
  const data = [
    {
      fecha: '29/06 13:14',
      tipo: 'otro',
      observacion: '',
    },
    {
      fecha: '29/06 13:13',
      tipo: 'derrame',
      observacion: 'Se le cayó al cliente el vaso.',
    },
    {
      fecha: '29/06 13:15',
      tipo: 'digitación',
      observacion: '',
    },
  ];

  const result = AnulacionesFormatter().format(data);

  assert.equal(result.length, 3, '# items should be equal.');
  assert.equal(result[0].tipo, 'otro', 'tipo should match.');
  assert.equal(result[1].fecha, '29/06 13:13', 'fecha should match.');
  assert.equal(result[1].observacion, 'Se le cayó al cliente el vaso.', 'observacion should match.');
  assert.equal(result[2].observacion, '<vacio>', 'observacion should be <vacio>.');
  assert.equal(result[0].color, 'amber', 'color should match.');
  assert.end();
});

test('AnulacionesFormatter.format(), passing empty anulaciones array, returns empty array', (assert) => {
  const data = [];

  const result = AnulacionesFormatter().format(data);

  assert.equal(result.length, 0, 'array should be empty.');
  assert.end();
});

import test from 'tape';
import { AnulacionesFormatter } from './AnulacionesFormatter';

test('[AnulacionesFormatter]', (t) => {
  t.test('--format, passing anulaciones array, returns formatted data', (a) => {
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

    a.equal(result.length, 3, '# items should be equal.');
    a.equal(result[0].tipo, 'otro', 'tipo should match.');
    a.equal(result[1].fecha, '29/06 13:13', 'fecha should match.');
    a.equal(result[1].observacion, 'Se le cayó al cliente el vaso.', 'observacion should match.');
    a.equal(result[2].observacion, '<vacio>', 'observacion should be <vacio>.');
    a.equal(result[0].color, 'amber', 'color should match.');
    a.end();
  });

  t.test('--format, passing empty anulaciones array, returns empty array', (a) => {
    const data = [];

    const result = AnulacionesFormatter().format(data);

    a.equal(result.length, 0, 'array should be empty.');
    a.end();
  });
  t.skip('');
});

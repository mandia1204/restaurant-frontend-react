import test from 'tape';
import { ChartModelBuilder } from './ChartModelBuilder';
import { Charts } from '../../../util/Constants';

test('ChartModelBuilder.build(), passing data for ventasAnuales and anulacionesDelMes, returns chart data', (assert) => {
  const data = [
    {
      name: Charts.ventasAnuales,
      data: {
        2018: {
          Septiembre: 70611,
          Marzo: 42356,
        },
      },
    },
    {
      name: Charts.anulacionesDelMes,
      data: {
        Mayo: {
          otro: 15,
          digitación: 20,
          'falta producción': 6,
          derrame: 10,
          cambio: 16,
        },
      },
    },
  ];

  const result = ChartModelBuilder().build(data);

  assert.deepEqual(result.ventasAnuales.data.datasets[0].data, [70611, 42356], 'dataset data items should match expected.');
  assert.deepEqual(result.ventasAnuales.data.datasets[0].label, '2018', 'dataset label should match expected.');
  assert.deepEqual(result.ventasAnuales.data.labels, ['Septiembre', 'Marzo'], 'labels should match expected.');
  assert.end();
});

test('ChartModelBuilder.build(), passing empty charts, returns empty chart data', (assert) => {
  const data = [];

  const result = ChartModelBuilder().build(data);
  const expected = {
    ventasAnuales: { data: {}, options: {} },
    anulacionesDelMes: { data: {}, options: {} },
    productosVendidosMes: { data: {}, options: {} },
    mozoDelMes: { data: {}, options: {} },
    platosMasVendidosMes: { data: {}, options: {} },
  };

  assert.deepEqual(result, expected, 'structures should be equal');
  assert.end();
});

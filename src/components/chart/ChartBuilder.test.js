import test from 'tape';
import { ChartBuilder } from './ChartBuilder';

test('ChartBuilder', (t) => {
  t.test('--generateChartBody, passing chartData, returns chart with labels and ds', (a) => {
    const data = {
      2018: {
        Septiembre: 70611,
        Marzo: 42356,
        Diciembre: 66843,
        Agosto: 61566,
      },
    };

    const result = ChartBuilder().generateChartBody(data);

    const expected = {
      labels: [
        'Septiembre',
        'Marzo',
        'Diciembre',
        'Agosto',
      ],
      datasets: [
        {
          label: '2018',
          data: [
            70611,
            42356,
            66843,
            61566,
          ],
        },
      ],
    };

    t.deepEqual(result, expected, 'result structure should match expected.');
    a.end();
  });

  t.test('--generateChartBody, passing chartData with 2 headers, returns chart with 2 datasets', (a) => {
    const data = {
      2018: {
        Septiembre: 70611,
        Marzo: 42356,
        Diciembre: 66843,
        Agosto: 61566,
      },
      2019: {
        Septiembre: 5000,
        Marzo: 6000,
        Diciembre: 7000,
        Agosto: 8000,
      },
    };

    const result = ChartBuilder().generateChartBody(data);

    const expected = {
      labels: [
        'Septiembre',
        'Marzo',
        'Diciembre',
        'Agosto',
      ],
      datasets: [
        {
          label: '2018',
          data: [
            70611,
            42356,
            66843,
            61566,
          ],
        },
        {
          label: '2019',
          data: [
            5000,
            6000,
            7000,
            8000,
          ],
        },
      ],
    };

    a.deepEqual(result, expected, 'result structure should match expected.');
    a.end();
  });

  t.end();
});

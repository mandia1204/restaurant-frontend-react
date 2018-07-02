import test from 'tape';
import { ChartFormatter } from './ChartFormatter';

test('ChartFormatter.generateChartBody(), passing chartData, returns chart with labels and ds', (assert) => {
    const data = {
        '2018': {
            'Septiembre': 70611,
            'Marzo': 42356,
            'Diciembre': 66843,
            'Agosto': 61566
        }
    };
    
    const result = ChartFormatter().generateChartBody(data);
    
    const expected = {
        labels: [
          'Septiembre',
          'Marzo',
          'Diciembre',
          'Agosto'
        ],
        datasets: [
          {
            label: '2018',
            data: [
              70611,
              42356,
              66843,
              61566
            ]
          }
        ]
    };

    assert.deepEqual(result, expected, 'result structure should match expected.');
    assert.end();
});
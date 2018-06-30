import test from 'tape';
import { ChartModelBuilder } from './ChartModelBuilder';

test('ChartModelBuilder.build(), passing data for VENTAS_ANUALES and ANULACIONES_DEL_MES, returns chart final model', (assert) => {
    const data = {
        charts: [
            {
                name: 'VENTAS_ANUALES',
                data: {
                    2018: {
                        'Septiembre': 70611,
                        'Marzo': 42356
                    }
                }
            },
            {
                name: 'ANULACIONES_DEL_MES',
                data: {
                    Mayo: {
                        'otro': 15,
                        'digitación': 20,
                        'falta producción': 6,
                        'derrame': 10,
                        'cambio': 16
                    }
                }
            }
        ]
    };
    
    const result = ChartModelBuilder().build(data);
    
    assert.deepEqual(result['ventasAnuales'].data.datasets[0].data, [70611,42356], 'dataset data items should match expected.');
    assert.deepEqual(result['ventasAnuales'].data.datasets[0].label, '2018', 'dataset label should match expected.');
    assert.deepEqual(result['ventasAnuales'].data.labels, ['Septiembre','Marzo'], 'labels should match expected.');
    assert.end();
});
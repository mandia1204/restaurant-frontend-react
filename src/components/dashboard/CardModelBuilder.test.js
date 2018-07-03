import test from 'tape';
import { CardModelBuilder } from './CardModelBuilder';
import { CardOptions } from '../../util/Constants';

test('CardModelBuilder.build(), passing dashboard cards, returns cards formatted data', (assert) => {
    const data = {
        'PRODUCCION_DIA': {
            'value': 2500
        },
        'VENTA_DIA': {
            'value': 1500
        },
        'PAX_DIA': {
            'value': 58
        },
        'TICKET_PROMEDIO_DIA': {
            'value': 177
        }
    };
    
    const result = CardModelBuilder().build(data);

    assert.ok(result['produccionDia'], 'should have produccionDia.');
    assert.ok(result['ventaDia'], 'should have ventaDia.');
    assert.ok(result['paxDia'], 'should have paxDia.');
    assert.ok(result['ticketPromedioDia'], 'should have ticketPromedioDia.');

    const options = CardOptions['PRODUCCION_DIA'];

    const expected = {
        value: 2500,
        title: options.title,
        color: options.color,
        format: options.format,
        valueFormatted: options.format.replace('${0}', 2500)
    };
    assert.deepEqual(result['produccionDia'], expected, 'structures should be equal.');

    assert.end();
});

test('CardModelBuilder.build(), passing empty cards object, returns cards with empty values', (assert) => {
    const data = {};
    
    const result = CardModelBuilder().build(data);

    const expected = {
        produccionDia: {},
        ventaDia: {},
        paxDia: {},
        ticketPromedioDia: {}
    };

    assert.deepEqual(result, expected, 'structures should be equal.');

    assert.end();
});
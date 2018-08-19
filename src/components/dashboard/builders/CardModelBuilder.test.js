import test from 'tape';
import { CardModelBuilder } from './CardModelBuilder';
import { CardOptions, Cards } from '../../../util/Constants';

test('[CardModelBuilder]', (t) => {
  t.test('--build, passing dashboard cards, returns cards formatted data', (a) => {
    const data = {
      [Cards.produccionDia]: {
        value: 2500,
      },
      [Cards.ventaDia]: {
        value: 1500,
      },
      [Cards.paxDia]: {
        value: 58,
      },
      [Cards.ticketPromedioDia]: {
        value: 177,
      },
    };

    const result = CardModelBuilder().build(data);

    a.ok(result.produccionDia, 'should have produccionDia.');
    a.ok(result.ventaDia, 'should have ventaDia.');
    a.ok(result.paxDia, 'should have paxDia.');
    a.ok(result.ticketPromedioDia, 'should have ticketPromedioDia.');

    const options = CardOptions.produccionDia;

    const expected = {
      value: 2500,
      title: options.title,
      color: options.color,
      format: options.format,
      valueFormatted: options.format.replace('${0}', 2500), // eslint-disable-line no-template-curly-in-string
    };
    a.deepEqual(result.produccionDia, expected, 'structures should be equal.');

    a.end();
  });

  t.test('--build, passing empty cards object, returns cards with empty values', (a) => {
    const data = {};

    const result = CardModelBuilder().build(data);

    const expected = {
      produccionDia: {},
      ventaDia: {},
      paxDia: {},
      ticketPromedioDia: {},
    };

    a.deepEqual(result, expected, 'structures should be equal.');

    a.end();
  });
  t.skip('');
});

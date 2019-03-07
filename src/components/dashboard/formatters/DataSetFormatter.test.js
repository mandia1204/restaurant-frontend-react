import test from 'tape';
import { DataSetFormatter } from './DataSetFormatter';
import { ChartColors } from '../config/ChartConfig';
import Colors from '../../../util/Colors';

test('[DataSetFormatter]', (t) => {
  t.test('--line, passing datasets, returns datasets with style props', (a) => {
    const datasets = [
      {
        label: '2018',
        data: [
          70611,
          42356,
        ],
      },
    ];

    const color = Colors[ChartColors.line[0]];

    const result = DataSetFormatter().line(datasets);

    a.ok(result.length === 1);
    a.equal(result[0].backgroundColor, color.light, 'backgroundColor should match.');
    a.equal(result[0].borderColor, color.dark, 'borderColor should match.');
    a.equal(result[0].pointColor, color.dark, 'pointColor should match.');
    a.equal(result[0].pointHighlightStroke, color.dark, 'pointHighlightStroke should match.');

    a.end();
  });

  t.test('--bar, passing datasets, returns datasets with style props', (a) => {
    const datasets = [
      {
        label: '2018',
        data: [
          70611,
          42356,
        ],
      },
    ];

    const result = DataSetFormatter().bar(datasets);

    a.ok(result.length === 1);
    let expected = ChartColors.bar.map(cc => Colors[cc].light);
    a.deepEqual(result[0].backgroundColor, expected, 'backgroundColor and  array colors should match.');
    expected = ChartColors.bar.map(cc => Colors[cc].normal);
    a.deepEqual(result[0].borderColor, expected, 'borderColor and array colors should match.');
    a.end();
  });

  t.test('--pie, passing datasets, returns datasets with style props', (a) => {
    const datasets = [
      {
        label: '2018',
        data: [
          70611,
          42356,
        ],
      },
    ];

    const result = DataSetFormatter().pie(datasets);

    a.ok(result.length === 1);
    let expected = ChartColors.pie.map(cc => Colors[cc].normal);
    a.deepEqual(result[0].backgroundColor, expected, 'backgroundColor and  array colors should match.');
    expected = ChartColors.pie.map(cc => Colors[cc].dark);
    a.deepEqual(result[0].hoverBackgroundColor, expected, 'hoverBackgroundColor and array colors should match.');
    a.end();
  });
  t.skip('');
});

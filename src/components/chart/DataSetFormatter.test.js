import test from 'tape';
import { DataSetFormatter } from './DataSetFormatter';
import { ChartColors } from './ChartConfig';
import Colors from '../../util/Colors';

test('DataSetFormatter.line(), passing datasets, returns datasets with style props', (assert) => {
    const datasets = [
        {
          label: '2018',
          data: [
            70611,
            42356
          ]
        }
      ];

    const color = Colors[ChartColors['line'][0]];
    
    const result = DataSetFormatter().line(datasets);
    
    assert.ok(result.length == 1);
    assert.equal(result[0].backgroundColor, color.light, 'backgroundColor should match.');
    assert.equal(result[0].borderColor, color.dark, 'borderColor should match.');
    assert.equal(result[0].pointColor, color.dark, 'pointColor should match.');
    assert.equal(result[0].pointHighlightStroke, color.dark, 'pointHighlightStroke should match.');

    assert.end();
});

test('DataSetFormatter.bar(), passing datasets, returns datasets with style props', (assert) => {
    const datasets = [
        {
          label: '2018',
          data: [
            70611,
            42356
          ]
        }
    ];

    const result = DataSetFormatter().bar(datasets);
    
    assert.ok(result.length == 1);
    let expected = ChartColors['bar'].map(cc => Colors[cc].light);
    assert.deepEqual(result[0].backgroundColor, expected, 'backgroundColor and  array colors should match.');
    expected = ChartColors['bar'].map(cc => Colors[cc].normal);
    assert.deepEqual(result[0].borderColor, expected, 'borderColor and array colors should match.');
    assert.end();
});

test('DataSetFormatter.pie(), passing datasets, returns datasets with style props', (assert) => {
    const datasets = [
        {
          label: '2018',
          data: [
            70611,
            42356
          ]
        }
    ];

    const result = DataSetFormatter().pie(datasets);
    
    assert.ok(result.length == 1);
    let expected = ChartColors['pie'].map(cc => Colors[cc].normal);
    assert.deepEqual(result[0].backgroundColor, expected, 'backgroundColor and  array colors should match.');
    expected = ChartColors['pie'].map(cc => Colors[cc].dark);
    assert.deepEqual(result[0].hoverBackgroundColor, expected, 'hoverBackgroundColor and array colors should match.');
    assert.end();
});
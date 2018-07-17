import Colors from '../../util/Colors';
import { ChartColors } from './ChartConfig';

const barFormat = (datasets) => {
  const formatProps = {
    backgroundColor: ChartColors.bar.map(c => Colors[c].light),
    borderColor: ChartColors.bar.map(c => Colors[c].normal),
    borderWidth: 1,
  };
  return datasets.map(ds => Object.assign({}, ds, formatProps));
};

const lineFormat = (datasets) => {
  const getProps = color => ({
    backgroundColor: color.light,
    borderColor: color.dark,
    pointColor: color.dark,
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: color.dark,
  });
  const chartColors = ChartColors.line;

  return datasets.map((ds, index) => {
    const color = Colors[chartColors[index]];
    return Object.assign({}, ds, getProps(color));
  });
};

const pieFormat = (datasets) => {
  const formatProps = {
    backgroundColor: ChartColors.pie.map(c => Colors[c].normal),
    hoverBackgroundColor: ChartColors.pie.map(c => Colors[c].dark),
  };
  return datasets.map(ds => Object.assign({}, ds, formatProps));
};

const radarFormat = chart => chart;

export const DataSetFormatter = () => ({
  bar: barFormat,
  line: lineFormat,
  pie: pieFormat,
  radar: radarFormat,
});

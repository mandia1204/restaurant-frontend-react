import { ChartBuilder } from './ChartBuilder';
import { ChartOptions } from '../config/ChartOptions';
import { ChartOptionsConfig } from '../config/ChartConfig';
import { Charts } from '../../../util/Constants';

// converts data from api to chart model
const generateChartModel = (charts, chartName, type) => {
  const chart = charts.filter(c => c.name === chartName)[0];
  if (!chart) return { data: {}, options: {} };
  return {
    data: ChartBuilder().build(chart.data, type),
    options: ChartOptions()[type](ChartOptionsConfig[chartName]),
  };
};

const build = charts => ({
  ventasAnuales: generateChartModel(charts, Charts.ventasAnuales, 'bar'),
  anulacionesDelMes: generateChartModel(charts, Charts.anulacionesDelMes, 'radar'),
  productosVendidosMes: generateChartModel(charts, Charts.productosVendidosMes, 'pie'),
  mozoDelMes: generateChartModel(charts, Charts.mozoDelMes, 'bar'),
  platosMasVendidosMes: generateChartModel(charts, Charts.platosMasVendidosMes, 'bar'),
});

export const ChartModelBuilder = () => ({
  build,
});

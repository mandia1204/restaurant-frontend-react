import { ChartFormatter } from '../../chart/ChartFormatter';
import { ChartOptions } from '../../chart/ChartOptions';
import { ChartOptionsConfig } from '../../chart/ChartConfig';
import { Charts } from '../../../util/Constants';

// converts data from api to chart model
const generateChartModel = (charts, chartName, type) => {
  const chart = charts.filter(c => c.name === chartName)[0];
  if (!chart) return { data: {}, options: {} };
  return {
    data: ChartFormatter().format(chart.data, type),
    options: ChartOptions()[type](ChartOptionsConfig[chartName]),
  };
};

const build = charts => ({
  [Charts.ventasAnuales]: generateChartModel(charts, Charts.ventasAnuales, 'bar'),
  [Charts.anulacionesDelMes]: generateChartModel(charts, Charts.anulacionesDelMes, 'radar'),
  [Charts.productosVendidosMes]: generateChartModel(charts, Charts.productosVendidosMes, 'pie'),
  [Charts.mozoDelMes]: generateChartModel(charts, Charts.mozoDelMes, 'bar'),
  [Charts.platosMasVendidosMes]: generateChartModel(charts, Charts.platosMasVendidosMes, 'bar'),
});

export const ChartModelBuilder = () => ({
  build,
});

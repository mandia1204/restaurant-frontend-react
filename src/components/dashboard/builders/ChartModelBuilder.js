import { ChartFormatter } from '../../chart/ChartFormatter';
import { ChartOptions } from '../../chart/ChartOptions';
import { ChartOptionsConfig } from '../../chart/ChartConfig';

//converts data from api to chart model
const generateChartModel = (charts, chartName, type) => {
    const chart = charts.filter(c=> c.name === chartName)[0];
    if (!chart) return { data: {}, options: {}};
    return {
        data: ChartFormatter().format(chart.data, type),
        options: ChartOptions()[type](ChartOptionsConfig[chartName])
    };
};

const build = (charts) => ({
    ventasAnuales: generateChartModel(charts, 'VENTAS_ANUALES', 'bar'),
    anulacionesMes: generateChartModel(charts, 'ANULACIONES_DEL_MES', 'radar'),
    productosMes: generateChartModel(charts, 'PRODUCTOS_VENDIDOS_DEL_MES', 'pie'),
    mozoMes: generateChartModel(charts, 'MOZO_DEL_MES', 'bar'),
    platoMes: generateChartModel(charts, 'PLATOS_VENDIDOS_DEL_MES', 'bar')
});

export const ChartModelBuilder = () => {
    return {
        build: build
    };
};
import { ChartFormatter } from '../chart/ChartFormatter';
import { ChartOptions } from '../chart/ChartOptions';
import { ChartOptionsConfig } from '../chart/ChartConfig';

//converts data from api to chart model
const generateChartModel = (data, chartName, type) => {
    const chart = data.charts.filter(c=> c.name === chartName)[0];
    if (!chart) return null;
    return {
        data: ChartFormatter().format(chart.data, type),
        options: ChartOptions()[type](ChartOptionsConfig[chartName])
    };
};

const build = (data) => ({
    ventasAnuales: generateChartModel(data, 'VENTAS_ANUALES', 'bar'),
    anulacionesMes: generateChartModel(data, 'ANULACIONES_DEL_MES', 'radar'),
    productosMes: generateChartModel(data, 'PRODUCTOS_VENDIDOS_DEL_MES', 'pie'),
    mozoMes: generateChartModel(data, 'MOZO_DEL_MES', 'bar'),
    platoMes: generateChartModel(data, 'PLATOS_VENDIDOS_DEL_MES', 'bar')
});

export const ChartModelBuilder = () => {
    return {
        build: build
    };
};
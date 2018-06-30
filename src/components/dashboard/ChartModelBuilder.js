import { ChartFormatter } from '../chart/ChartFormatter';

//converts data from api to chart model
const generateChartModel = (data, par, type) => {
    const chartFormatter = ChartFormatter();
    const chart = data.charts.filter(c=> c.name === par)[0];
    if (!chart) return null;
    return {
        data: chartFormatter.format(chart.data, type)
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
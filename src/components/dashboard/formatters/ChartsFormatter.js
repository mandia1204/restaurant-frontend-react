import { ChartFormatter } from '../../chart/ChartFormatter';

const getItem = (data, par, type) => ({ data: formatChart(data, par, type) });

//converts data from api to chart model
const formatChart = (data, par, type) => {
    const chartFormatter = ChartFormatter();
    const chart = data.charts.filter(c=> c.name === par)[0];
    if (!chart) return null;
    return chartFormatter.format(chart.data, type);
};

const format = (data) => ({
    ventasAnuales: getItem(data, 'VENTAS_ANUALES', 'bar'),
    anulacionesMes: getItem(data, 'ANULACIONES_DEL_MES', 'radar'),
    productosMes: getItem(data, 'PRODUCTOS_VENDIDOS_DEL_MES', 'pie'),
    mozoMes: getItem(data, 'MOZO_DEL_MES', 'bar'),
    platoMes: getItem(data, 'PLATOS_VENDIDOS_DEL_MES', 'bar')
});

export const ChartsFormatter = () => {
    return {
        format: format
    };
};
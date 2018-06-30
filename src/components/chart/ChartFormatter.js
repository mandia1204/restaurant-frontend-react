import { ChartColors } from './ChartConfig';
import { DataSetFormatter } from './DataSetFormatter';

export const ChartFormatter = () => {
    const generateChartBody = (data) => {
        const chart = { 'labels': [], 'datasets': [] };
        Object.keys(data).forEach((k, index) => {
            const ds = { 'label': k, data: []};
            const firstIteration = index === 0;
            Object.keys(data[k]).forEach(j => {
                if (firstIteration) {
                    chart.labels.push(j);
                }
                ds.data.push(data[k][j]);
            });
            chart.datasets.push(ds);
        });
        return chart;
    };

    const format = (data, type) => {
        const chart = generateChartBody(data);
        const dsFormatter = DataSetFormatter();
        return dsFormatter[type](chart, ChartColors[type]);
    };

    return {
        generateChartBody,
        format
    };
};
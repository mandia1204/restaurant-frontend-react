import { DataSetFormatter } from './DataSetFormatter';

export const ChartBuilder = () => {
  const generateChartBody = (data) => {
    const chart = { labels: [], datasets: [] };
    Object.keys(data).forEach((k, index) => {
      const ds = { label: k, data: [] };
      const firstIteration = index === 0;
      Object.keys(data[k]).forEach((j) => {
        if (firstIteration) {
          chart.labels.push(j);
        }
        ds.data.push(data[k][j]);
      });
      chart.datasets.push(ds);
    });
    return chart;
  };

  const build = (data, type) => {
    const chart = generateChartBody(data);
    const dataSetFormatted = DataSetFormatter()[type](chart.datasets);
    return Object.assign({}, chart, { datasets: dataSetFormatted });
  };

  return {
    generateChartBody,
    build,
  };
};

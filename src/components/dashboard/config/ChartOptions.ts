import ChartOptionsConfig from '../../../types/ChartOptionsConfig';

const barOptions = (opts: ChartOptionsConfig) => ({
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
    }],
  },
  layout: {
    padding: 5,
  },
  title: {
    display: !!opts.title,
    text: opts.title.text,
    fontSize: 13.5,
    position: opts.title.position,
  },
});

const radarOptions = (opts: ChartOptionsConfig) => ({
  fontSize: 20,
  scale: {
    ticks: {
      beginAtZero: true,
      display: true,
    },
    labels: {
      fontSize: 10,
    },
    title: {
      fontSize: 10,
    },
  },
  title: {
    display: !!opts.title,
    text: opts.title.text,
    fontSize: 13.5,
    position: opts.title.position,
  },
  layout: {
    padding: 5,
  },
  legend: {
    position: 'left',
    labels: {
      fontSize: 12,
      boxWidth: 10,
    },
  },
});

const pieOptions = (opts: ChartOptionsConfig) => ({
  animation: {
    animateScale: true,
  },
  title: {
    display: !!opts.title,
    text: opts.title.text,
    fontSize: 13.5,
    position: opts.title.position,
  },
  legend: {
    position: 'left',
    labels: {
      fontSize: 12,
      boxWidth: 10,
    },
  },
});

interface ChartOptions {
  [index: string]: (o: ChartOptionsConfig) => object;
}

export const ChartOptions = (): ChartOptions => ({
  bar: barOptions,
  radar: radarOptions,
  pie: pieOptions,
});

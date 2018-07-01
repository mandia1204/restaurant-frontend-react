const barOptions = (opts) => ({
    scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
    },
    layout: {
        padding: 5
    },
    title: {
        display: opts.title? true :false,
        text: opts.title.text,
        fontSize: 13.5,
        position: opts.title.position
    }
});

const radarOptions = (opts) => ({
    fontSize: 20,
    scale: {
      ticks: {
        beginAtZero: true,
        display: true
      },
      labels: {
        fontSize: 10
      },
      title: {
        fontSize: 10
      }
    },
    title: {
      display: opts.title? true :false,
      text: opts.title.text,
      fontSize: 13.5,
      position: opts.title.position
    },
    layout: {
      padding: 5
    },
    legend: {
      position: 'right',
      labels: {
        fontSize: 12,
        boxWidth: 10
      }
    }
});

const pieOptions = (opts) => ({
    animation: {
      animateScale: true
    },
    title: {
      display: opts.title? true :false ,
      text: opts.title.text,
      fontSize: 13.5,
      position: opts.title.position
    },
    legend: {
      position: 'left',
      labels: {
        fontSize: 12,
        boxWidth: 10
      }
    }
});

export const ChartOptions = () => ({
    bar: barOptions,
    radar: radarOptions,
    pie: pieOptions
});
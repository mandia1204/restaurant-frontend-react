import Colors from '../../util/Colors';

const barFormat = (datasets, chartColors) => {
    const formatProps = {
        backgroundColor: chartColors.map(c=> Colors[c].light),
        borderColor: chartColors.map(c=> Colors[c].normal),
        borderWidth: 1
    };
    return datasets.map(ds => Object.assign({}, ds, formatProps));
};

const lineFormat = (datasets, chartColors) => {
    const getProps = (color) => ({
        backgroundColor: color.light,
        borderColor: color.dark,
        pointColor: color.dark,
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: color.dark
    });

    return datasets.map((ds, index) => {
        const color = Colors[chartColors[index]];
        return Object.assign({}, ds, getProps(color));
    });
};

const pieFormat = (datasets, chartColors) => {
    const formatProps = {
        backgroundColor: chartColors.map(c=> Colors[c].normal),
        hoverBackgroundColor: chartColors.map(c=> Colors[c].dark)
    };
    return datasets.map(ds => Object.assign({}, ds, formatProps));
};

const radarFormat = (chart) => {
    return chart;
};

export const DataSetFormatter = () =>{
    return {
        bar: barFormat,
        line: lineFormat,
        pie: pieFormat,
        radar: radarFormat
    };
};
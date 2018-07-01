import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDashboard } from '../../state/actions/DashboardActions';
import Grid from '@material-ui/core/Grid';
import { Bar, Radar, Pie } from 'react-chartjs-2';
import { ChartModelBuilder } from './ChartModelBuilder';

class DashboardContainer extends Component {

  constructor(props){
    super(props);
    this.chartModelBuilder = ChartModelBuilder();
  }

  componentDidMount() {
    this.props.dispatch(fetchDashboard({}));
  }
  
  render() {
    const chartModel = this.chartModelBuilder.build(this.props.dashboard);
    const height = 140;
    const itemWitdh = 4;
    return (
      <Fragment>
        <Grid container spacing={0}>
          <Grid item xs={itemWitdh}>
              <Bar
              data={chartModel.mozoMes.data}
              height={height}
              options={chartModel.mozoMes.options}
            />
          </Grid>
           <Grid item xs={itemWitdh}>
              <Bar
              data={chartModel.ventasAnuales.data}
              height={height}
              options={chartModel.ventasAnuales.options} 
              />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Bar
              data={chartModel.platoMes.data}
              height={height}
              options={chartModel.platoMes.options} 
            />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Radar
              data={chartModel.anulacionesMes.data}
              height={height}
              options={chartModel.anulacionesMes.options}
            />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Pie
              data={chartModel.productosMes.data}
              height={height}
              options={chartModel.productosMes.options}
            />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Pie
              data={chartModel.productosMes.data}
              height={height}
              options={chartModel.productosMes.options}
            />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Bar
              data={chartModel.platoMes.data}
              height={height}
              options={chartModel.platoMes.options} 
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { dashboard } = state;
  return {
    dashboard
  };
};

DashboardContainer.propTypes = {
  dashboard: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(DashboardContainer);
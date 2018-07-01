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
    this.state = { 
      chartModel: {
        ventasAnuales:  { data: {}, options: {} },
        anulacionesMes: { data: {}, options: {} }, 
        mozoMes: { data: {}, options: {} }, 
        platoMes: { data: {}, options: {} } , 
        productosMes: { data: {}, options: {} }
      } 
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchDashboard({})).then(this.fetchComplete);
    this.chartModelBuilder = ChartModelBuilder();
  }

  fetchComplete =(data) => {
    const chartModel = this.chartModelBuilder.build(data.dashboard);
    this.setState({
      chartModel
    });
  }

  render() {
    const height = 140;
    const itemWitdh = 4;
    return (
      <Fragment>
        <Grid container spacing={0}>
          <Grid item xs={itemWitdh}>
              <Bar
              data={this.state.chartModel.mozoMes.data}
              height={height}
              options={this.state.chartModel.mozoMes.options}
            />
          </Grid>
           <Grid item xs={itemWitdh}>
              <Bar
              data={this.state.chartModel.ventasAnuales.data}
              height={height}
              options={this.state.chartModel.ventasAnuales.options} 
              />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Bar
              data={this.state.chartModel.platoMes.data}
              height={height}
              options={this.state.chartModel.platoMes.options} 
            />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Radar
              data={this.state.chartModel.anulacionesMes.data}
              height={height}
              options={this.state.chartModel.anulacionesMes.options}
            />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Pie
              data={this.state.chartModel.productosMes.data}
              height={height}
              options={this.state.chartModel.productosMes.options}
            />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Pie
              data={this.state.chartModel.productosMes.data}
              height={height}
              options={this.state.chartModel.productosMes.options}
            />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Bar
              data={this.state.chartModel.platoMes.data}
              height={height}
              options={this.state.chartModel.platoMes.options} 
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
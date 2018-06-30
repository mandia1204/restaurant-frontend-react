import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDashboard } from '../../state/actions/DashboardActions';
import Grid from '@material-ui/core/Grid';
import { Bar } from 'react-chartjs-2';
import { ChartModelBuilder } from './ChartModelBuilder';

class DashboardContainer extends Component {

  constructor(props){
    super(props);
    this.state = { 
      chartModel: {  
        anulacionesMes: null, 
        mozoMes: { data: {} }, 
        platoMes: null , 
        productosMes: null
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
    //console.log('render');
    // console.log('render: ',this.props.dashboard);
    //this.chartModelBuilder.build();
    // const data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'My First dataset',
    //       backgroundColor: 'rgba(255,99,132,0.2)',
    //       borderColor: 'rgba(255,99,132,1)',
    //       borderWidth: 1,
    //       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //       hoverBorderColor: 'rgba(255,99,132,1)',
    //       data: [65, 59, 80, 81, 56, 55, 40]
    //     }
    //   ]
    // };

    const data = this.state.chartModel.mozoMes.data;

    const height = 140;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={4}>
              <Bar
              data={data}
              height={height}
              options={{
                maintainAspectRatio: true
              }}
            />
          </Grid>
          {/* <Grid item xs={4}>
              <Bar
              data={data}
              height={height}
              options={{
                maintainAspectRatio: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
              <Bar
              data={data}
              height={height}
              options={{
                maintainAspectRatio: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
              <Bar
              data={data}
              height={height}
              options={{
                maintainAspectRatio: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
              <Bar
              data={data}
              height={height}
              options={{
                maintainAspectRatio: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
              <Bar
              data={data}
              height={height}
              options={{
                maintainAspectRatio: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
              <Bar
              data={data}
              height={height}
              options={{
                maintainAspectRatio: true
              }}
            />
          </Grid> */}
        </Grid>
        
      </div>
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
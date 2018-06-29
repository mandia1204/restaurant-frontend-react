import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
import { addChart, fetchDashboard } from '../../state/actions/DashboardActions';
import Grid from '@material-ui/core/Grid';
import { Bar } from 'react-chartjs-2';
//import dashBoardResponse from '../../api/mocks/FullResponse';

class DashboardContainer extends Component {

  constructor(props){
    super(props);
    this.state = { chartName: '' };
  }

  componentDidMount() {
    this.props.dispatch(fetchDashboard({}));
  }

  addChart = () => {
    const chart = { name: this.state.chartName};
    this.props.dispatch(addChart(chart));
    this.setState({ chartName: '' });
  }

  updateState = (event) => {
    const newState = {...this.state, chartName: event.target.value};
    this.setState(newState);
  }

  render() {

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    const height = 140;

    return (
      <div>
        
        {/* <Grid container>
          <Grid item xs={12}>
            <h1>Dashboard soon...</h1>

            <span>Charts: {this.props.dashboard.charts.length}</span>
            <span>Bars: {this.props.dashboard.bars.length}</span>
            <div>
              <TextField onChange={this.updateState} value={this.state.chartName} label="chart" />
              <Button onClick={this.addChart}>Add chart</Button>
            </div>
            <div>
              
            </div>
          </Grid>
        </Grid> */}
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addChart, fetchDashboard } from '../../state/actions/DashboardActions';

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
    return (
      <div>
        <h1>Dashboard soon...</h1>
        <span>Charts: {this.props.dashboard.charts.length}</span>
        <span>Bars: {this.props.dashboard.bars.length}</span>
        <div>
          <TextField onChange={this.updateState} value={this.state.chartName} label="chart" />
          <Button onClick={this.addChart}>Add chart</Button>
        </div>
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
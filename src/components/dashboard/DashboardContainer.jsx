import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDashboard } from '../../state/actions/DashboardActions';
import { showFilters } from '../../state/actions/AppActions';
import Grid from '@material-ui/core/Grid';
import { Bar, Radar, Pie } from 'react-chartjs-2';
import { ChartModelBuilder } from './builders/ChartModelBuilder';
import { CardModelBuilder } from './builders/CardModelBuilder';
import { AnulacionesFormatter } from './formatters/AnulacionesFormatter';
import DashboardCard from './DashboardCard';
import Anulaciones from './Anulaciones';

class DashboardContainer extends Component {

  constructor(props){
    super(props);
    this.chartModelBuilder = ChartModelBuilder();
    this.cardModelBuilder = CardModelBuilder();
    this.anulacionesFormatter = AnulacionesFormatter();
  }

  componentDidMount() {
    this.props.dispatch(fetchDashboard({}));
    this.props.dispatch(showFilters(true));
  }

  componentWillUnmount() {
    this.props.dispatch(showFilters(false));
  }
  
  render() {
    const chartModel = this.chartModelBuilder.build(this.props.dashboard.charts);
    const cardModel = this.cardModelBuilder.build(this.props.dashboard.cards);
    const anulaciones  = this.anulacionesFormatter.format(this.props.dashboard.anulaciones);
    const height = 140;
    const itemWitdh = 4;
    return (
      <Fragment>
        <Grid container spacing={8}>
          <Grid item xs={itemWitdh}>
              <Bar
              data={chartModel.ventasAnuales.data}
              height={height}
              options={chartModel.ventasAnuales.options} 
              />
          </Grid>
          <Grid item xs={itemWitdh}>
              <Bar
              data={chartModel.mozoMes.data}
              height={height}
              options={chartModel.mozoMes.options}
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
              <Anulaciones anulaciones={anulaciones}/>
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
          <Grid item xs={3}>
            <DashboardCard card={cardModel.produccionDia} />
          </Grid>
          <Grid item xs={3}>
            <DashboardCard card={cardModel.paxDia} />
          </Grid>
          <Grid item xs={3}>
            <DashboardCard card={cardModel.ticketPromedioDia} />
          </Grid>
          <Grid item xs={3}>
            <DashboardCard card={cardModel.ventaDia} />
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
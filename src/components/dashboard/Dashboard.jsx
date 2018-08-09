import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HorizontalBar, Bar, Radar, Pie } from 'react-chartjs-2'; // eslint-disable-line object-curly-newline
import PropTypes from 'prop-types';
import DashboardCard from './DashboardCard';
import Anulaciones from './Anulaciones';

const Dashboard = ({ chartModel, anulaciones, cardModel }) => {
  const height = 140;
  const chartWidth = {
    lg: 4, xl: 4, md: 6, xs: 12, sm: 12,
  };
  const cardWidth = {
    lg: 3, xl: 3, md: 6, xs: 12, sm: 12,
  };

  return (
    <Grid container spacing={8}>
      <Grid item {...chartWidth}>
        <Bar
          data={chartModel.ventasAnuales.data}
          height={height}
          options={chartModel.ventasAnuales.options}
        />
      </Grid>
      <Grid item {...chartWidth}>
        <HorizontalBar
          data={chartModel.mozoDelMes.data}
          height={height}
          options={chartModel.mozoDelMes.options}
        />
      </Grid>
      <Grid item {...chartWidth}>
        <HorizontalBar
          data={chartModel.platosMasVendidosMes.data}
          height={height}
          options={chartModel.platosMasVendidosMes.options}
        />
      </Grid>
      <Grid item {...chartWidth}>
        <Anulaciones anulaciones={anulaciones} />
      </Grid>
      <Grid item {...chartWidth}>
        <Radar
          data={chartModel.anulacionesDelMes.data}
          height={height}
          options={chartModel.anulacionesDelMes.options}
        />
      </Grid>
      <Grid item {...chartWidth}>
        <Pie
          data={chartModel.productosVendidosMes.data}
          height={height}
          options={chartModel.productosVendidosMes.options}
        />
      </Grid>
      <Grid item {...cardWidth}>
        <DashboardCard card={cardModel.produccionDia} />
      </Grid>
      <Grid item {...cardWidth}>
        <DashboardCard card={cardModel.paxDia} />
      </Grid>
      <Grid item {...cardWidth}>
        <DashboardCard card={cardModel.ticketPromedioDia} />
      </Grid>
      <Grid item {...cardWidth}>
        <DashboardCard card={cardModel.ventaDia} />
      </Grid>
    </Grid>
  );
};

Dashboard.propTypes = {
  chartModel: PropTypes.object.isRequired,
  anulaciones: PropTypes.array.isRequired,
  cardModel: PropTypes.object.isRequired,
};

export default Dashboard;

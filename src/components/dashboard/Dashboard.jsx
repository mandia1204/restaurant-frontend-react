import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Bar, Radar, Pie } from 'react-chartjs-2';
import DashboardCard from './DashboardCard';
import Anulaciones from './Anulaciones';
import PropTypes from 'prop-types';

const Dashboard = ({chartModel, anulaciones, cardModel}) => {
    const height = 140;
    const itemWitdh = 4;
    
    return (
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
    );
};

Dashboard.propTypes = {
    chartModel: PropTypes.object.isRequired,
    anulaciones: PropTypes.array.isRequired,
    cardModel: PropTypes.object.isRequired
  };

export default Dashboard;
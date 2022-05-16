import React from 'react';
import Table from '@mui/material/Table';
import { SxProps } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Forecast } from '../../../types/components/Weather';

const styles: Record<string, SxProps> = {
  root: {
    width: '100%',
    mt: 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    backgroundColor: 'secondary.main',
  },
  tableHeader: {
    backgroundColor: 'secondary.dark',
  },
  tableHeaderCell: {
    color: 'white',
  },
};

interface Props {
  forecasts: Forecast[];
}

function WeatherList({ forecasts } : Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={styles.tableHeader}>
          <TableRow>
            <TableCell sx={styles.tableHeaderCell}>Date</TableCell>
            <TableCell sx={styles.tableHeaderCell}>Temp. (C)</TableCell>
            <TableCell sx={styles.tableHeaderCell}>Temp. (F)</TableCell>
            <TableCell sx={styles.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forecasts.map((forecast: Forecast) => (
            <TableRow key={forecast.id}>
              <TableCell>{forecast.date}</TableCell>
              <TableCell>{forecast.temperatureC}</TableCell>
              <TableCell>{forecast.temperatureF}</TableCell>
              <TableCell>
                <img
                  style={{ width: '32px' }}
                  src={`https://www.metaweather.com/static/img/weather/${forecast.stateAbbr}.svg`}
                  alt={forecast.state}
                  title={forecast.state}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}

export default WeatherList;

import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Grid';
import { SxProps } from '@mui/material/styles';
import { years, months } from '../../util/Constants';
import DashboardFilters from '../../types/DashboardFilters';

const selectStyle: SxProps = {
  marginRight: '10px',
  backgroundColor: 'white',
};

const onYearChange = (filtersChange: (f: DashboardFilters) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
  filtersChange({ year: parseInt(e.target.value, 10) });
};

const onMonthChange = (filtersChange: (f: DashboardFilters) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
  filtersChange({ month: parseInt(e.target.value, 10) });
};

interface Props {
  values: DashboardFilters;
  filtersChange: (f: DashboardFilters) => void;
}

function Filters({ values, filtersChange }: Props) {
  return (
    <Grid item>
      <NativeSelect id="year-filter" value={values.year} onChange={onYearChange(filtersChange)} sx={selectStyle}>
        {years.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </NativeSelect>
      <NativeSelect id="month-filter" value={values.month} onChange={onMonthChange(filtersChange)} sx={selectStyle}>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.name}
          </option>
        ))}
      </NativeSelect>
    </Grid>
  );
}

export default Filters;

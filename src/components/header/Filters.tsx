import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { years, months } from '../../util/Constants';
import DashboardFilters from '../../types/DashboardFilters';

const styles = createStyles({
  select: {
    marginRight: '10px',
    backgroundColor: 'white',
  },
});

const onYearChange = (filtersChange: (f: DashboardFilters) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
  filtersChange({ year: parseInt(e.target.value, 10) });
};

const onMonthChange = (filtersChange: (f: DashboardFilters) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
  filtersChange({ month: parseInt(e.target.value, 10) });
};

interface Props extends WithStyles<typeof styles>{
  values: DashboardFilters;
  filtersChange: (f: DashboardFilters) => void;
}

function Filters({ classes, values, filtersChange }: Props) {
  return (
    <Grid item>
      <NativeSelect id="year-filter" value={values.year} onChange={onYearChange(filtersChange)} className={classes.select}>
        {years.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </NativeSelect>
      <NativeSelect id="month-filter" value={values.month} onChange={onMonthChange(filtersChange)} className={classes.select}>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.name}
          </option>
        ))}
      </NativeSelect>
    </Grid>
  );
}

export default withStyles(styles)(Filters);

import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import { years, months } from '../../util/Constants';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const styles = {
    select: {
        marginRight: '10px',
        backgroundColor: 'white'
    }
};

const onYearChange = (filtersChange) => (e) => {
    filtersChange({year: parseInt(e.target.value)});
};

const onMonthChange = (filtersChange) => (e) => {
    filtersChange({month: parseInt(e.target.value)});
};

const Filters = ({classes, values, filtersChange}) => (
    <Grid item>
        <NativeSelect id="year-filter" value={values.year} onChange={onYearChange(filtersChange)} className= {classes.select}>
            {years.map(val => <option key={val} value={val}>{val}</option> )}
        </NativeSelect>
        <NativeSelect id="month-filter" value={values.month} onChange={onMonthChange(filtersChange)}  className= {classes.select}>
            {months.map(month => <option key={month.value} value={month.value}>{month.name}</option> )}
        </NativeSelect>
    </Grid>
);

Filters.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.object.isRequired,
    filtersChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Filters);
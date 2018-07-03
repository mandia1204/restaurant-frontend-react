import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import { years, months } from '../../util/Constants';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    select: {
        marginRight: '10px',
        backgroundColor: 'white'
    }
};

const onYearChange = (filtersChange) => (e) => {
    filtersChange({year: e.target.value});
};

const onMonthChange = (filtersChange) => (e) => {
    filtersChange({month: e.target.value});
};

const Filters = ({classes, filtersChange}) => (
    <div>
        <NativeSelect id="year-filter" onChange={onYearChange(filtersChange)} className= {classes.select}>
            {years.map(val => <option key={val} value={val}>{val}</option> )}
        </NativeSelect>
        <NativeSelect id="month-filter" onChange={onMonthChange(filtersChange)}  className= {classes.select}>
            {months.map(month => <option key={month.value} value={month.value}>{month.name}</option> )}
        </NativeSelect>
    </div>
);

Filters.propTypes = {
    classes: PropTypes.object.isRequired,
    filtersChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Filters);
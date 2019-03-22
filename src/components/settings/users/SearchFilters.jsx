import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const SearchFilters = (props) => {
  const {
    classes, userNameFilter, isAdminFilter, onChange,
  } = props;
  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container spacing={24}>
        <Grid item xs={7}>
          <TextField
            name="userNameFilter"
            onChange={onChange}
            value={userNameFilter}
            fullWidth
            label="User Name"
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          Is Admin
          <Checkbox name="isAdminFilter" checked={isAdminFilter} onChange={onChange} />
        </Grid>
      </Grid>
    </div>
  );
};

SearchFilters.propTypes = {
  classes: PropTypes.object.isRequired,
  userNameFilter: PropTypes.string.isRequired,
  isAdminFilter: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchFilters);

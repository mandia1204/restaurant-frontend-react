import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const SearchFilters = (props) => {
  const { classes, userNameFilter, onChange } = props;
  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container spacing={24}>
        <Grid item xs={8}>
          <TextField name="userNameFilter" onChange={onChange} value={userNameFilter} fullWidth label="User Name" margin="normal" />
        </Grid>
        <Grid item xs={4}>
          <Fab size="small" color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

SearchFilters.propTypes = {
  classes: PropTypes.object.isRequired,
  userNameFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchFilters);

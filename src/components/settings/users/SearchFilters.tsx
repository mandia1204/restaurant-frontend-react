import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
  userNameFilter: string;
  isAdminFilter: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilters = (props: Props) => {
  const { classes, userNameFilter, isAdminFilter, onChange } = props;
  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container spacing={10}>
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

export default withStyles(styles)(SearchFilters);

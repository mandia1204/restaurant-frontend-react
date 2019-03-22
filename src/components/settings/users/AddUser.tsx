import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

const AddUser = ({ classes }: WithStyles<typeof styles>) => (
  <div className={classes.root}>
    <Fab size="small" color="primary" aria-label="Add">
      <AddIcon />
    </Fab>
  </div>
);

export default withStyles(styles)(AddUser);

import React from 'react';
import { withStyles, createStyles, WithStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

function AddUser({ classes }: WithStyles<typeof styles>) {
  return (
    <div className={classes.root}>
      <Fab size="small" color="primary" aria-label="Add">
        <Link to="/settings/users/manage">
          <AddIcon />
        </Link>
      </Fab>
    </div>
  );
}

export default withStyles(styles)(AddUser);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const AddUser = (props) => {
  const {
    classes,
  } = props;
  return (
    <div className={classes.root}>
      <Fab size="small" color="primary" aria-label="Add">
        <AddIcon />
      </Fab>
    </div>
  );
};

AddUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddUser);

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import injectSheet from 'react-jss';
import * as colors from '@material-ui/core/colors';

const styles = {
  icon: {
    color: '#fff',
  },
  avatar: {
    backgroundColor: ({ anulacion }) => ((anulacion && anulacion.color)
      ? colors[anulacion.color][400]
      : colors.amber),
  },
};

const AnulacionesItem = ({ classes, anulacion }) => (
  <ListItem>
    <Avatar className={classes.avatar}>
      { <anulacion.icon className={classes.icon} /> }
    </Avatar>
    <ListItemText primary={anulacion.observacion} secondary={anulacion.fecha} />
  </ListItem>
);

AnulacionesItem.propTypes = {
  classes: PropTypes.object.isRequired,
  anulacion: PropTypes.object.isRequired,
};

export default injectSheet(styles)(AnulacionesItem);

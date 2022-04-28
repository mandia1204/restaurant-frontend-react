import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import injectSheet from 'react-jss';
import Anulacion from '../../types/Anulacion';
import Colors from '../../types/Colors';

interface Props {
  classes: any;
  anulacion: Anulacion;
}
const styles = {
  icon: {
    color: '#fff',
  },
  avatar: {
    backgroundColor: ({ anulacion }: {anulacion: Anulacion}) => ((anulacion && anulacion.color)
      ? Colors[anulacion.color][400] : Colors.amber[400]),
  },
};

function AnulacionesItem({ classes, anulacion }: Props) {
  return (
    <ListItem>
      <Avatar className={classes.avatar}>
        <anulacion.icon className={classes.icon} />
      </Avatar>
      <ListItemText primary={anulacion.observacion} secondary={anulacion.fecha} />
    </ListItem>
  );
}

export default injectSheet(styles)(AnulacionesItem);

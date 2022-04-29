import React, { Fragment } from 'react';
import { withStyles, createStyles, WithStyles } from '@mui/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AnulacionesItem from './AnulacionesItem';
import Anulacion from '../../types/Anulacion';

const styles = createStyles({
  root: {
    backgroundColor: 'white',
  },
  list: {
    maxHeight: '350px',
    overflow: 'auto',
  },
});

interface Props extends WithStyles<typeof styles> {
  anulaciones: Anulacion[];
}

function Anulaciones({ classes, anulaciones }: Props) {
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {anulaciones.map((a, k) => (
        // eslint-disable-next-line react/no-array-index-key
          <Fragment key={k}>
            <AnulacionesItem anulacion={a} />
            <Divider />
          </Fragment>
        ))}
      </List>
    </div>
  );
}

export default withStyles(styles)(Anulaciones);

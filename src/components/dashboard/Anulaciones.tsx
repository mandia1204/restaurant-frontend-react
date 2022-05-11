import React, { Fragment } from 'react';
import { SxProps } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AnulacionesItem from './AnulacionesItem';
import Anulacion from '../../types/Anulacion';

const styles: Record<string, SxProps> = {
  root: {
    backgroundColor: 'white',
  },
  list: {
    maxHeight: '350px',
    overflow: 'auto',
  },
};

interface Props {
  anulaciones: Anulacion[];
}

function Anulaciones({ anulaciones }: Props) {
  return (
    <Box sx={styles.root}>
      <List sx={styles.list}>
        {anulaciones.map((a, k) => (
        // eslint-disable-next-line react/no-array-index-key
          <Fragment key={k}>
            <AnulacionesItem anulacion={a} />
            <Divider />
          </Fragment>
        ))}
      </List>
    </Box>
  );
}

export default Anulaciones;

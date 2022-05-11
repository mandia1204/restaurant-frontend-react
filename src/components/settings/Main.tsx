import React from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';
import Content from './Content';
import Menu from './Menu';

const styles: Record<string, SxProps> = {
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'background.default',
    p: 3,
    minWidth: 0, // So the Typography noWrap works
  },
};

function Main() {
  return (
    <Box sx={styles.root}>
      <Menu />
      <Content styles={styles.content} />
    </Box>
  );
}

export default Main;

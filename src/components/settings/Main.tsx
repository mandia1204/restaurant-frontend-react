import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Content from './Content';
import Menu from './Menu';

const styles = ({ spacing, palette }: Theme) => createStyles({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: palette.background.default,
    padding: spacing() * 3,
    minWidth: 0, // So the Typography noWrap works
  },
});

function Main(props: WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Menu />
      <Content className={classes.content} />
    </div>
  );
}

export default withStyles(styles)(Main);

import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Content from './Content';
import Menu from './Menu';

const styles = ({ spacing, palette }: Theme) => createStyles({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: palette.background.default,
    padding: spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
});

interface Props extends WithStyles<typeof styles> {
}

const Main = (props: Props) => {
  const { classes } = props;
  const contentProps = { className: classes.content };
  return (
    <div className={classes.root}>
      <Menu />
      <Content {...contentProps} />
    </div>
  );
};

export default withStyles(styles)(Main);

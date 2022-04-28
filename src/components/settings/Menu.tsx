import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import ListItemLink from '../routing/ListItemLink';

const drawerWidth = 200;
const styles = createStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
});

function Menu(props: WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List component="nav">
        <ListItemLink primary="Users" icon={<PersonIcon />} to="/settings/users" />
        <ListItemLink primary="Groups" icon={<GroupIcon />} to="/settings/groups" />
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Menu);

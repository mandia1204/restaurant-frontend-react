import React from 'react';
import Drawer from '@mui/material/Drawer';
import { withStyles, createStyles, WithStyles } from '@mui/styles';
import List from '@mui/material/List';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
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

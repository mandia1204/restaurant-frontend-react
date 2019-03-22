import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

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

interface Props extends WithStyles<typeof styles> {
}

const Menu = (props: Props) => {
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
        {/* eslint-disable-next-line */}
        <ListItem component={({ innerRef, ...lprops }) => <Link {...lprops} to="/settings/users" />} button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        {/* eslint-disable-next-line */}
        <ListItem component={({ innerRef, ...lprops }) => <Link {...lprops} to="/settings/groups" />} button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Menu);

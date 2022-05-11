import React from 'react';
import Drawer from '@mui/material/Drawer';
import { SxProps } from '@mui/material/styles';
import List from '@mui/material/List';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ListItemLink from '../routing/ListItemLink';

const drawerWidth = 200;

const styles: Record<string, SxProps> = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
};

function Menu() {
  return (
    <Drawer
      sx={styles.drawer}
      variant="permanent"
      PaperProps={{
        sx: styles.drawerPaper,
      }}
    >
      <List component="nav">
        <ListItemLink primary="Users" icon={<PersonIcon />} to="/settings/users" />
        <ListItemLink primary="Groups" icon={<GroupIcon />} to="/settings/groups" />
      </List>
    </Drawer>
  );
}

export default Menu;

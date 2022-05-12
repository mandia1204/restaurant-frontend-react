import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { SxProps } from '@mui/material/styles';
import List from '@mui/material/List';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector, useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ListItemLink from '../routing/ListItemLink';
import { selectSettingsMenuChanged } from '../../state/selectors';
import { updateSettingsMenu } from '../../state/reducers/EventsSlice';

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

const selectedItemStyle: SxProps = {
  backgroundColor: 'primary.light',
};

function Menu() {
  const selectedItem = useSelector(selectSettingsMenuChanged);
  const dispatch = useDispatch();

  const itemClick = (itemName: string) => () => {
    dispatch(updateSettingsMenu({ payload: itemName }));
  };

  useEffect(() => () => {
    dispatch(updateSettingsMenu({ payload: 'Settings' }));
  }, []);

  return (
    <Drawer
      sx={styles.drawer}
      variant="permanent"
      PaperProps={{
        sx: styles.drawerPaper,
      }}
    >
      <List component="nav">
        <ListItemLink sx={selectedItem === 'Settings' ? selectedItemStyle : null} onClick={itemClick('Settings')} primary="Settings" icon={<HomeIcon />} to="/settings" />
        <ListItemLink sx={selectedItem === 'Users' ? selectedItemStyle : null} onClick={itemClick('Users')} primary="Users" icon={<PersonIcon />} to="/settings/users" />
        <ListItemLink sx={selectedItem === 'Groups' ? selectedItemStyle : null} onClick={itemClick('Groups')} primary="Groups" icon={<GroupIcon />} to="/settings/groups" />
      </List>
    </Drawer>
  );
}

export default Menu;

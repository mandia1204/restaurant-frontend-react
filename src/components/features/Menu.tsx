import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { SxProps } from '@mui/material/styles';
import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
import BookIcon from '@mui/icons-material/Book';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
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
    dispatch(updateSettingsMenu({ payload: 'Debounce' }));
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
        <ListItemLink sx={selectedItem === 'Debounce' ? selectedItemStyle : null} onClick={itemClick('Debounce')} primary="Debounce" icon={<BookIcon />} to="/features/debounce" />
        <ListItemLink sx={selectedItem === 'Weather' ? selectedItemStyle : null} onClick={itemClick('Weather')} primary="Weather" icon={<WbSunnyIcon />} to="/features/weather" />
      </List>
    </Drawer>
  );
}

export default Menu;

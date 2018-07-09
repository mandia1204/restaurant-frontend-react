import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const Menu = () => {
    return (
        <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>
    );
};

export default Menu;
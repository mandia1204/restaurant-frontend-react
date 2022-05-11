import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';

function AddUser() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Fab size="small" color="primary" aria-label="Add">
        <Link to="/settings/users/manage">
          <AddIcon />
        </Link>
      </Fab>
    </Box>
  );
}

export default AddUser;

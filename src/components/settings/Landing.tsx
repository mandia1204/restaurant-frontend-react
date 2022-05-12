import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { selectUsers } from '../../state/selectors';
import { fetchUsers } from '../../state/reducers/UsersSlice';

const styles: Record<string, SxProps> = {
  panelMain: {
    borderRadius: '4px',
    border: '1px solid #337ab7',
  },
  panelHeader: {
    backgroundColor: '#337ab7',
    p: 1,
  },
  panelBody: {
    p: 1,
  },
  list: {
    maxHeight: '350px',
    overflow: 'auto',
  },
};

function Landing() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);
  const admins = users.filter((u) => u.isAdmin);
  return (
    <Box>
      <Typography variant="h5" gutterBottom component="div">
        Settings
      </Typography>
      <Box sx={styles.panelMain}>
        <Box sx={styles.panelHeader}>Admin List</Box>
        <Box sx={styles.panelBody}>
          <Box component="ul">
            {admins.map((u) => (<li key={u.userName}>{u.name}({u.userName})</li>))}
          </Box>
        </Box>
      </Box>
    </Box>

  );
}

export default Landing;

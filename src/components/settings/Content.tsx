import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';
import PrivateRoute from '../routing/PrivateRoute';
import UsersMainContainer from './users/UsersMainContainer';
import ManageUserContainer from './users/manage/ManageUserContainer';
import Groups from './groups/Main';

function Content({ styles }: {styles: SxProps}) {
  return (
    <Box component="main" sx={{ ...styles, padding: '5px 10px 0 10px' }}>
      <Routes>
        <Route
          path="/users"
          element={(
            <PrivateRoute>
              <UsersMainContainer />
            </PrivateRoute>
          )}
        />
        <Route
          path="/users/manage"
          element={(
            <PrivateRoute>
              <ManageUserContainer />
            </PrivateRoute>
          )}
        />
        <Route
          path="/users/manage/:userId"
          element={(
            <PrivateRoute>
              <ManageUserContainer />
            </PrivateRoute>
          )}
        />
        <Route
          path="/groups"
          element={(
            <PrivateRoute>
              <Groups />
            </PrivateRoute>
          )}
        />
      </Routes>
    </Box>
  );
}

export default Content;

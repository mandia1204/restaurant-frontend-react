import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';
import Debounce from './debounce/Debounce';
import { Weather } from './weather/Weather';

function Content({ styles }: {styles: SxProps}) {
  return (
    <Box component="main" sx={{ ...styles, padding: '5px 10px 0 10px' }}>
      <Routes>
        <Route
          path="/debounce"
          element={(
            <Debounce />
          )}
        />
        <Route
          path="/weather"
          element={(
            <Weather />
          )}
        />
      </Routes>
    </Box>
  );
}

export default Content;

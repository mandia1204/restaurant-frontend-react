import { Box, Typography } from '@mui/material';
import React from 'react';

function Home() {
  return (
    <Box sx={{ color: 'primary.main', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom component="div">
        Welcome to the jungle!!!
      </Typography>
    </Box>

  );
}

export default Home;

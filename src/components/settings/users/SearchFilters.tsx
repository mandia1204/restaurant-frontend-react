import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';

interface Props {
  userNameFilter: string;
  isAdminFilter: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchFilters(props: Props) {
  const { userNameFilter, isAdminFilter, onChange } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid alignItems="flex-end" container spacing={10}>
        <Grid item xs={7}>
          <TextField
            name="userNameFilter"
            onChange={onChange}
            value={userNameFilter}
            fullWidth
            label="User Name"
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          Is Admin
          <Checkbox name="isAdminFilter" checked={isAdminFilter} onChange={onChange} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchFilters;

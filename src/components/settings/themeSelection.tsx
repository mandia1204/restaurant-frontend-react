import React from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import { setTheme } from '../../state/reducers/AppSlice';
import { selectTheme } from '../../state/selectors';

const themeList = [
  {
    name: 'Light', value: 'light',
  },
  {
    name: 'Dark', value: 'dark',
  },
];

export default function themeSelection() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTheme(event.target.value));
  };

  return (
    <Box component="ul">
      { themeList.map((t) => (
        <Box component="li" key={t.name}>
          <Radio checked={theme === t.value} name="theme-radio" onChange={handleChange} value={t.value} />
          <span>{t.name}</span>
        </Box>
      ))}
    </Box>
  );
}

import { createTheme, Theme } from '@mui/material/styles';
import { red, blue, grey, blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[200],
    },
    secondary: {
      main: grey.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      light: blueGrey[200],
    },
    secondary: {
      main: blueGrey.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

const themeMap : Record<string,Theme> = {
  light: theme,
  dark: darkTheme
}

export default themeMap;

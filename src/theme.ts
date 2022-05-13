import { createTheme, Theme } from '@mui/material/styles';
import { red, blue, grey, blueGrey, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: blue[100],
      main: blue[300],
      dark: blue[500],
    },
    secondary: {
      light: grey[100],
      main: grey[300],
      dark: grey[500],
    },
    error: {
      main: red.A400,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      light: blueGrey[100],
      main: blueGrey[300],
      dark: blueGrey[500],
    },
    secondary: {
      light: orange[100],
      main: orange[300],
      dark: orange[500],
    },
    error: {
      main: red.A400,
    },
  },
});

const themeMap : Record<string, Theme> = {
  light: theme,
  dark: darkTheme,
};

export default themeMap;

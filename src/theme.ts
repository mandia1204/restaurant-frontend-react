import { createTheme } from '@mui/material/styles';
import { red, blue, grey } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[300],
    },
    secondary: {
      main: grey.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

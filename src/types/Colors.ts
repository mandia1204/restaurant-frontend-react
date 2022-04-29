import { Color } from '@mui/material';
import * as colors from '@mui/material/colors';

interface ColorsMap {
  [colorName: string]: Color;
}

const Colors: ColorsMap = {
  amber: colors.amber,
  cyan: colors.cyan,
  blue: colors.blue,
  blueGrey: colors.blueGrey,
  brown: colors.brown,
  deepOrange: colors.deepOrange,
  deepPurple: colors.deepPurple,
  green: colors.green,
  grey: colors.grey,
  indigo: colors.indigo,
  lightBlue: colors.lightBlue,
  lightGreen: colors.lightGreen,
  lime: colors.lime,
  orange: colors.orange,
  pink: colors.pink,
  purple: colors.purple,
  red: colors.red,
  teal: colors.teal,
  yellow: colors.yellow,
};

export default Colors;

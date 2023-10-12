import {themeIcons} from './assets/icons/themeIcons';

const color = {
  // primary: "#38a169",
  primary: '#61DBFB',
  secondary: '#fff',
  tertiary: '#ccc',
};
const borderRadius = {
  primary: '0.25rem',
};

export const theme = {
  color,
  borderRadius,
  icons: themeIcons,
} as const;

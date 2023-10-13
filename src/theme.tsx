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
const background = {
  primary: 'gray.700',
  secondary: 'gray.700',
};

export const theme = {
  color,
  borderRadius,
  icons: themeIcons,
  background,
} as const;

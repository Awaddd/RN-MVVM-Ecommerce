import { human } from 'react-native-typography';

export const colors = {
  primary: '#004fff',
  danger: '#f2385a',
  accent: '#FF007F',
  dark: '#0d1321',
  gray: '#f5f5f5',
  gray2: '#3A4454',
  light: '#fafafa',
  disabled: '#e5e5e5',
  white: '#fff',
  black: '#000',
  yellow: '#fcba03',
};

export const spacing = {
  xs: 4,
  sm: 7,
  md: 14,
  rl: 24,
  lg: 30,
  xl: 45,
  '2xl': 60,
  '3xl': 85,
};

export const HUMAN = [
  { name: 'body', style: human.body },
  { name: 'h1', style: human.largeTitle },
  { name: 'h2', style: human.title1 },
  { name: 'h3', style: human.title2 },
  { name: 'h4', style: human.title3 },
  { name: 'bold', style: human.headline },
  { name: 'callout', style: human.callout },
  { name: 'footnote', style: human.footnote },
  { name: 'caption', style: human.caption2 },
];

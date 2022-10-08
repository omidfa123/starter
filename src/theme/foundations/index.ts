import { theme } from '@chakra-ui/react';

export const colors = {
  primary: {
    '50 ': '#FFF5E5',
    '100': '#FFE2B8',
    '200': '#FFD08A',
    '300': '#FFBE5C',
    '400': '#FFAB2E',
    '500': '#FF9900',
    '600': '#CC7A00',
    '700': '#995C00',
    '800': '#663D00',
    '900': '#331F00',
  },
  secondary: {
    '50 ': '#ECE5FF',
    '100': '#CAB8FF',
    '200': '#A88AFF',
    '300': '#865CFF',
    '400': '#642EFF',
    '500': '#4200FF',
    '600': '#3400CC',
    '700': '#270099',
    '800': '#1A0066',
    '900': '#0D0033',
  },

  primaryGradient: {
    one: '#FF5E5E',
    two: '#FFA826',
  },
  secondaryGradient: {
    one: '#A88BEB',
    two: '#F8CEEC ',
  },
  dangerGradient: {
    one: '#F08EFC',
    two: '#EE5166',
  },
  bgGradient: {
    one: '#FFF5F7',
    two: '#F5F9FF',
  },

  text: '#15121D',
  boxBg: '#F5F5F5',
  description: '#ADADAD',
  disableButton: '#D9D9D9',
  disableText: '#545456',
  disableUl: '#B8B8B8',
  discount: '#ff5e5e',
  ratings: '#FFC700',
  comparison: '#98AFFF',
  break: '#AFAFAF',
  divider: '#eee',
};
export const fonts = {
  body: `IranSansXV,${theme.fonts.body}`,
  heading: `IranSansXV,${theme.fonts.heading}`,
};
export const fontSizes = {
  '10': '0.625rem',
  '11': '0.688rem',
  '12': '0.75rem',
  '13': '0.813rem',
  '14': '0.875rem',
  '15': '0.938rem',
  '16': '1rem',
  '18': '1.125rem',
  '20': '1.25rem',
  '24': '1.5rem',
  '32': '2rem',
  '36': '2.25rem',
  '40': '2.5rem',
};
export const breakpoints = {
  sm: '24em',
  md: '50em',
  lg: '80em',
};
export const config = {
  cssVarPrefix: 'artamart',
  // initialColorMode: 'dark',
  // useSystemColorMode: 'true',
};

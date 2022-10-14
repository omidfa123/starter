import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    rounded: 12,
  },
  variants: {
    smallNav: {
      rounded: '16px',
      w: '77px',
      h: '33px',
      fontSize: 14,
      fontWeight: '500',
      bgColor: 'primary.500',
    },
  },
};

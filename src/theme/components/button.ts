import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { theme } from '@chakra-ui/react';
export const Button: ComponentStyleConfig = {
  variants: {
    smallNav: {
      rounded: '16px',
      w: '77px',
      h: '33px',
      fontSize: 14,
      fontWeight: '500',
      bgColor: 'primary.500',
    },
    withShadow: props => ({
      ...theme.components.Button.variants?.solid(props),
      fontWeight: '500',
      rounded: '16px',
      border: '2px solid #15121D',
      boxShadow: '3px 4px 0px #15121D',
    }),
  },
  defaultProps: {
    variant: 'withShadow',
  },
};

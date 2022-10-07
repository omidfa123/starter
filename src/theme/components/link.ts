import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Link: ComponentStyleConfig = {
  variants: {
    list: {
      '&:hover': { textDecoration: 'none' },
    },
    link: {
      '&:hover': { textDecoration: 'underline' },
    },
  },
  defaultProps: {
    variant: 'list',
  },
};

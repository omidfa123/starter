import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Link: ComponentStyleConfig = {
  variants: {
    list: {
      '&:hover': { textDecoration: 'none', color: 'text' },
    },
    link: {
      '&:hover': { textDecoration: 'underline' },
    },
  },
  defaultProps: {
    variant: 'list',
  },
};

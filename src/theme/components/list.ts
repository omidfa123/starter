import type { ComponentStyleConfig } from '@chakra-ui/react';

export const List: ComponentStyleConfig = {
  parts: ['item'],
  baseStyle: {
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
  },
};

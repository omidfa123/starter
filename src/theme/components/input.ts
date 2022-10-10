import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Input: ComponentStyleConfig = {
  parts: ['field'],
  variants: {
    outline: {
      field: {
        fontSize: 14,
        height: '42px',
        rounded: 12,
        bgColor: '#fff',
        borderColor: 'transparent',
        _focusVisible: { borderColor: 'text', boxShadow: '0 0 0 1px #15121D ' },
      },
    },
  },
};

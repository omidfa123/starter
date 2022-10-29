import type { ComponentStyleConfig } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';
export const Input: ComponentStyleConfig = {
  parts: ['field'],

  variants: {
    'gray-filled': props => ({
      ...theme.components.Input.variants?.filled(props),
      field: {
        ...theme.components.Input.variants?.filled(props).field,
        bgColor: 'boxBg',
        rounded: '12px',
        px: '12px',
        fontSize: '14px',
      },
    }),
    'white-filled': props => ({
      ...theme.components.Input.variants?.filled(props),
      field: {
        ...theme.components.Input.variants?.filled(props).field,

        fontSize: 14,
        height: '42px',
        rounded: 12,
        bgColor: '#fff',
        _focusVisible: { borderColor: 'text', boxShadow: '0 0 0 1px #15121D ' },
      },
    }),
  },
  defaultProps: {
    variant: 'gray-filled',
  },
};

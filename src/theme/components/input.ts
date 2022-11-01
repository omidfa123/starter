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
        border: '1.5px solid transparent',
        rounded: 12,
        bgColor: '#fff',
        _focusVisible: {
          borderColor: 'text',
          border: '1.5px solid',
          boxShadow: '0',
        },
        _hover: {
          bgColor: 'white',
          border: '1.5px solid',
          borderColor: 'text',
        },
        _invalid: {
          border: '1.5px solid',
          borderColor: 'red.500',
        },
        _autofill: {
          WebkitBoxShadow: '0 0 0px 30px #fff inset',
        },
      },
    }),
  },
  defaultProps: {
    variant: 'gray-filled',
  },
};

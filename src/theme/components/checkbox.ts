import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Checkbox: ComponentStyleConfig = {
  parts: ['label', 'control', 'icon'],
  baseStyle: {
    control: {
      w: '19px',
      h: '19px',
      borderColor: 'text',
    },
    icon: {
      fontSize: '14px',
    },
  },
  sizes: {
    lg: {
      label: {
        fontSize: 13,
        w: 'max-content',
      },
    },
  },
  defaultProps: {
    size: 'lg',
  },
};

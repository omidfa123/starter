import type { ComponentStyleConfig } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';
export const Accordion: ComponentStyleConfig = {
  parts: ['root', 'container', 'button', 'panel', 'icon'],

  variants: {
    filter: props => ({
      ...theme.components.Accordion.baseStyle,
      container: {
        ...theme.components.Accordion.baseStyle?.container,
        border: 'none',
      },
      button: {
        ...theme.components.Accordion.baseStyle?.button,
        px: '0',
        _active: { bgColor: 'white' },
        _hover: { bgColor: 'white' },
      },
      panel: {
        ...theme.components.Accordion.baseStyle?.panel,
        px: '0',
        bgColor: '#F5F5F5',
      },
    }),
  },
};

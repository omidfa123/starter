import type { ComponentStyleConfig } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';

export const Tabs: ComponentStyleConfig = {
  parts: ['tabpanel', 'tab'],

  variants: {
    'half-rounded': props => ({
      ...theme.components.Tabs.variants?.['solid-rounded'](props),
      tab: {
        ...theme.components.Tabs.variants?.['solid-rounded'](props).tab,
        borderBottomRadius: 10,
        bgColor: 'white',
        h: '49px',
        minW: 'max-content',
        px: 6,
        color: 'disableUl',
        _selected: {
          bgColor: 'primary.500',
          color: 'black',
        },
      },
    }),
  },
};

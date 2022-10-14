import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Tabs: ComponentStyleConfig = {
  parts: ['tabpanel', 'tab'],
  baseStyle: {
    tab: {
      bgColor: 'white',
    },
  },
  variants: {
    'solid-rounded': {
      tab: {
        borderBottomRadius: 10,
        h: '49px',
        minW: 'max-content',
        px: 6,
        color: 'disableUl',
        _selected: {
          bgColor: 'primary.500',
          color: 'black',
          shadow: '0px 0px 4px rgba(255, 168, 38, 0.4)',
        },
      },
      tabpanel: {
        w: '100%',
        h: '100%',
      },
    },
  },
};

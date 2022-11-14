import type { ComponentStyleConfig } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';

export const Tabs: ComponentStyleConfig = {
  parts: ['tabpanel', 'tab', 'tablist'],

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
    'menu-line': props => ({
      ...theme.components.Tabs.variants?.line(props),
      tablist: {
        ...theme.components.Tabs.variants?.line(props).tablist,
        borderInlineEnd: '2px solid #eee',
        borderInlineStart: '0',
        minW: '152px',
        alignItems: 'start',
        gap: '4px',
      },
      tab: {
        ...theme.components.Tabs.variants?.line(props).tab,
        borderInlineEnd: '2px solid transparent',
        borderInlineStart: '0',
        marginInlineStart: '2px',
        fontSize: '14',
        fontWeight: '500',
        w: '100%',
        gap: '1',
        justifyContent: 'start',
        whiteSpace: 'nowrap',
        // p: '0  24px 24px 0',
        _selected: {
          color: 'secondary.500',
          borderColor: 'currentColor',
        },
      },
    }),
  },
};

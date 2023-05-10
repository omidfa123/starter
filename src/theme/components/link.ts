import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Link: ComponentStyleConfig = {
  variants: {
    list: {
      '&:hover': { textDecoration: 'none', color: 'primary.500' },
    },
    link: {
      '&:hover': { textDecoration: 'underline' },
    },
    btn: {
      fontSize: 20,
      fontWeight: '500',
      color: 'white',
      rounded: 16,
      h: 16,
      w: '286px',
      shadow: '0px 0px 16px rgba(255, 168, 38, 0.4)',
      bgColor: 'primary.500',
      display: 'grid',
      placeItems: 'center',
      '&:hover': {
        textDecoration: 'none',
        bgColor: 'primary.600',
      },
      '&:active': { transform: 'scale(.95 , .95)', bgColor: 'primary.700' },
    },
    btnOutline: {
      fontSize: 20,
      fontWeight: '500',
      color: 'primary.500',
      rounded: 16,
      h: 16,
      w: '286px',
      bgColor: 'transparent',
      display: 'grid',
      border: '1px',
      borderColor: 'primary.500',
      placeItems: 'center',
      '&:hover': {
        textDecoration: 'none',
        bgColor: 'primary.100',
        color: 'primary.600',
      },
      '&:active': { transform: 'scale(.95 , .95)' },
    },
  },
  defaultProps: {
    variant: 'list',
  },
};

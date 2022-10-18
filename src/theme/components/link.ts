import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Link: ComponentStyleConfig = {
  variants: {
    list: {
      '&:hover': { textDecoration: 'none', color: 'text' },
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
        bgColor: 'transparent',
        borderColor: 'primary.500',
        color: 'primary.500',
        boxShadow: 'none',
        border: '1px',
      },
      '&:active': { transform: 'scale(.95 , .95)' },
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
        bgColor: 'primary.500',
        shadow: '0px 0px 16px rgba(255, 168, 38, 0.4)',
        color: 'white',
        border: 'none',
      },
      '&:active': { transform: 'scale(.95 , .95)' },
    },
  },
  defaultProps: {},
};

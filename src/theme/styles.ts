export const styles = {
  global: (props: any) => ({
    'html , body': {
      minH: '100vh',
    },
    '#__next': {
      display: 'flex',
      flexDir: 'column',
      h: 'inherit',
    },
    body: {
      bgGradient: [
        'linear( white , white )',
        'linear(180deg, #FFF5F7 0%, #F5F9FF 100%)',
      ],
      color: 'text',
      fontFamily:
        'iransansx,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      bgRepeat: 'no-repeat',
      fontVariationSettings: "'rdot' 1",
    },
    input: { fontFeatureSettings: '"ss02"' },
    '@supports (font-variation-settings: normal)': {
      body: {
        fontFamily: 'var(--artamart-fonts-body)',
      },
    },
    '.chakra-alert > button': {
      right: 'unset',
      left: '1',
    },
    '.css-f3bt6g': {
      zIndex: '1 !important',
    },
  }),
};

export const textStyles = {
  regular10: {
    fontSize: '0.625rem',
    fontWeight: '400',
  },
  regular11: {
    fontSize: '0.688rem',
    fontWeight: '400',
  },
  regular12: {
    fontSize: '0.75rem',
    fontWeight: '400',
  },
  regular13: {
    fontSize: '0.813rem',
    fontWeight: '400',
  },
  regular14: {
    fontSize: '0.875rem',
    fontWeight: '400',
  },
  regular15: {
    fontSize: '0.938rem',
    fontWeight: '400',
  },
  regular16: {
    fontSize: '1rem',
    fontWeight: '400',
  },
  regular20: {
    fontSize: '1.25rem',
    fontWeight: '400',
  },
  regular24: {
    fontSize: '1.5rem',
    fontWeight: '400',
  },
  medium10: {
    fontSize: '0.625rem',
    fontWeight: '500',
  },
  medium11: {
    fontSize: '0.688rem',
    fontWeight: '500',
  },
  medium12: {
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  medium13: {
    fontSize: '0.813rem',
    fontWeight: '500',
  },
  medium14: {
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  medium15: {
    fontSize: '0.938rem',
    fontWeight: '500',
  },
  medium16: {
    fontSize: '1rem',
    fontWeight: '500',
  },
  medium20: {
    fontSize: '1.25rem',
    fontWeight: '500',
  },
  medium24: {
    fontSize: '1.5rem',
    fontWeight: '500',
  },
  bold24: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  bold32: {
    fontSize: '2rem',
    fontWeight: '700',
  },
  bold36: {
    fontSize: '2.25rem',
    fontWeight: '700',
  },
};

export const layerStyles = {
  container: {
    maxW: '1280px',
    mx: 'auto',
    px: [6, 20, 24, 28, 32],
  },
};

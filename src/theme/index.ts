import { layerStyles, textStyles, styles } from './styles';
import { colors, fonts, fontSizes, config } from './foundations/index';
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

//TODO add component , withDefaultColorScheme , withDefaultSize , withDefaultProps , withDefaultVariant

const overrides = {
  colors,
  fonts,
  fontSizes,
  config,
  styles,
  // layerStyles,
  textStyles,
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

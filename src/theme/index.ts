import { layerStyles, textStyles } from './styles';
import { colors, fonts, fontSizes, config } from './foundations/index';
import { extendTheme } from '@chakra-ui/react';

const overrides = {
  colors,
  fonts,
  fontSizes,
  config,
  // layerStyles,
  textStyles,
};

export default extendTheme(overrides);

import { Link } from './components/link';
import { Container } from './components/container';
import { Divider } from './components/divider';
import { List } from './components/list';
import { Button } from './components/button';
import { layerStyles, textStyles, styles } from './styles';
import {
  colors,
  fonts,
  fontSizes,
  config,
  breakpoints,
} from './foundations/index';
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

//TODO add component , withDefaultColorScheme , withDefaultSize , withDefaultProps , withDefaultVariant

const overrides = {
  colors,
  fonts,
  fontSizes,
  config,
  styles,
  // breakpoints,
  layerStyles,
  textStyles,
  components: {
    List,
    Button,
    Divider,
    Container,
    Link,
  },
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

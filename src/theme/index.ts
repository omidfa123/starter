import { Select } from './components/select';
import { Tabs } from './components/Tabs';
import { Checkbox } from './components/checkbox';
import { Input } from './components/input';
import { PinInput } from './components/pinInput';
import { Link } from './components/link';
import { Container } from './components/container';
import { Divider } from './components/divider';
import { List } from './components/list';
import { Button } from './components/button';
import { layerStyles, textStyles, styles } from './styles';
import { colors, fonts, fontSizes, config } from './foundations/index';
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const overrides = {
  colors,
  fonts,
  fontSizes,
  config,
  styles,
  layerStyles,
  textStyles,
  components: {
    List,
    Button,
    Divider,
    Container,
    Link,
    PinInput,
    Input,
    Checkbox,
    Tabs,
    Select,
  },
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

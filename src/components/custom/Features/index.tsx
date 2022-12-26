import {
  Box,
  Center,
  Highlight,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import {
  AskIcon,
  BoxesIcon,
  CoinIcon,
  HandShackIcon,
  StarOutLineIcon,
  TruckIcon,
  TwentyFourWatchIcon,
  TwoDotIcon,
} from 'components/common/Icons';

const features = [
  {
    icon: StarOutLineIcon,
    text: 'تضمین اصالت کالا',
    bgColor: '#9773FF',
    boxShadow: '0px 0px 8px rgba(151, 115, 255, 0.32)',
  },
  {
    icon: CoinIcon,
    text: 'قیمت مناسب',
    bgColor: '#FFC700',
    boxShadow: '0px 0px 8px rgba(255, 199, 0, 0.32)',
  },
  {
    icon: TwentyFourWatchIcon,
    text: 'پشتیبانی 24 ساعته',
    bgColor: '#FF5E5E',
    boxShadow: ' 0px 0px 8px rgba(255, 94, 94, 0.32)',
  },
  {
    icon: HandShackIcon,
    text: 'گارانتی 3 ساله',
    bgColor: '#FFB370',
    boxShadow: ' 0px 0px 8px rgba(255, 179, 112, 0.32)',
  },
  {
    icon: TruckIcon,
    text: 'حمل و نقل رایگان',
    bgColor: '#FF98FB',
    boxShadow: '0px 0px 8px rgba(255, 152, 251, 0.32)',
  },
  {
    icon: BoxesIcon,
    text: 'تنوع در محصولات',
    bgColor: '#4E95FF',
    boxShadow: ' 0px 0px 8px rgba(78, 149, 255, 0.32)',
  },
];

function FeatUres() {
  return (
    <Box
      as="section"
      maxW="1440px"
      mx={{ base: 10, lg: 'auto' }}
      px={{ base: 0, lg: 9 }}
    >
      <Center
        flexDir="column"
        fontSize={[13, 24]}
        fontWeight="700"
        color={['white', 'inherit']}
        bgColor={['#7D51C5', 'transparent']}
        rounded={12}
        border={['1.5px solid #15121D', 'none']}
        boxShadow={['2px 3px 0px #15121D', 'none']}
        h={[10, 'max-content']}
        mb="8"
        pr="2.5"
      >
        <TwoDotIcon
          color="primary.500"
          w="9"
          filter={'drop-shadow( 0px 0px 4px rgba(255, 168, 38, 0.79))'}
          display={['none', 'block']}
        />
        <Box as="span" alignSelf={['start', 'center']}>
          <AskIcon
            boxSize={6}
            filter="drop-shadow(0px 0px 4px rgba(21, 18, 29, 0.25))"
            color="white"
            ml="2"
            display={['initial', 'none']}
          />
          <Highlight
            query={['انتخاب']}
            styles={{ color: ['white', 'primary.500'] }}
          >
            چرا ما رو باید انتخاب کنید ؟
          </Highlight>
        </Box>
      </Center>
      <List
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={['32px 18px', '9']}
        mb="92px"
      >
        {features.map(feat => (
          <ListItem
            key={feat.bgColor}
            flexDir="column"
            alignItems="center"
            gap="2"
            minW={['84px', '108px']}
          >
            <Center
              bgColor={feat.bgColor}
              borderRadius={20}
              boxShadow={feat.boxShadow}
              boxSize={[66, 74]}
            >
              <ListIcon as={feat.icon} m="0" color="white" boxSize={[8]} />
            </Center>
            <Text
              w="full"
              textAlign="center"
              fontSize={[12, 14]}
              fontWeight="500"
            >
              {feat.text}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FeatUres;

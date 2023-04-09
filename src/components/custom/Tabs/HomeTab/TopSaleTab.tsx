import {
  Box,
  Center,
  Highlight,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { AngleDownIcon, CoinIcon, TwoDotIcon } from 'components/common/Icons';
import HomeBlogSlider from 'components/custom/Sliders/Home/HomeBlogSlider';
import TopSaleSlider from 'components/custom/Sliders/Home/TopSaleSlider';

function TopSaleTab() {
  return (
    <Box pos="relative" gridColumn="span 2">
      <Box
        as="section"
        maxW="1440px"
        mx={{ base: 10, sm: 0, lg: 'auto' }}
        px={{ base: 0, lg: 9 }}
      >
        <Center
          flexDir="column"
          fontSize={[13, 24, 32]}
          justifyContent={['center', 'start']}
          fontWeight="700"
          color={['white', 'inherit']}
          bgColor={['#7288FF', '#FFA826']}
          rounded={[12, 40]}
          border={['1.5px solid #15121D', 'none']}
          boxShadow={['2px 3px 0px #15121D', 'none']}
          h={[10, '552']}
          mb={['0', '102']}
          pos="relative"
          pt={['0', '9']}
          _before={{
            content: '""',
            w: { base: '86%', lg: '100%' },
            bgColor: '#FFC063',
            borderRadius: '40',
            pos: 'absolute',
            h: { base: '104%', lg: '100%' },
            top: { base: '-2%', lg: '0' },
            left: { base: '50%', lg: '0' },
            transform: { base: 'translate(-50% , 0)', lg: 'rotate(-1.5deg)' },
            zIndex: '-1',
            display: ['none', 'block'],
          }}
          _after={{
            content: '""',
            w: '74%',
            bgColor: '#FFD18B',
            borderRadius: '40',
            pos: 'absolute',
            h: '110%',
            top: '-5%',
            left: '50%',
            transform: 'translate(-50% , 0)',
            zIndex: '-2',
            display: ['none', 'block', 'none'],
          }}
        >
          <TwoDotIcon
            color="white"
            w="9"
            filter={'drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.79))'}
            display={['none', 'block']}
          />
          <Box
            display={'flex'}
            gap="2"
            as="span"
            alignSelf={['start', 'center']}
            w={['full', 'full']}
            px="2.5"
            justifyContent="center"
          >
            <CoinIcon
              boxSize={5}
              filter="drop-shadow(0px 0px 4px rgba(21, 18, 29, 0.25))"
              color="white"
              ml="2"
              display={['initial', 'none']}
            />
            <Highlight query={['پر فروش ترین']} styles={{ color: 'white' }}>
              پر فروش ترین محصولات
            </Highlight>
            <AngleDownIcon
              transform="rotate(90deg)"
              boxSize={4}
              mr="auto"
              display={['block', 'none']}
            />
            <Box as="span" display={['none', 'block']}>
              آترامارت
            </Box>
          </Box>
        </Center>
      </Box>
      <Tabs
        isLazy
        lazyBehavior="keepMounted"
        variant="line"
        maxW="1440px"
        w={{ base: '84vw', lg: '64vw' }}
        mr={['10', 'auto']}
        ml={'auto'}
        mb="10"
        position={['initial', 'absolute']}
        top={{ base: '18%', md: '20%' }}
        left="50%"
        transform={['unset', 'translate(-50% , 0)']}
      >
        <TabList
          color={['black', 'white']}
          border="none"
          bgColor={['transparent', '#FFBE5C']}
          rounded="16"
          boxShadow="0px 0px 4px rgba(0, 0, 0, 0.04)"
          py={'19.5px'}
          px={['0', '64px', '30px']}
          overflowX={['auto', 'hidden']}
          sx={{
            '& > button': {
              whiteSpace: 'nowrap',
              borderBottom: '0',
              fontWeight: ['700', '500'],
              fontSize: [13, 16],
              pos: 'relative',
              p: ['12px', '0'],
              ml: ['4', '8'],
              border: ['1.5px solid #ADADAD ', 'none'],
              rounded: ['12', 'none'],
              bgColor: ['#f5f5f5', 'transparent'],

              '&:after': {
                content: '""',
                bgColor: 'text',
                boxShadow: '0px 0px 3px rgba(21, 18, 29, 0.64)',
                w: '23px',
                h: '3px',
                display: ['none', 'block'],
                rounded: 'full',
                pos: 'absolute',
                bottom: '-8px',
                opacity: '0',
                transition: 'opacity .2s ease-in',
              },
            },
            '& > button[aria-selected=true]': {
              color: 'black',
              bgColor: ['#D6DCFF', 'transparent'],
              borderColor: '#7288FF',
              '&:after': {
                opacity: '1',
              },
            },
            '& > button:active': { bgColor: 'transparent' },
          }}
          // overflow="scroll"
        >
          <Tab>کارت گرافیک</Tab>
          <Tab>هارد اکسترنال</Tab>
          <Tab>گوشی همراه</Tab>
          <Tab>ساعت مچی هوشمند</Tab>
          <Tab>لپ تاپ</Tab>
          <Tab>مانیتور</Tab>
          <Tab>مادربورد</Tab>
          <Tab>تبلت</Tab>
          <Tab>کیبورد</Tab>
          <Tab>تبلت</Tab>
          <Tab>کیبورد</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <TopSaleSlider />
          </TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
          <TabPanel>4</TabPanel>
          <TabPanel>5</TabPanel>
          <TabPanel>6</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default TopSaleTab;

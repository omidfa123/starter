import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Highlight,
  IconButton,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
  Link,
  Flex,
} from '@chakra-ui/react';
import {
  AddTOCartIcon,
  AngleDownIcon,
  CoinIcon,
  ComparisonRoundIcon,
  HartRoundedIcon,
  StarFilledIcon,
  StarIcon,
  TwoDotIcon,
} from 'components/common/Icons';
import NextLink from 'components/custom/NextLink';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/future/image';
import { useState } from 'react';

function TopSaleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef] = useKeenSlider({
    rtl: true,
    slides: {
      perView: 'auto',
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 30em)': {
        rtl: false,
        slides: {
          perView: 'auto',
          spacing: 24,
        },
      },
      '(min-width:  62em)': {
        rtl: false,
        slides: {
          perView: 'auto',
          spacing: 32,
        },
      },
    },
  });
  return (
    <Box ref={sliderRef} className="keen-slider" pt="5">
      {Array.from('omidfa').map(val => (
        <Card
          key={val}
          className="keen-slider__slide"
          variant="outline"
          minW="min-content"
          px={['1.5', '2']}
          pt={['1.5', '2']}
          bgColor="white"
          rounded="24"
          align="center"
          overflow="visible !important"
          _hover={{
            borderColor: ['#7288FF', 'text'],
          }}
        >
          <CardHeader
            p="0"
            pos="relative"
            w={['154px', '165px']}
            h={['116px', '146px']}
            rounded="20"
            bgColor="#f5f5f5"
            mb={['2', '3']}
            isolation="isolate"
          >
            <Flex flexDir="column" pos="absolute" bottom="1" right="1.5">
              <IconButton
                aria-label="افزودن به علاقه مندی ها"
                variant="unstyled"
                minWidth="unset"
                height="min-content"
                zIndex={2}
                data-group
                icon={
                  <ComparisonRoundIcon
                    boxSize={['5', '6']}
                    _groupHover={{
                      color: 'white',
                      fill: '#98AFFF',
                      '& circle': { stroke: '#98AFFF' },
                    }}
                  />
                }
              />
              <IconButton
                aria-label="افزودن به علاقه مندی ها"
                variant="unstyled"
                minWidth="unset"
                height="min-content"
                zIndex={2}
                data-group
                icon={
                  <HartRoundedIcon
                    boxSize={['5', '6']}
                    _groupHover={{
                      color: 'white',
                      fill: '#FF5E5E',
                      '& circle': { stroke: '#FF5E5E' },
                      '& path:last-of-type': { fill: 'white' },
                    }}
                  />
                }
              />
            </Flex>
            <Image src="/images/graphicCart.png" alt="" fill />
          </CardHeader>
          <CardBody p="0" mb={['6', '7', '8']}>
            <Text
              fontWeight="500"
              fontSize={['11', '13']}
              lineHeight="tall"
              mb={['2', '4', 6]}
            >
              کارت گرافیک ایسوس DUAL RX 6400 4G
            </Text>
            <Center justifyContent="space-between">
              <Text fontSize={['10', '12']} display="flex" gap="1">
                ۳.۸
                <StarIcon boxSize={[3, 4]} />
              </Text>
              <Text fontSize={['15', '16']}>
                ۲٬۳۰۰٬۰۰۰
                <Box fontSize="10" mr={['0.5', '1']} as="span">
                  تومان
                </Box>
              </Text>
            </Center>
          </CardBody>
          <CardFooter p="0">
            <IconButton
              variant="unstyled"
              color="text"
              aria-label="افزودن به سبد خرید"
              bgColor="#7288FF"
              roundedTop="full"
              w="48px"
              h="26px"
              transform="translateY(1px)"
              icon={<AddTOCartIcon />}
              mx="auto"
              display={['block', 'none']}
            />
            <IconButton
              variant="unstyled"
              color="text"
              aria-label="افزودن به سبد خرید"
              bgColor="primary.500"
              roundedTop="full"
              w={['48px', '46px']}
              h={['26px', '18px']}
              transform="translateY(2px)"
              icon={<AngleDownIcon transform="rotate(180deg)" />}
              mx="auto"
              display={['none', 'block']}
            />
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
}

export default TopSaleSlider;

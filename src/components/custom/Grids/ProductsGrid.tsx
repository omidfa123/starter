import {
  Box,
  Center,
  Grid,
  Link,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChakraBox } from 'components/common/Header/HeaderNormal/Naves/NavUnderLine';
import {
  AngleDownIcon,
  ComparisonRoundIcon,
  HartRoundedIcon,
  StarIcon,
} from 'components/common/Icons';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NextLink from '../NextLink';

export default function ProductsGrid({ isLoading }: { isLoading: boolean }) {
  const [hovered, setHovered] = useState(-1);
  const router = useRouter();
  return (
    <Grid
      gridArea="products"
      mr="25px"
      gridTemplateColumns="repeat(3 , 1fr)"
      columnGap={5}
      rowGap={6}
    >
      {Array.from('123456789011').map((_, index) => {
        if (isLoading) {
          return (
            <Center
              key={index}
              h={402}
              rounded={32}
              bgColor="white"
              flexDir="column"
              justifyContent="start"
              pt={4}
              px="4"
              w="max-content"
            >
              <SkeletonCircle
                w="205px"
                h="200"
                rounded={24}
                startColor="#dbdbdb"
                endColor="#f5f5f5"
                speed={0.9}
              />
              <SkeletonText
                mt="4"
                noOfLines={2}
                spacing="4"
                w="100%"
                startColor="#dbdbdb"
                endColor="#f5f5f5"
                speed={0.9}
              />
              <Center w="100%" mt="9" justifyContent="space-between">
                <SkeletonCircle
                  rounded="0"
                  w="9"
                  h="5"
                  startColor="#dbdbdb"
                  endColor="#f5f5f5"
                  speed={0.9}
                />
                <SkeletonCircle
                  w="131px"
                  h="32px"
                  rounded={4}
                  startColor="#dbdbdb"
                  endColor="#f5f5f5"
                  speed={0.9}
                />
              </Center>
              <SkeletonCircle
                roundedBottom="32"
                w="87px"
                h="7"
                marginTop="auto"
                startColor="#dbdbdb"
                endColor="#f5f5f5"
                speed={0.9}
              />
            </Center>
          );
        } else {
          return (
            <Center
              key={index}
              flexDir="column"
              bgColor="white"
              pt={4}
              px="4"
              rounded={32}
              w="max-content"
              onMouseOverCapture={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
              _hover={{ outline: '2px solid #FFA826' }}
              data-group
              pos="relative"
            >
              <Center
                bgColor="#f5f5f5"
                rounded="24"
                w={205}
                h={200}
                mb="4"
                pos="relative"
              >
                <VStack spacing="2" pos="absolute" bottom="2" right="2">
                  <NextLink href="/comparison">
                    <Link>
                      <ComparisonRoundIcon
                        transitionProperty="var(--artamart-transition-property-common)"
                        transitionDuration="var(--artamart-transition-duration-fast)"
                        transitionTimingFunction="var(--artamart-transition-easing-ease-out)"
                        _groupHover={{
                          color: 'white',
                          fill: '#98AFFF',
                          '& circle': { stroke: '#98AFFF' },
                        }}
                      />
                    </Link>
                  </NextLink>
                  <HartRoundedIcon
                    boxSize="22px"
                    cursor="pointer"
                    transitionProperty="var(--artamart-transition-property-common)"
                    transitionDuration="var(--artamart-transition-duration-fast)"
                    transitionTimingFunction="var(--artamart-transition-easing-ease-out)"
                    _groupHover={{
                      color: 'white',
                      fill: '#FF5E5E',
                      '& circle': { stroke: '#FF5E5E' },
                      '& path:last-of-type': { fill: 'white' },
                    }}
                  />
                </VStack>
                <Image
                  src="/images/pc.png"
                  alt="pc"
                  width={171}
                  height={151}
                  style={{
                    filter: 'drop-shadow(0px 12px 13px rgba(0, 0, 0, 0.15)',
                  }}
                />
              </Center>
              <Text textStyle="medium15" w="205px" mb="39px">
                سیستم اسمبل شده ایسوس مدل A7 با پلتفرم اینتل گرافیک ....
              </Text>
              <Center w="100%" justifyContent="space-between" mb="50px">
                <Center gap={1}>
                  <Box fontSize={12}>۳.۸</Box>
                  <StarIcon boxSize="13.5px" />
                </Center>
                <Center fontWeight="500" gap={1}>
                  <Box fontSize={24} fontWeight="400">
                    ۲٬۳۰۰٬۰۰۰
                  </Box>
                  تومان
                </Center>
              </Center>
              <Center
                bgColor="primary.500"
                roundedTop={32}
                pos="absolute"
                bottom="0"
                padding={hovered === index ? '5.8px 22.8px' : '2px 34px'}
              >
                {hovered === index ? (
                  <ChakraBox
                    fontSize={12}
                    fontWeight="500"
                    color="black"
                    initial={{ y: 6, opacity: 0.5 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ bounce: '0' }}
                    onClick={() => {
                      router.push('/product');
                    }}
                    cursor="pointer"
                  >
                    افزودن به سبد خرید
                  </ChakraBox>
                ) : (
                  <AngleDownIcon h="5" w="18px" transform="rotate(180deg)" />
                )}
              </Center>
            </Center>
          );
        }
      })}
    </Grid>
  );
}

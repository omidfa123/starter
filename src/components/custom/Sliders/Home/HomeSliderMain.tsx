import { Box, Button, Text } from '@chakra-ui/react';
import { AngleDownIcon, TwoDotIcon } from 'components/common/Icons';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/future/image';
import { useState } from 'react';

export default function HomeSliderMain() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Box as="section" bgColor={{ base: 'transparent', lg: 'white' }} mb="10">
      <Box
        ref={sliderRef}
        className="keen-slider"
        maxW="1440px"
        w={{ base: 'unset !important', lg: 'full' }}
        mx={{ base: '10', lg: 'auto' }}
        bgColor={{ base: 'white', lg: 'transparent' }}
        rounded={['24', 32]}
        boxShadow={[
          '0px 0px 8px rgba(0, 0, 0, 0.08)',
          '0px 0px 16px rgba(0, 0, 0, 0.02)',
        ]}
      >
        {Array.from('1234').map(v => (
          <Box
            key="v"
            className="keen-slider__slide"
            px={{ base: 3, sm: 4, md: 12 }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text
                color="primary.500"
                fontWeight="500"
                fontSize="13"
                mb="4"
                mt="9"
              >
                <TwoDotIcon />
                <Box as="span" mr="2">
                  فروش ویژه و اقساطی
                </Box>
              </Text>
              <Text fontSize={[16, 20, 24, 32]} fontWeight="700" mb="2">
                فروش انواع کنسول های بازی
              </Text>
              <Text
                color="#727272"
                fontSize={[10, 12, 13, 14]}
                w={['100%', '80%']}
                mb="4"
              >
                تا 24 ماه میتوانید از خرید ویژه و اقساطی محصولات ما لذت ببرید
              </Text>
              <Button
                variant={'solid'}
                fontWeight="400"
                fontSize={13}
                rounded="8"
                boxShadow="0px 0px 8px rgba(255, 153, 0, 0.4)"
                h="8"
                px="2"
                rightIcon={
                  <AngleDownIcon transform="rotate(90deg)" boxSize="2" />
                }
                mb="9"
              >
                خرید محصول
              </Button>
            </Box>
            <Box w={[248, 300, 348]} h={['180', '200', '244']} pos="relative">
              <Image src="/images/MainSliderLG.png" alt="" fill />
            </Box>
          </Box>
        ))}
        {loaded && instanceRef.current && (
          <Box
            display="flex"
            p="10px 0"
            justifyContent="center"
            position="absolute"
            bottom="0"
            left="50%"
            transform="translateX(-50%) scale(-1 , 1)"
          >
            {Array.from(
              Array(instanceRef.current.track.details.slides.length).keys()
            ).map(idx => {
              const isActive = currentSlide === idx;
              return (
                <Button
                  key={idx}
                  variant="solid"
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  colorScheme="secondary"
                  border="none"
                  h="8px"
                  w={isActive ? '23px' : 2}
                  transitionProperty="width , background-color,border-color,color,fill,stroke,opacity,box-shadow,transform"
                  background={isActive ? 'secondary.500' : '#c7c7c7'}
                  boxShadow={
                    isActive
                      ? ' 0px 0px 4px rgba(151, 115, 255, 0.65)'
                      : undefined
                  }
                  // transform={isActive ? 'scale(2 ,1)' : undefined}
                  rounded={isActive ? '22' : 'full'}
                  m="0 3px"
                  opacity=".7"
                  p="0"
                  cursor="pointer"
                  minW={0}
                  _focus={{ outline: 'none' }}
                  _hover={{ opacity: '1' }}
                />
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
}

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import {
  AngleDownIcon,
  DisCountIcon,
  TimeQuatreIcon,
  TwoDotIcon,
} from 'components/common/Icons';
import { useKeenSlider } from 'keen-slider/react';
import Image from "next/image";
import { useState } from 'react';
import { Arrow } from '../SingleProduct/SingleProductBlogSlider';

function DisCountSlider() {
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
    <Box
      as="section"
      gridColumn={['1', '2 /3']}
      maxWidth="572px"
      bgColor="white"
      boxShadow={['none', '0px 0px 8px rgba(0, 0, 0, 0.03)']}
      rounded={[12, 24]}
      mb={[0, '10']}
    >
      <Box
        bgColor={['#FF5E5E', 'white']}
        mb={['10', 0]}
        rounded={[12, 24]}
        boxShadow={[' 2px 3px 0px #15121D', 'none']}
        border={['1.5px solid #15121d', 'none']}
        p={['8.5px 10px', 4]}
        mx={['10', 0]}
      >
        <Flex
          align="center"
          justifyContent="space-between"
          mb="1"
          display={['none', 'flex']}
        >
          <Flex
            color="primary.500"
            gap="1"
            fontSize="12"
            alignItems="center"
            fontWeight="500"
          >
            <TwoDotIcon w="4" />
            <Text>خرید کن ولی ارزون تر !</Text>
          </Flex>
          <Button
            variant="outline"
            fontWeight="500"
            color={'primary.500'}
            fontSize={13}
            rounded="8"
            h="8"
            px="1"
            rightIcon={<AngleDownIcon transform="rotate(90deg)" boxSize="2" />}
          >
            مشاهده محصولات
          </Button>
        </Flex>
        <Flex align="center" gap={[4, 0]}>
          <DisCountIcon
            boxSize={5}
            display={['block', 'none']}
            filter={'drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.24))'}
          />
          <Text
            fontSize={['13', '24']}
            color={['white', 'black']}
            fontWeight="700"
          >
            تخفیف های ویژه آترا
          </Text>
          <Text
            color={['white', 'primary.500']}
            pos="relative"
            mr="auto"
            fontWeight={[700, 500]}
            fontSize={[13, 16]}
            _after={{
              content: "'زمان باقی مانده تا پایان تخفیفات'",
              color: 'text',
              fontSize: '10',
              pos: 'absolute',
              bottom: -4,
              w: 'max-content',
              display: ['none', 'block'],
              left: '0',
            }}
          >
            ۲۵:۲۵:۲۰
            <TimeQuatreIcon mr={[2, 1]} boxSize={5} />
          </Text>
        </Flex>
      </Box>
      <Box ref={sliderRef} className="keen-slider">
        {Array.from('1234').map(v => (
          <Image
            key={v}
            src="/images/MainSliderLG.png"
            alt=""
            width={200}
            height={200}
            className="keen-slider__slide"
          />
        ))}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              disable={currentSlide === 0}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              left
            />
            <Arrow
              disable={
                currentSlide ==
                instanceRef.current.track.details.slides.length - 4
              }
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
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

export default DisCountSlider;

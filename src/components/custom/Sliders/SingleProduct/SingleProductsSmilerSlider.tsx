import { Box, Center, color, Divider, Text } from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';
import { useKeenSlider } from 'keen-slider/react';
import Image from "next/image";
import { useState } from 'react';

export default function SingleProductsSmilerSlider() {
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
    slides: {
      perView: 5,
      spacing: 24,
    },
  });

  return (
    <Box
      border="1.5px solid  #eee"
      rounded="16"
      gridArea="smiler "
      px="6"
      py="4"
      mb="6"
    >
      <Text
        textStyle="medium20"
        mb="2"
        pos="relative"
        _after={{
          content: "''",
          w: '122px',
          h: '2px',
          bgColor: '#9773FF',
          rounded: 'full',
          shadow: '0px 0px 4px rgba(151, 115, 255, 0.48)',
          position: 'absolute',
          bottom: '-10px',
          right: '0',
        }}
      >
        کالاهای مشابه
      </Text>
      <Divider borderBottomWidth="2px" />
      <Box className="navigation-wrapper" pt="4" px="54px" pos={'relative'}>
        <Box ref={sliderRef} className="keen-slider">
          {Array.from('1234567890').map(val => (
            <Center
              key={val}
              className="keen-slider__slide"
              rounded="16"
              border="1.5px solid #eee"
              p="16px 8px 8px 8px"
              flexDir="column"
            >
              <Image
                src="/images/monitor_2.png"
                alt="monitor"
                height={80}
                width={78}
              />
              <Text mt="2" mb="9" fontSize={11} textAlign="left">
                MSI Optix G27C4 Full HD Gaming Monitor
              </Text>
              <Center
                bgColor="secondary.500"
                rounded="8"
                color="white"
                shadow="0px 0px 4px rgba(151, 115, 255, 0.4)"
                w="128px"
                h="30px"
              >
                ۹٬۴۰۰٬۰۰
                <Box as="span" mr="1" textStyle="medium10">
                  تومان
                </Box>
              </Center>
            </Center>
          ))}
        </Box>
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
                instanceRef.current.track.details.slides.length - 5
              }
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </Box>
    </Box>
  );
}

const Arrow = ({
  disable,
  onClick,
  left,
}: {
  disable: boolean;
  onClick: (e: any) => void;
  left?: boolean;
}) => (
  <Center
    position="absolute"
    left={left ? '0' : undefined}
    right={left ? undefined : '0'}
    top="50%"
    boxShadow="0px 0px 4px rgba(0, 0, 0, 0.16)"
    p="6.36px"
    rounded="full"
    cursor="pointer"
    aria-disabled={disable ? 'true' : 'false'}
    onClick={onClick}
    _disabled={{
      bgColor: 'disableButton',
      color: 'white',
      cursor: ' not-allowed',
    }}
    _hover={{
      '&:not([aria-disabled=true])': {
        bgColor: 'text',
        color: 'white',
      },
    }}
    transitionProperty="var(--artamart-transition-property-common)"
    transitionDuration="var(--artamart-transition-duration-fast)"
    transitionTimingFunction="var(--artamart-transition-easing-ease-out)"
  >
    <AngleDownIcon
      transform={left ? 'rotate(90deg)' : 'rotate(-90deg)'}
      boxSize={3}
      transitionProperty="var(--artamart-transition-property-common)"
      transitionDuration="var(--artamart-transition-duration-fast)"
      transitionTimingFunction="var(--artamart-transition-easing-ease-out)"
    />
  </Center>
);

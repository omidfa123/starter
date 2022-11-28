import {
  Box,
  Button,
  Center,
  color,
  Divider,
  Flex,
  Text,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  CommentIcon,
  HartOutlineIcon,
  TimeQuatreIcon,
} from 'components/common/Icons';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/future/image';
import { useState } from 'react';

export default function SingleProductsBlogSlider() {
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
      perView: 4,
      spacing: 16,
    },
  });

  return (
    <Box
      border="1.5px solid  #eee"
      rounded="16"
      gridArea="blog"
      px="6"
      py="4"
      mb="6"
    >
      <Flex align="center" justify="space-between">
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
            bottom: '-11px',
            right: '0',
          }}
        >
          اخبار و مقالات
        </Text>
        <Button
          variant="outline"
          colorScheme="none"
          rounded="8"
          fontSize="13"
          fontWeight="500"
          h="8"
          w="102px"
          mb="2"
          rightIcon={<AngleDownIcon transform="rotate(90deg)" boxSize={2} />}
        >
          مشاهده همه
        </Button>
      </Flex>
      <Divider borderBottomWidth="2px" />
      <Box className="navigation-wrapper" pt="8" px="40px" pos={'relative'}>
        <Box ref={sliderRef} className="keen-slider">
          {Array.from('1234567890').map(val => (
            <Center
              key={val}
              className="keen-slider__slide"
              rounded="16"
              border="1.5px solid #eee"
              _hover={{
                borderColor: 'secondary.500',
                '&:before': { opacity: '1', visibility: 'visible' },
              }}
              p="16px 8px 8px 8px"
              flexDir="column"
              pos="relative"
              transitionProperty="var(--artamart-transition-property-common)"
              transitionDuration="var(--artamart-transition-duration-fast)"
              transitionTimingFunction="var(--artamart-transition-easing-ease-out)"
              _before={{
                content: "''",
                bgImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 19 19'%3E%3Cpath fill='%23fff' d='M1.533.532c-.69 0-1.25.56-1.25 1.25v11.25a1.25 1.25 0 1 0 2.5 0v-10h10a1.25 1.25 0 1 0 0-2.5H1.533Zm17.05 16.532L2.417.898.65 2.666l16.166 16.166 1.768-1.768Z'/%3E%3C/svg%3E%0A")`,
                bgSize: '18px',
                bgPos: 'center',
                bgRepeat: 'no-repeat',
                bgColor: 'secondary.500',
                rounded: 'full',
                w: '48px',
                h: '48px',
                position: 'absolute',
                top: '16%',
                opacity: 0,
                visibility: 'hidden',
              }}
            >
              <Image
                src="/images/monitor_6.png"
                alt="monitor"
                height={121}
                width={180}
              />
              <Text mt="2" mb="1" fontSize={13}>
                بهترین کیس های اسمبل شده سال 2023 !
              </Text>
              <Text mb="8" fontSize={13} fontWeight="400" color="description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </Text>
              <Flex
                color="description"
                textStyle="regular12"
                align="center"
                w="100%"
              >
                <TimeQuatreIcon ml="2.5" />
                <Text ml="3.5" whiteSpace="nowrap">
                  ۱۲ مرداد - ۱۴۰۲
                </Text>
                <Text ml="1">۲۳</Text>
                <CommentIcon />
                <Text ml="1" mr="2">
                  ۲۳
                </Text>
                <HartOutlineIcon />
              </Flex>
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
                instanceRef.current.track.details.slides.length - 4
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

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  ArrowLeftIcon,
  CommentIcon,
  DocumentIcon,
  HartOutlineIcon,
  TimeQuatreIcon,
  TwoDotIcon,
} from 'components/common/Icons';
import { useKeenSlider } from 'keen-slider/react';
import Image from "next/image";
import { useState } from 'react';

function HomeBlogSlider() {
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
    rtl: true,
    slides: {
      perView: 'auto',
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 30em)': {
        slides: {
          perView: 'auto',
          spacing: 24,
        },
      },
      //  '(min-width:  48em)': {
      //   slides: {
      //     origin: 'center',
      //     perView: 5,
      //     spacing: 8,
      //   },
      // },
      '(min-width:  62em)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
      '(min-width:  80em)': {
        slides: {
          perView: 4,
          spacing: 36,
        },
      },
    },
  });

  return (
    <Box
      mr={['10', '10', 'auto']}
      ml="auto"
      maxW="1440px"
      px={{ base: 0, md: 9 }}
    >
      <Box as="section" ml="10">
        <Flex
          fontSize={[13, 24]}
          fontWeight="700"
          rounded={12}
          border={['1.5px solid #15121D', 'none']}
          boxShadow={['2px 3px 0px #15121D', 'none']}
          h={[10, 'max-content']}
          mb="8"
          alignItems="center"
          justify="space-between"
          pl={['3', 0]}
          pr={['2.5', 0]}
          gap="6"
        >
          <Center gap={1}>
            <TwoDotIcon
              color="text"
              w="9"
              filter={'drop-shadow(0px 0px 4px rgba(21, 18, 29, 0.4)'}
              display={['none', 'block']}
            />
            <DocumentIcon
              boxSize={5}
              filter="drop-shadow(0px 0px 4px rgba(21, 18, 29, 0.25))"
              ml="2"
              display={['initial', 'none']}
            />
            <Text whiteSpace="nowrap">اخبار و مقالات</Text>
          </Center>
          <Divider
            borderColor="#E1E1E1"
            display={['none', 'block']}
            w={'full'}
          />
          <AngleDownIcon
            transform="rotate(90deg)"
            boxSize={4}
            mr="auto"
            display={['block', 'none']}
          />
          <Button
            variant="outline"
            colorScheme="black"
            h="8"
            minW="max-content"
            fontSize="13"
            fontWeight="500"
            display={['none', 'flex', 'flex', 'none']}
            rightIcon={<AngleDownIcon transform="rotate(90deg)" boxSize="2" />}
          >
            مشاهده همه
          </Button>
        </Flex>
      </Box>
      <Box ref={sliderRef} className="keen-slider" mb="46px">
        {Array.from('1234567890').map(val => (
          <Card
            key={val}
            bgColor="white"
            className="keen-slider__slide"
            rounded="24"
            border="1.5px solid #15121D"
            minW={234}
            px="2"
            pt="2"
            pb="3"
            align="center"
          >
            <CardHeader p="0">
              <Image
                src="/images/monitor_6.png"
                alt="monitor"
                height={143}
                width={218}
              />
            </CardHeader>
            <CardBody p="0">
              <Text my="2" fontSize="14" fontWeight={500}>
                بهترین کیس های اسمبل شده سال 2023 !
              </Text>
              <Text fontSize={12} mb="6" fontWeight="400" color="#898989">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </Text>
            </CardBody>
            <CardFooter p="0" w="full">
              <List display="flex" w="full">
                <ListItem gap="0" color="#898989" fontSize={12}>
                  <ListIcon as={TimeQuatreIcon} boxSize="4" />
                  ۱۲ مرداد - ۱۴۰۲
                </ListItem>
                <ListItem gap="1" color="#898989" fontSize={12} mr="auto">
                  ۲۳
                  <ListIcon as={CommentIcon} boxSize="4" />
                </ListItem>
                <ListItem gap="1" color="#898989" fontSize={12}>
                  ۲۳
                  <ListIcon as={HartOutlineIcon} boxSize="4" />
                </ListItem>
              </List>
            </CardFooter>
          </Card>
        ))}
        <Center
          minW="74px"
          textAlign="center"
          className="keen-slider__slide"
          rounded={20}
          boxShadow="3px 4px 0px #15121D"
          border="2px solid #15121d"
          fontSize="14px"
          fontWeight="500"
          mb="1"
          flexDir="column"
          gap="2"
          ml={['2', 0]}
        >
          مشاهده اخبار
          <ArrowLeftIcon boxSize="4" />
        </Center>
      </Box>
    </Box>
  );
}

export default HomeBlogSlider;

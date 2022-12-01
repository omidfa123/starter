import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Divider,
  Box,
  Center,
  Flex,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/future/image';
import { useEffect, useState } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export default function SingleProductModal({
  isOpen,
  onClose,
  activeSlide,
}: {
  isOpen: boolean;
  activeSlide: number;
  onClose: () => void;
}) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      spacing: 3,
    },
  });
  return (
    <Modal onClose={onClose} isOpen={isOpen} size={'5xl'} isCentered>
      <ModalOverlay />
      <ModalContent rounded="48">
        <ModalHeader p="36px 32px 0px 32px">
          <Text
            textStyle="medium16"
            bgColor={'secondary.500'}
            w="max-content"
            color="white"
            p="7.5px 21.5px"
            rounded="8"
            border={'1.3px solid #15121D'}
            shadow={' 2px 3px 0px #15121D'}
          >
            تصاویر محصول
          </Text>
          <Divider mt="6" />
        </ModalHeader>

        <ModalCloseButton
          color="#ADADAD"
          fontSize={24}
          right="unset"
          left={6}
          top="10"
        />
        <ModalBody p="24px 32px" display="flex" gap="10">
          <Flex flexDir="column">
            <Flex
              flexWrap={'wrap'}
              w="290px"
              gap="16px"
              sx={{
                '& > div': {
                  rounded: '20',
                  border: '1px solid #eee',
                  minW: '85px',
                  h: '85px',
                  pos: 'relative',
                  '&:focus': {
                    borderColor: 'secondary.500',
                  },
                },
              }}
            >
              <Center onClick={() => instanceRef.current?.moveToIdx(0)}>
                <Image
                  src="/images/monitor.png"
                  width={66}
                  height={54}
                  alt="monitor"
                />
              </Center>
              <Center onClick={() => instanceRef.current?.moveToIdx(1)}>
                <Image
                  src="/images/tumb2.png"
                  width={66}
                  height={54}
                  alt="monitor"
                />
              </Center>
              <Center onClick={() => instanceRef.current?.moveToIdx(2)}>
                <Image
                  src="/images/tumb3.png"
                  width={66}
                  height={54}
                  alt="monitor"
                />
              </Center>
              <Center onClick={() => instanceRef.current?.moveToIdx(3)}>
                <Image
                  src="/images/tumb4.png"
                  width={66}
                  height={54}
                  alt="monitor"
                />
              </Center>
              <Center onClick={() => instanceRef.current?.moveToIdx(4)}>
                <Image
                  src="/images/tumb5.png"
                  width={66}
                  height={54}
                  alt="monitor"
                />
              </Center>
            </Flex>
            <Divider mt="6" mb="4" />
            <Flex
              flexDir="column"
              border="1.5px solid #eee"
              p="4"
              rounded="24"
              h="max-content"
              mt="auto"
            >
              <Text fontSize="11" color="description" mb="13px">
                سوال شما درباره این محصول چیه ؟
              </Text>
              <Textarea
                mb="4"
                placeholder="نظر خود را بنویسید ..."
                resize="none"
                rounded="24"
                _placeholder={{ color: '#B8B8B8', fontSize: '13' }}
                w="255px"
                h="109px"
              />
              <Button
                variant="outline"
                rounded="8"
                w="255px"
                color="primary.500"
                fontSize="13"
                fontWeight="500"
              >
                ثبت پرسش
              </Button>
            </Flex>
          </Flex>
          <Center
            border="1.2px solid #eee"
            rounded={16}
            w="633px"
            p="48px 63px 46px 44px  "
          >
            <Box
              ref={sliderRef}
              className="keen-slider"
              sx={{
                '&  div': {
                  w: '525px',
                  h: '423px',
                },
              }}
            >
              <TransformWrapper>
                <TransformComponent wrapperClass="keen-slider__slide">
                  <Image src="/images/monitor.png" fill alt="monitor" />
                </TransformComponent>
              </TransformWrapper>
              <TransformWrapper>
                <TransformComponent wrapperClass="keen-slider__slide">
                  <Image src="/images/tumb2.png" fill alt="monitor" />
                </TransformComponent>
              </TransformWrapper>
              <TransformWrapper>
                <TransformComponent wrapperClass="keen-slider__slide">
                  <Image src="/images/tumb3.png" fill alt="monitor" />
                </TransformComponent>
              </TransformWrapper>
              <TransformWrapper>
                <TransformComponent wrapperClass="keen-slider__slide">
                  <Image src="/images/tumb4.png" fill alt="monitor" />
                </TransformComponent>
              </TransformWrapper>
              <TransformWrapper>
                <TransformComponent wrapperClass="keen-slider__slide">
                  <Image src="/images/tumb5.png" fill alt="monitor" />
                </TransformComponent>
              </TransformWrapper>
            </Box>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Divider,
  Textarea,
  Button,
  Flex,
} from '@chakra-ui/react';
import { SingleProductAskVector } from 'components/common/Icons/Vectors';

export default function SingleProductModalAsk({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} size={'5xl'} isCentered>
      <ModalOverlay />
      <ModalContent rounded="32">
        <ModalHeader p="24px 24px 0 24px">
          <Text textStyle="medium24">سوالت درباره این محصول چیه ؟</Text>
          <Divider mt="4" />
        </ModalHeader>
        <ModalCloseButton fontSize={18} right="unset" left={6} top="6" />
        <ModalBody p="16px 24px 0px 24px" display="flex" gap="116px">
          <Flex
            flexDir="column"
            gap="48px"
            maxW="478px"
            w="100%"
            pos="relative"
            _after={{
              content: '"۱۰۰/۰"',
              pos: 'absolute',
              color: '#9F9F9F',
              left: '-2%',
              top: '61%',
            }}
          >
            <Textarea
              rounded={24}
              h="156px"
              resize="none"
              maxLength={100}
              focusBorderColor="secondary.500"
            />
            <Button
              // onClick={onClose}
              borderWidth="1.5px"
              w="224px"
              rounded={8}
              type="submit"
              mb="5"
            >
              ثبت پرسش
            </Button>
          </Flex>
          <SingleProductAskVector
            h="100%"
            maxW="283px"
            w="100%"
            alignSelf="end"
            transform="translateY(7px)"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

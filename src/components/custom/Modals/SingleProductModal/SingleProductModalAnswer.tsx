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
import {
  SingleProductAnswerVector,
  SingleProductAskVector,
} from 'components/common/Icons/Vectors';

export default function SingleProductModalAnswer({
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
          <Text textStyle="medium24">چه جوابی میخوای بهش بدی ؟</Text>
          <Divider mt="4" />
        </ModalHeader>

        <ModalCloseButton fontSize={18} right="unset" left={6} top="6" />
        <ModalBody p="16px 24px 0px 24px" display="flex" gap="116px">
          <Flex
            flexDir="column"
            maxW="478px"
            w="100%"
            pos="relative"
            _after={{
              content: '"۱۰۰/۰"',
              pos: 'absolute',
              color: '#9F9F9F',
              left: '-2%',
              top: '66%',
            }}
          >
            <Text color={'black'} mb="4">
              سلام برای گیم مناسب هست؟
            </Text>
            <Textarea
              rounded={24}
              h="156px"
              resize="none"
              maxLength={100}
              focusBorderColor="secondary.500"
              mb="48px"
            />
            <Button
              // onClick={onClose}
              borderWidth="1.5px"
              w="224px"
              rounded={8}
              type="submit"
              mb="5"
            >
              ثبت جواب
            </Button>
          </Flex>
          <SingleProductAnswerVector
            h="100%"
            maxW="283px"
            w="100%"
            alignSelf="end"
            transform="translateY(0.3px)"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Divider,
} from '@chakra-ui/react';

import SingleProductFormComment from 'components/custom/Forms/SingleProductFormComment';

export default function SingleProductModalComments({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      size={'xl'}
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent rounded="32" pl="1">
        <ModalHeader p="6">
          <Text textStyle="medium24" mb="1">
            نظرت در موردش چیه ؟
          </Text>
          <Text textStyle="regular13" mb="4">
            در مورد مانیتور مخصوص بازی سامسونگ مدل LS49AG950N-M سایز 49 اینچ
          </Text>
          <Divider />
        </ModalHeader>
        <ModalCloseButton fontSize={18} right="unset" left={6} top="6" />
        <ModalBody
          p="0"
          sx={{
            '&::-webkit-scrollbar': {
              width: '4px',
              background: 'transparent',
              borderRadius: '7px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'secondary.500',
              borderRadius: '7px',
            },
            ' &::-webkit-scrollbar-track-piece:end': {
              background: '#eee',
              borderRadius: '7px',
              marginBottom: '24px',
            },
            ' &::-webkit-scrollbar-track-piece:start': {
              background: '#eee',
              borderRadius: '7px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <SingleProductFormComment />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

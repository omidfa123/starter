import { Box, Button, Center, Flex, Text, VStack } from '@chakra-ui/react';
import { CircleAddIcon } from 'components/common/Icons';

export default function OrderList() {
  return (
    <Box h="480px">
      <VStack
        textStyle="medium24"
        color="disableUl"
        w="full"
        h="full"
        p="32px 40px"
      >
        <Center as="p" textAlign="center" w="full" flex="1">
          هنوز هیچ موردی انتخاب نشده است
        </Center>
        <Button leftIcon={<CircleAddIcon />} alignSelf="end" h="47px">
          افزودن محصول
        </Button>
      </VStack>
    </Box>
  );
}

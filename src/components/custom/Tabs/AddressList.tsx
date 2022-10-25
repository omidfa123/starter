import { Box, Button, Flex } from '@chakra-ui/react';
import { CircleAddIcon } from 'components/common/Icons';

export default function AddressList() {
  return (
    <Box h="480px">
      <Flex textStyle="medium24" color="disableUl">
        هنوز هیچ فاکتوری انتخاب نشده است
      </Flex>
      <Button leftIcon={<CircleAddIcon />}>افزودن محصول</Button>
    </Box>
  );
}

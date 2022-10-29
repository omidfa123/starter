import { Box, Button } from '@chakra-ui/react';
import { CircleAddIcon } from 'components/common/Icons';
import Pagination from '../Pagination';
import CreditTable from '../Tables/CreditTable';

export default function OrderList() {
  return (
    <Box h="max-content" p="64px 34px 32px 34px ">
      {/* <Center
        as="p"
        textStyle="medium24"
        color="disableUl"
        textAlign="center"
        w="full"
        flex="1"
      >
        هنوز هیچ فاکتوری انتخاب نشده است
      </Center> */}
      <CreditTable />
      <Pagination />
      <Button
        leftIcon={<CircleAddIcon />}
        mr="auto"
        display="block"
        h="47px"
        mt={6}
      >
        افزودن محصول
      </Button>
    </Box>
  );
}

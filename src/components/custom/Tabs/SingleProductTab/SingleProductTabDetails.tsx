import { Box, Button, List, ListItem } from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';

export default function SingleProductTabDetails() {
  return (
    <>
      <List w="max-content" pb="9" display="flex" gap="2">
        <ListItem
          flexDir="column"
          alignItems="start"
          gap="9"
          pt="2"
          sx={{ '& > div': { color: 'description' } }}
        >
          <Box>توضیحات بلندگو :</Box>
          <Box>وزن :</Box>
          <Box>نوع صفحه نمایش :</Box>
          <Box>نوع مانیتور :</Box>
          <Box>نوع پس زمینه :</Box>
        </ListItem>
        <ListItem
          flexDir="column"
          alignItems="start"
          gap="6"
          sx={{
            '& > div': {
              color: 'text',
              bgColor: '#f5f5f5',
              rounded: '8',
              py: '1.5',
              pr: '2',
              pl: '70px',
            },
          }}
        >
          <Box>بلندگو ندارد</Box>
          <Box>6570 گرم</Box>
          <Box>مات</Box>
          <Box>
            اداری ، خمیده ، طراحی و ادیت ، عکاسی ، کاربری عمومی ، گیمینگ
          </Box>
          <Box>LED</Box>
        </ListItem>
      </List>
      <Button
        pos="absolute"
        left={0}
        bottom="0"
        rightIcon={<AngleDownIcon boxSize="2.5" />}
        colorScheme="secondary"
        fontSize="13px"
        rounded="8"
        shadow="2px 3px 0px #15121D"
        h="8"
        w="99px"
        borderWidth="1.5px"
        iconSpacing="4px"
      >
        نمایش بیشتر
      </Button>
    </>
  );
}

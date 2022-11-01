import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { TikIcon } from 'components/common/Icons';

export default function AddressTable() {
  return (
    <List
      maxH="prose"
      spacing={3}
      overflowY="scroll"
      maxHeight="400px"
      ml={5}
      dir="ltr"
      pr={4}
      sx={{
        '&::-webkit-scrollbar': {
          width: '4px',
          background: '#eee',
          borderRadius: '7px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'secondary.500',
          borderRadius: '7px',
        },
        ' &::-webkit-scrollbar-track-piece:end': {
          background: '#eee',
          borderRadius: '7px',
          marginBottom: '26px',
        },
        ' &::-webkit-scrollbar-track-piece:start': {
          background: '#eee',
          borderRadius: '7px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#fff',
        },
      }}
    >
      {Array.from('omidfa').map((_, index) => (
        <ListItem
          key={index}
          rounded={24}
          border={'1.5px solid'}
          borderColor={index == 0 ? 'secondary.500' : 'divider'}
          p="13px 16px 18px 16px"
          flexDir="column"
          alignItems="start"
          dir="rtl"
        >
          <Box as="span" textStyle="medium16">
            احسان امانیان
          </Box>
          <Text fontSize={12} color="disableUl">
            استان گلستان - گنبد - خیابان اسد آبادی 24 - پلاک 16 - درب سفید
          </Text>
          <Divider borderColor="disableUl" />
          <HStack justifyContent="space-between" w="full" alignItems="end">
            <List spacing={2} mb={2}>
              <ListItem fontSize="12px" color="disableUl">
                کد پستی :
                <Box as="span" color="text">
                  ۹۸۴۱۷۲۱۳۵
                </Box>
              </ListItem>
              <ListItem fontSize="12px" color="disableUl">
                شماره موبایل :
                <Box as="span" color="text">
                  ۰۹۳۳۱۸۰۹۸۹۷
                </Box>
              </ListItem>
              <ListItem fontSize="12px" color="disableUl">
                شماره ثابت :
                <Box as="span" color="text">
                  ۰۲۱۵۵۹۵۴۹
                </Box>
              </ListItem>
            </List>
            <Flex flexWrap="wrap" gap="8px" w="138px">
              <Button
                leftIcon={<TikIcon boxSize="10px" />}
                colorScheme={'secondary'}
                fontSize="12px"
                fontWeight="400"
                border="1px solid #15121d"
                boxShadow="1.5px 2.5px 0px #15121D"
                h={6}
                w="137px"
                rounded={6}
              >
                آدرس پیش فرض
              </Button>
              <Button
                fontSize={12}
                fontWeight="400"
                boxShadow="1.5px 2.5px 0px #15121D"
                rounded={6}
                h={6}
                w="70px"
                border="1px solid #15121d"
                bgColor="comparison"
                _hover={{ bgColor: '#5C80FF' }}
                _active={{ bgColor: '#2E5DFF' }}
              >
                ویرایش
              </Button>
              <Button
                w="60px"
                h={6}
                pt="2px"
                fontSize={12}
                fontWeight="400"
                rounded={6}
                bgColor="#FF5E5E"
                border="1px solid #15121D"
                boxShadow="1.5px 2.5px 0px #15121D"
                _hover={{ bgColor: '#FF0000' }}
                _active={{ bgColor: '#CC0000' }}
              >
                حذف
              </Button>
            </Flex>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  CircleAddIcon,
  ShoppingBagIcon,
  TrashIcon,
} from 'components/common/Icons';
import Image from 'next/future/image';

export default function OrderList() {
  return (
    <Box h="max-content">
      <VStack h="full" p="24px 40px 32px 40px" spacing={6}>
        {/* <Center as="p" flex="1" textStyle="medium24" color="disableUl">
          هنوز هیچ موردی اضافه نشده است
        </Center> */}
        <Grid
          w="full"
          h="full"
          gridTemplateColumns="1fr 1fr"
          autoRows="max-content"
          gap="24px 20px"
        >
          {Array.from('omiddsfsdf').map((value, index) => (
            <GridItem
              key={index}
              bgColor="#F5F5F5"
              rounded={16}
              display="flex"
              alignItems="center"
              p="8px 16px 8px 12px"
            >
              <Center
                pos="relative"
                w="83px"
                h="83px"
                bgColor="#fff"
                rounded={16}
                p="0 8px"
                ml={2}
              >
                <Image
                  src="/images/Favorite.png"
                  alt="عکس تی وی"
                  width={136}
                  height={110}
                  style={{
                    filter: 'drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.08))',
                  }}
                />
              </Center>
              <Stack flexBasis="150px" textAlign="end" spacing={1}>
                <Box as="span" fontSize="13px">
                  MSI Optix G27C4 Full HD Gaming Monitor
                </Box>
                <Box fontSize={12} color="secondary.500">
                  <Box as="span" fontSize={16} ml={1}>
                    ۵٬۳۳۰٬۰۰۰
                  </Box>
                  تومان
                </Box>
              </Stack>
              <Stack mr="auto" spacing="14px">
                <IconButton
                  mr="auto"
                  icon={<TrashIcon />}
                  variant="solid"
                  minW={8}
                  w={8}
                  h={8}
                  rounded="10px"
                  aria-label="delete"
                  bgColor="#FF5E5E"
                  border="1.5px solid #15121D"
                  boxShadow="1px 2px 0px #15121D"
                  _hover={{ bgColor: '#FF0000' }}
                  _active={{ bgColor: '#CC0000' }}
                />
                <Button
                  leftIcon={<ShoppingBagIcon />}
                  colorScheme={'secondary'}
                  fontSize="12px"
                  fontWeight="400"
                  borderWidth="1.5px"
                  boxShadow=" 2px 3px 0px #15121D"
                  h={8}
                  w="110px"
                  rounded={10}
                  mb="4px !important"
                >
                  افزودن به سبد
                </Button>
              </Stack>
            </GridItem>
          ))}
        </Grid>
        <Button leftIcon={<CircleAddIcon />} alignSelf="end" h="47px">
          افزودن محصول
        </Button>
      </VStack>
    </Box>
  );
}

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import {
  AddIcon,
  TrashIcon,
  MinusIcon,
  DisCountIcon,
} from 'components/common/Icons';
import NextLink from 'components/custom/NextLink';
import Image from "next/image";

export default function CartModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay zIndex={0} />
      <DrawerContent
        rounded={'0 0 24px 0'}
        h="max-content"
        p="26px 16px 17px"
        boxShadow="2px 2px 13px rgba(0, 0, 0, 0.25)"
      >
        <DrawerHeader
          display="flex"
          justifyContent="space-between"
          p="0"
          mb="2"
        >
          <Text textStyle="bold20">سبد خرید شما</Text>
          <DrawerCloseButton
            position={'static'}
            color="#FF6666"
            borderColor="#FF6666"
            border="1px solid"
            rounded="full"
            fontSize="8"
            w={5}
            h={5}
          />
        </DrawerHeader>
        <Divider borderColor="#DCDCDC" />
        <DrawerBody
          display="flex"
          flexDir="column"
          gap={9}
          alignItems="center"
          px="0"
          mb="2"
        >
          <Flex flexDir="column" gap="4" alignSelf="flex-start">
            {Array.from('omid').map(l => (
              <Card
                key={l}
                variant="filled"
                p=" 8px 8px 2px"
                rounded="16"
                flexDir="row"
                bgColor="#F5F5F5"
                alignItems="center"
              >
                <CardHeader
                  p="10px 5px"
                  bgColor="white"
                  rounded="8"
                  mb="2"
                  ml="2"
                >
                  <Image
                    alt=""
                    src="/images/graphicCart.png"
                    width={50}
                    height={50}
                    style={{
                      filter: ' drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.16))',
                    }}
                  />
                </CardHeader>
                <CardBody p="0">
                  <Text fontSize="10" mb="8px">
                    کارت گرافیک ایسوس DUAL RX 6400{' '}
                  </Text>
                </CardBody>
                <CardFooter
                  p="0"
                  flexDir="column"
                  alignItems="flex-end"
                  mb="2px"
                >
                  <TrashIcon mb="14px" />
                  <Box fontSize="10" mb="2px" color="secondary.500">
                    ۲۵٬۳۲۰٬۰۰۰ تومان
                  </Box>
                  <Center
                    color="white"
                    bgColor="black"
                    rounded={3}
                    gap="8px"
                    h="4"
                    w="12"
                  >
                    <IconButton
                      variant="unstyled"
                      aria-label="remove"
                      icon={<MinusIcon boxSize={2.5} />}
                      h="min"
                      minW="0"
                    />
                    <Box fontSize={10}>۱</Box>
                    <IconButton
                      variant="unstyled"
                      aria-label="add"
                      icon={<AddIcon boxSize={2.5} />}
                      h="min"
                      minW="0"
                    />
                  </Center>
                </CardFooter>
              </Card>
            ))}
            <Box rounded="24px" border="1px solid #EEEEEE" p="3" mt="2">
              <Text fontSize="13" fontWeight="600" mb="2">
                کد تخفیف:
              </Text>
              <InputGroup>
                <InputLeftElement bgColor="#FF5E5E" rounded="12px">
                  <DisCountIcon boxSize={6} />
                </InputLeftElement>

                <Input placeholder="کد تخفیف خود را وارد کنید" />
              </InputGroup>
            </Box>
          </Flex>
          <Center flexDir="column" gap="2" pt="8">
            <Box
              border="1px solid #000"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="32px"
            >
              <AddIcon boxSize="13" />
            </Box>
            <Text textStyle="medium14">دوست محصول جدید اضافه کنی ؟</Text>
            <Text textStyle="medium12" color="#FF5E5E">
              ( سبد خرید شما خالی می باشد ! )
            </Text>
          </Center>
          <Flex w="full" justify="space-between" align="center" color="#FF5E5E">
            <Text textStyle="medium14">قیمت نهایی:</Text>
            <Box fontSize="20px">۰</Box>
          </Flex>
        </DrawerBody>
        <DrawerFooter p="0">
          <NextLink href="/cart">
            <Button
              variant="unstyled"
              bgColor="#27EE8E"
              fontSize="13"
              fontWeight="600"
              w="full"
              border="1.5px solid #15121D"
              shadow=" 3px 4px 0px #15121D"
              rounded="8"
              h="9"
              onClick={onClose}
            >
              مشاهده سبد خرید
            </Button>
          </NextLink>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

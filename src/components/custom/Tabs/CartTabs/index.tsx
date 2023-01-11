import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  Grid,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import {
  BlogIcon,
  DisCountIcon,
  OriginalIcon,
  ShoppingBagIcon,
  ColorPaletteIcon,
  TrashIcon,
  MinusIcon,
  AddIcon,
} from 'components/common/Icons';
import { EmptyCartVector } from 'components/common/Icons/Vectors';
import Image from "next/image";

export default function CartTab() {
  return (
    <Box as="section" maxW="1440px" w="100%" mx="auto" px="9" mt="10" mb="125">
      <Tabs
        isLazy
        lazyBehavior="keepMounted"
        bgColor="#fff"
        p={8}
        rounded={32}
        boxShadow=" 0px 0px 16px rgba(0, 0, 0, 0.04)"
      >
        <TabList
          sx={{
            '& button': {
              fontSize: '20px',
              fontWeight: '500',
              color: '#adadad',
              mb: '3',
              pos: 'relative',
              '&::before': {
                content: "''",
                w: '100%',
                h: '3.64px',
                bgColor: 'secondary.500',
                pos: 'absolute',
                roundedTop: '8px',
                bottom: '-16px',
                opacity: '0',
                visibility: 'hidden',
              },
              '&::after': {
                content: "'۰'",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgColor: 'secondary.500',
                rounded: 'full',
                mr: '2',
                w: '6',
                h: '6',
                color: 'white',
                opacity: '0',
                visibility: 'hidden',
                pb: '1px',
                transition: 'all .3s ',
              },
            },
          }}
        >
          <Tab
            _selected={{
              color: 'secondary.500',
              '&::before': { opacity: '1', visibility: 'visible' },
              '&::after': {
                opacity: '1',
                visibility: 'visible',
              },
            }}
          >
            <ShoppingBagIcon boxSize={6} ml={2} />
            سبد خرید
          </Tab>
          <Tab
            _selected={{
              color: 'secondary.500',
              '&::before': {
                opacity: '1',
                visibility: 'visible',
              },
              '&::after': {
                opacity: '1',
                visibility: 'visible',
              },
            }}
          >
            <BlogIcon boxSize={6} ml={2} />
            لیست سفارشات
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="32px 32px 0 32px" display="flex" gap="4">
            {/* <Center flexDir="column" gap="3" mb="8" mr="auto">
              <EmptyCartVector w="322" h="302" mb="5" />
              <Text textStyle="medium20" color="black">
                سبد خرید شما خالی می باشد !
              </Text>
              <Text fontSize="15" fontWeight="500" color="#adadad">
                در آترامارت کلی محصولات جذاب هست که بخوای ببینی !
              </Text>
            </Center> */}

            <Flex direction="column" gap="22px">
              <Card
                variant="outline"
                flexDir="row"
                p="16px 12px 16px 16px"
                rounded="20"
                borderWidth="2px"
                borderColor="#eee"
                cursor="pointer"
                h="max-content"
              >
                <CardHeader
                  p="0"
                  bgColor="#f5f5f5"
                  rounded={12}
                  boxSize="110px"
                  display={'flex'}
                  alignItems="center"
                  justifyContent="center"
                  ml="12px"
                >
                  <Image
                    alt=""
                    src="/images/watch.png"
                    width={86}
                    height={98}
                    style={{
                      filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.11))',
                      transform: 'rotate(-6.26deg)',
                    }}
                  />
                </CardHeader>
                <CardBody p="0" ml="128px" pt="2.5">
                  <List spacing="2">
                    <ListItem fontWeight={600}>
                      ساعت هوشمند ساسونگ (Galaxy Watch 5 sm-R910 )
                    </ListItem>
                    <ListItem color="#ADADAD">
                      <ListIcon as={OriginalIcon} />
                      اصالت و سلامت فیزیکی
                    </ListItem>
                    <ListItem color="#ADADAD">
                      <ListIcon as={ColorPaletteIcon} />
                      مشکی
                    </ListItem>
                  </List>
                </CardBody>
                <CardFooter
                  display="flex"
                  flexDir="column"
                  alignItems="end"
                  justifyContent="space-between"
                  p="0"
                >
                  <IconButton
                    icon={<TrashIcon boxSize={5} />}
                    variant="solid"
                    aria-label="delete"
                    rounded="10"
                    minW={0}
                    border="1.5px solid #15121d"
                    shadow="-1px 2px 0px #15121D"
                    boxSize={8}
                    bgColor="#FF5E5E"
                    mb="36px"
                  />
                  <Center
                    color="black"
                    bgColor="#98AFFF"
                    rounded={8}
                    gap="4"
                    h="7"
                    w="74px"
                    border="1.5px solid #15121d"
                    boxShadow="-2px 3px 0px #15121D"
                    mb="12px"
                  >
                    <IconButton
                      variant="unstyled"
                      aria-label="add"
                      icon={<AddIcon boxSize={2.5} />}
                      h="min"
                      minW="0"
                    />
                    <Box>۱</Box>
                    <IconButton
                      variant="unstyled"
                      aria-label="remove"
                      icon={<MinusIcon boxSize={2.5} />}
                      h="min"
                      minW="0"
                    />
                  </Center>
                  <Button
                    colorScheme="secondary"
                    boxShadow="-1px 2px 0px #15121D"
                    borderWidth="1px"
                    rounded={8}
                    h="10"
                    w="124px"
                  >
                    ۱٬۵۰۰٬۰۰۰
                    <Box as="span" mr="2px" fontSize="10px">
                      تومان
                    </Box>
                  </Button>
                </CardFooter>
              </Card>
              <Card
                variant="outline"
                flexDir="row"
                p="16px 12px 16px 16px"
                rounded="20"
                borderWidth="2px"
                borderColor="#eee"
                cursor="pointer"
                h="max-content"
              >
                <CardHeader
                  p="0"
                  bgColor="#f5f5f5"
                  rounded={12}
                  boxSize="110px"
                  display={'flex'}
                  alignItems="center"
                  justifyContent="center"
                  ml="12px"
                >
                  <Image
                    alt=""
                    src="/images/watch.png"
                    width={86}
                    height={98}
                    style={{
                      filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.11))',
                      transform: 'rotate(-6.26deg)',
                    }}
                  />
                </CardHeader>
                <CardBody p="0" ml="128px" pt="2.5">
                  <List spacing="2">
                    <ListItem fontWeight={600}>
                      ساعت هوشمند ساسونگ (Galaxy Watch 5 sm-R910 )
                    </ListItem>
                    <ListItem color="#ADADAD">
                      <ListIcon as={OriginalIcon} />
                      اصالت و سلامت فیزیکی
                    </ListItem>
                    <ListItem color="#ADADAD">
                      <ListIcon as={ColorPaletteIcon} />
                      مشکی
                    </ListItem>
                  </List>
                </CardBody>
                <CardFooter
                  display="flex"
                  flexDir="column"
                  alignItems="end"
                  justifyContent="space-between"
                  p="0"
                >
                  <IconButton
                    icon={<TrashIcon boxSize={5} />}
                    variant="solid"
                    aria-label="delete"
                    rounded="10"
                    minW={0}
                    border="1.5px solid #15121d"
                    shadow="-1px 2px 0px #15121D"
                    boxSize={8}
                    bgColor="#FF5E5E"
                    mb="36px"
                  />
                  <Center
                    color="black"
                    bgColor="#98AFFF"
                    rounded={8}
                    gap="4"
                    h="7"
                    w="74px"
                    border="1.5px solid #15121d"
                    boxShadow="-2px 3px 0px #15121D"
                    mb="12px"
                  >
                    <IconButton
                      variant="unstyled"
                      aria-label="add"
                      icon={<AddIcon boxSize={2.5} />}
                      h="min"
                      minW="0"
                    />
                    <Box>۱</Box>
                    <IconButton
                      variant="unstyled"
                      aria-label="remove"
                      icon={<MinusIcon boxSize={2.5} />}
                      h="min"
                      minW="0"
                    />
                  </Center>
                  <Button
                    colorScheme="secondary"
                    boxShadow="-1px 2px 0px #15121D"
                    borderWidth="1px"
                    rounded={8}
                    h="10"
                    w="124px"
                  >
                    ۱٬۵۰۰٬۰۰۰
                    <Box as="span" mr="2px" fontSize="10px">
                      تومان
                    </Box>
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
            <Center
              flexDir="column"
              w="296px"
              justifyContent="flex-start"
              mr="auto"
            >
              <Box
                rounded="24px"
                border="1px solid #EEEEEE"
                p="3"
                w="full"
                mb="4"
              >
                <List spacing={5} mb="17.5">
                  <ListItem justifyContent="space-between">
                    <Text fontSize={13} color="#adadad">
                      قیمت کالا ها (۰)
                    </Text>
                    <Box color="text" fontSize={11}>
                      <Box as="span" fontSize="20">
                        ۰
                      </Box>{' '}
                      تومان
                    </Box>
                  </ListItem>
                  <ListItem justifyContent="space-between">
                    <Text fontSize={13} color="#adadad">
                      قیمت کالا ها (۰)
                    </Text>
                    <Box color="text" fontSize={11}>
                      <Box as="span" fontSize="20">
                        ۰
                      </Box>{' '}
                      تومان
                    </Box>
                  </ListItem>
                </List>
                <Divider mb="3" />
                <Button w="full" rounded="12" boxShadow="2px 3px 0px #15121D">
                  ادامه فرایند
                </Button>
              </Box>
              <Box
                mb="14"
                rounded="24px"
                border="1px solid #EEEEEE"
                p="3"
                w="full"
              >
                <Text fontSize="13" fontWeight="600" mb="2">
                  کد تخفیف:
                </Text>
                <InputGroup>
                  <InputLeftElement bgColor="#FF5E5E" rounded="12px">
                    <DisCountIcon boxSize={6} />
                  </InputLeftElement>

                  <Input
                    placeholder="کد تخفیف خود را وارد کنید"
                    p="0 8px 0 40px"
                    focusBorderColor="#FF5E5E"
                  />
                </InputGroup>
              </Box>
              <Button
                alignSelf="end"
                w="206px"
                mt="auto"
                h="48px"
                rounded="12"
                color="black"
              >
                افزودن محصول
              </Button>
            </Center>
          </TabPanel>
          <TabPanel
            p="8"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* <UnauthorizedVector w="380" h="260" mb="46px" />
            <Flex
              gap={1.5}
              fontSize={20}
              fontWeight="600"
              color="#b8b8b8"
              pos="relative"
              mb="6"
              _after={{
                content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 79 78'%3E%3Cpath fill='%2315121D' d='M3.902 42.308C8.835 29.58 22.498 21.931 35.443 19.77c6.206-1.038 12.983-.432 17.77 4.05 2.244 2.102 3.874 4.942 4.07 8.048.126 2.01-.4 4.565-2.457 5.43-2.781 1.173-4.066-2.09-3.05-4.227 1.85-3.903 7.988-2.276 10.958-1.046 3.925 1.626 7.27 4.319 10.329 7.211.822.776 1.911-.62 1.084-1.389-3.522-3.294-7.468-6.334-12.096-7.882-3.268-1.092-7.462-1.72-10.355.635-2.19 1.784-2.822 5.734-.515 7.72 2.73 2.348 6.413-.1 7.4-2.956C61.1 28.09 54.31 20.802 47.874 18.726c-7.947-2.561-16.975-.198-24.354 3.094-8.967 4.01-16.958 10.743-20.348 20.186-.172.477.544.784.73.302Z'/%3E%3Cpath fill='%2315121D' d='M65.108 39.067c.28-.814 2.936-.451 3.504-.383 1.116.137 2.165.478 3.21.878.832.316 1.979.749 2.632-.18.606-.868-.104-2.203-.38-3.046-.695-2.15-1.329-4.34-2.129-6.455-.38-1.012-1.795-.385-1.523.609.469 1.696 1.069 3.362 1.618 5.034.147.444.934 1.983.704 2.41-.216.401-.86-.07-1.416-.227-1.893-.538-5.42-1.185-7.01.317-.203.196-.288.422-.2.697l.112.339c.127.382.745.387.877.007ZM2.159 41.863c-.49.614.068 1.564.848 1.428.14-.03.294-.114.343-.262.214-.67.107-1.355-.398-1.867-.135-.136-.352-.26-.547-.154-1.206.63-.75 2.204-.064 3.083.339.434.829.807 1.41.68.686-.147.932-.844.898-1.477-.062-1.158-.901-2.795-2.303-2.415-1.368.37-1.117 2.221-.358 3.04.801.861 2.165.924 2.878-.08.639-.905.41-2.29-.768-2.584-1.256-.313-2.438.871-1.935 2.117.212.504.684.94 1.234 1.03.658.113 1.275-.283 1.243-.992-.018-.425-.177-.873-.276-1.284-.088-.356-.183-.714-.471-.964-.447-.395-1.075-.34-1.538.002a1.53 1.53 0 0 0-.602 1.574c.183.786.846 1.298 1.486 1.716.242.158.638.184.813-.1.717-1.136.468-2.738-.73-3.453-.253-.151-.642-.193-.825.101-.688 1.092.105 2.497 1.4 2.46.761-.023.611-1.193-.145-1.172-.219.004-.45-.371-.33-.565-.275.037-.55.068-.826.105.61.357.95 1.158.543 1.81.273-.033.546-.066.813-.1-.349-.23-1.405-.839-1.002-1.367.159-.21.174-.157.257.005.16.31.218.833.286 1.174.011.111.034.088.068-.06a.41.41 0 0 1-.161-.09c-.085-.128-.204-.2-.23-.37-.05-.305.205-.513.495-.522.583-.023.546.616.27.95-.372.45-.962.205-1.26-.208-.168-.233-.293-.567-.225-.858.096-.393.428-.324.668-.085.234.233.356.668.421.986.057.27.113.843-.265.492-.346-.327-.994-1.439-.42-1.766-.188-.009-.378-.008-.566-.011.287.27.334.63.241 1 .12-.122.247-.244.37-.369-.09.043-.134.008-.134-.104.28-.404-.297-.864-.606-.474Z'/%3E%3C/svg%3E")`,
                pos: 'absolute',
                w: '75px',
                left: '68px',
                top: '-160%',
              }}
            >
              برای دسترسی به این قسمت ابتدا باید به
              <Box
                color="secondary.500"
                textDecoration="line-through"
                textDecorationThickness="1px"
              >
                حساب کاربری
              </Box>{' '}
              خود
              <Box
                color="primary.500"
                textDecoration="line-through"
                textDecorationThickness="1px"
              >
                ورود
              </Box>
              کنید
            </Flex>
            <Button w="206px" mt="auto" h="48px" rounded="12" color="black">
              ورود به حساب کاربری
            </Button> */}
            {/* <Flex
              flexDir="column"
              gap="5"
              alignItems="center"
              justifyContent="center"
            >
              <EmptyOrderListVector w="354" h="233" />
              <Text color=" #B8B8B8" fontSize={20} fontWeight="500">
                لیست خرید شما خالی می باشد
              </Text>
            </Flex> */}
            <Grid
              gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
              rowGap="5"
              columnGap="6"
              sx={{
                '& > .chakra-card:hover ': {
                  borderColor: 'secondary.500',
                  '& .btn': { bgColor: 'secondary.500', color: 'white' },
                },
              }}
            >
              {Array.from('1234567').map(v => (
                <Card
                  key={v}
                  variant="outline"
                  flexDir="row"
                  p="16px 12px 16px 16px"
                  rounded="20"
                  borderWidth="2px"
                  borderColor="#eee"
                  cursor="pointer"
                >
                  <CardHeader
                    p="0"
                    bgColor="#f5f5f5"
                    rounded={12}
                    boxSize="76"
                    display={'flex'}
                    alignItems="center"
                    justifyContent="center"
                    ml="10.6px"
                  >
                    <Image
                      alt=""
                      src="/images/watch.png"
                      width={56}
                      height={86}
                      style={{
                        filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.11))',
                        transform: 'rotate(-6.26deg)',
                      }}
                    />
                  </CardHeader>
                  <CardBody p="0" ml="146px">
                    <List fontSize="11" spacing="2">
                      <ListItem fontSize="13">شماره سفارش - ۲۶۵۸۹۸۶</ListItem>
                      <ListItem color="#ADADAD">
                        وضعیت سفارش :<Box color="text">آماده سازی</Box>
                      </ListItem>
                      <ListItem color="#ADADAD">
                        کد رهگیری :<Box color="text">۱۲۳۴۲۴۵۴۳۵۶۴۷۴۵۴</Box>
                      </ListItem>
                    </List>
                  </CardBody>
                  <CardFooter
                    display="flex"
                    flexDir="column"
                    alignItems="end"
                    justifyContent="space-between"
                    p="0"
                  >
                    <Button
                      rounded={4}
                      boxShadow="-1px 2px 0px #15121D"
                      borderWidth="1px"
                      h="5"
                      color="text"
                      fontSize="10px"
                      fontWeight={500}
                      w="68px"
                    >
                      ۱۲ مرداد ۱۴۰۱
                    </Button>
                    <Button
                      bgColor="#EEEEEE"
                      boxShadow="-1px 2px 0px #15121D"
                      color="text"
                      borderWidth="1px"
                      rounded={8}
                      h="8"
                      w="107px"
                      className="btn"
                    >
                      ۱٬۵۰۰٬۰۰۰
                      <Box as="span" mr="2px" fontSize="10px">
                        تومان
                      </Box>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

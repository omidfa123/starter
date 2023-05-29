import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  HartOutlineIcon,
  SearchIcon,
  ShoppingBagIcon,
} from 'components/common/Icons';
import Image from "next/image";
import { useRef } from 'react';

export default function SearchInput() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: onClose,
  });
  return (
    <Popover
      isLazy
      lazyBehavior="keepMounted"
      openDelay={0}
      matchWidth
      gutter={0}
      autoFocus={false}
      isOpen={isOpen}
    >
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <InputGroup
              gridArea="search"
              isolation={'isolate'}
              onClick={onOpen}
            >
              <InputLeftElement
                h={[7, 10]}
                w={[7, 10]}
                bgColor="primary.500"
                rounded={[8, 14]}
                top={[1.5, 2]}
                left={2}
                shadow="0px 0px 4px rgba(255, 153, 0, 0.47)"
                cursor="pointer"
              >
                <SearchIcon boxSize={[4, 6]} color="white" />
              </InputLeftElement>
              <Input
                p={[2, 4, 6]}
                placeholder="دنبال چی میگردی ؟"
                rounded={isOpen ? '16px 16px 0 0 ' : [12, 16]}
                bgColor="white"
                shadow="0px 0px 8px rgba(0, 0, 0, 0.02)"
                h={[10, 14]}
                border="1.5px solid transparent"
                borderColor={isOpen ? '#ff9900' : 'transparent'}
                borderBottom={isOpen ? '1.5px solid #ff9900 ' : undefined}
                focusBorderColor="#ff9900"
                fontSize={['11px', 16]}
                sx={{
                  '&:hover , &:focus-visible': {
                    bgColor: 'white',
                    borderColor: '#ff9900',
                  },
                }}
              />
            </InputGroup>
          </PopoverTrigger>
          <PopoverContent
            ref={ref}
            w="100%"
            h="304px"
            border="0"
            borderRadius="0 0 16px 16px"
          >
            <Grid
              gridTemplateColumns="1.12fr  2fr"
              columnGap="10"
              h="full"
              py="4"
              px="6"
              textStyle="medium13"
            >
              <Box>
                <Center
                  justifyContent="space-between"
                  bgColor="primary.500"
                  rounded="8"
                  color="white"
                  p="6px 12px 6px 8px"
                  pos="relative"
                  border="1.3px solid #15121d"
                  _after={{
                    content: "''",
                    pos: 'absolute',
                    w: '100%',
                    h: '100%',
                    bgColor: 'text',
                    rounded: '8',
                    right: '0',
                    zIndex: '-1',
                    transform: 'rotate(-1.5deg)',
                  }}
                >
                  <Text>جستجو های مشابه</Text>
                  <AngleDownIcon transform="rotate(90deg)" />
                </Center>
                <List color="disableUl" spacing={2} mt="18px">
                  <ListItem gap={0}>
                    <ListIcon as={SearchIcon} boxSize={6} />
                    <Box>کارت گرافیک</Box>
                  </ListItem>
                  <ListItem gap={0}>
                    <ListIcon as={SearchIcon} boxSize={6} />
                    <Box>کارت گرافیک گیمینگ</Box>
                  </ListItem>
                  <ListItem gap={0}>
                    <ListIcon as={SearchIcon} boxSize={6} />
                    <Box>کارت گرافیک خفن</Box>
                  </ListItem>
                </List>
              </Box>
              <Flex align="start">
                <Divider orientation="vertical" display="inline-block" />
                <Stack w="full" mr="40px" spacing="0">
                  <Center
                    maxW="336px"
                    w="full"
                    justifyContent="space-between"
                    bgColor="primary.500"
                    rounded="8"
                    color="white"
                    p="6px 12px 6px 8px"
                    pos="relative"
                    mb="4"
                    border="1.3px solid #15121d"
                    _after={{
                      content: "''",
                      pos: 'absolute',
                      w: '100%',
                      h: '100%',
                      bgColor: 'text',
                      rounded: '8',
                      right: '0',
                      zIndex: '-1',
                      transform: 'rotate(-1.5deg)',
                    }}
                  >
                    <Text>محصولات</Text>
                    <AngleDownIcon transform="rotate( 90deg)" />
                  </Center>
                  <HStack spacing="56px">
                    <Grid rowGap={2}>
                      {Array.from('om').map((_, index) => (
                        <GridItem
                          key={index}
                          bgColor="#F5F5F5"
                          rounded={16}
                          display="flex"
                          alignItems="center"
                          p="8px"
                        >
                          <Center
                            pos="relative"
                            w="88px"
                            h="88px"
                            bgColor="#fff"
                            rounded={16}
                            p="0 8px"
                            ml={4}
                          >
                            <Image
                              src="/images/Favorite.png"
                              alt="عکس تی وی"
                              width={136}
                              height={110}
                              style={{
                                filter:
                                  ' drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.16))',
                              }}
                            />
                          </Center>
                          <Stack textAlign="end" spacing={'7px'}>
                            <Box
                              as="span"
                              fontSize="13px"
                              whiteSpace={'nowrap'}
                            >
                              کارت گرافیک ایسوس DUAL RX 6400 4G
                            </Box>
                            <Box
                              fontSize={13}
                              color="secondary.500"
                              alignSelf="start"
                            >
                              <Box as="span" fontSize={20} ml={1}>
                                ۵٬۳۳۰٬۰۰۰
                              </Box>
                              تومان
                            </Box>
                          </Stack>
                          <Stack mr="auto" spacing="45px">
                            <IconButton
                              mr="auto"
                              icon={<HartOutlineIcon boxSize={3} />}
                              variant="ghost"
                              minW={5}
                              w={5}
                              h={5}
                              isRound
                              aria-label="favorite"
                              border="1.5px solid #15121D"
                              color="text"
                              _hover={{
                                bgColor: '#fff',
                                '& svg': { color: '#FF0000' },
                                borderColor: 'white',
                              }}
                              _active={{
                                bgColor: 'white',
                                '& svg': { color: '#CC0000' },
                                borderColor: 'white',
                              }}
                            />
                            <Button
                              leftIcon={<ShoppingBagIcon boxSize="14px" />}
                              colorScheme={'secondary'}
                              fontSize="10px"
                              fontWeight="500"
                              borderWidth="0"
                              boxShadow="none"
                              h={6}
                              w="90px"
                              rounded={6}
                            >
                              افزودن به سبد
                            </Button>
                          </Stack>
                        </GridItem>
                      ))}
                    </Grid>
                    <Button
                      variant="solid"
                      rightIcon={
                        <AngleDownIcon
                          transform={'rotate(90deg)'}
                          boxSize="8px"
                        />
                      }
                      fontWeight="500"
                      fontSize={10}
                      rounded={8}
                      h="6"
                      w="82px"
                      alignSelf="end"
                    >
                      مشاهده همه
                    </Button>
                  </HStack>
                </Stack>
              </Flex>
            </Grid>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}

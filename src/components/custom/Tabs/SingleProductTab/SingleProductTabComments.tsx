import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  List,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  AddIcon,
  AngleDownIcon,
  LikeIcon,
  MinusIcon,
  StarFilledIcon,
} from 'components/common/Icons';
import SingleProductModalComments from 'components/custom/Modals/SingleProductModal/SingleProductModalComments';

export default function SingleProductTabComments() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex px="6" pt="9" gap="56px">
        <Flex
          flexDir="column"
          p="4"
          rounded="24"
          border="1.5px solid #eee"
          h="max-content"
        >
          <Flex gap="2" fontSize="32px" mb="1" align={'center'}>
            <StarFilledIcon boxSize={4} />
            ۴.۵
          </Flex>
          <Flex gap="2" fontSize="11" color="description" mb="6">
            <StarFilledIcon boxSize={3} />
            <StarFilledIcon boxSize={3} />
            <StarFilledIcon boxSize={3} />
            <StarFilledIcon boxSize={3} />
            <StarFilledIcon boxSize={3} />
            از مجموع امتیازات
          </Flex>
          <List spacing={2} mb="8">
            {Array.from('qwert').map(v => (
              <ListItem key={v} flexDir={'column'} alignItems="start" gap="0">
                <Text fontSize={11}> کیفیت تصویر</Text>
                <Flex
                  pos="relative"
                  _before={{
                    content: "''",
                    w: '189px',
                    h: '2',
                    rounded: 'full',
                    bgColor: '#CAB7FF',
                  }}
                  _after={{
                    content: "''",
                    w: '150px',
                    h: '2',
                    rounded: 'full',
                    bgColor: '#9773FF',
                    pos: 'absolute',
                  }}
                  gap="3"
                  align={'center'}
                >
                  ۴.۷
                </Flex>
              </ListItem>
            ))}
          </List>
          <Text fontSize={11} color="#9F9F9F" mb="4">
            دیدگاه شما درباره این محصول چیه ؟
          </Text>
          <Button
            variant="outline"
            rounded="8"
            w="224px"
            color="primary.500"
            fontSize="13"
            fontWeight="500"
            onClick={onOpen}
          >
            ثبت دیدگاه
          </Button>
        </Flex>
        <List spacing={'44px'} pt="9" mb={'112px'} w="100%">
          {Array.from('odddd').map((_, index) => (
            <ListItem key={index} flexDir="column" alignItems="start" gap="0">
              <Text fontSize={13} color="description">
                احسان امانیان
              </Text>
              <Flex justify="space-between" align={'center'} w="100%" mb="4">
                <Box fontWeight="500">خیلی گرونه خدایی !</Box>
                <Flex
                  flexDir="column"
                  gap="1"
                  fontSize="11"
                  color="description"
                >
                  (۳ شهریور ۱۴۰۲)
                  <Badge
                    display="block"
                    w="max-content"
                    alignSelf={'end'}
                    rounded={8}
                    bgColor="#2DC52A"
                    p="1px 13px"
                    fontWeight="400"
                    fontSize="20px"
                    color="white"
                  >
                    ۳.۰
                  </Badge>
                </Flex>
              </Flex>
              <Divider borderBottomWidth="1.5px" />

              <Text mb={3} mt={4}>
                واقعا با این قیمتی که گذاشتید آدم نمیتونه لپتاپی که دوست داره رو
                بخره آخه چه وضعشه !!!!
              </Text>

              <Flex justify="space-between" w="100%" mb="9">
                <Flex flexDir="column" gap="3">
                  <Flex
                    color="secondary.500"
                    gap="2"
                    fontSize={13}
                    fontWeight="500"
                    align="center"
                  >
                    <AddIcon boxSize={3} />
                    باتری قوی
                  </Flex>
                  <Divider />
                  <Flex
                    color="primary.500"
                    gap="2"
                    fontSize={13}
                    fontWeight="500"
                    align="center"
                  >
                    <MinusIcon boxSize={3} />
                    بدنه ضعیف
                  </Flex>
                </Flex>
                <Center color="description" gap={4} alignSelf="end">
                  <Box as="span">
                    ۱
                    <LikeIcon transform="scale(1 ,-1)" boxSize="20px" mr={1} />
                  </Box>

                  <Box as="span">
                    ۳
                    <LikeIcon boxSize="20px" mr={2} />
                  </Box>
                </Center>
              </Flex>
              <Divider borderBottomWidth="1.5px" borderColor="#ADADAD" />
            </ListItem>
          ))}
        </List>
      </Flex>
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
      <SingleProductModalComments onClose={onClose} isOpen={isOpen} />
    </>
  );
}

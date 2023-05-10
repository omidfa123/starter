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
import { AngleDownIcon, LikeIcon } from 'components/common/Icons';
import SingleProductModalAnswer from 'components/custom/Modals/SingleProductModal/SingleProductModalAnswer';
import SingleProductModalAsk from 'components/custom/Modals/SingleProductModal/SingleProductModalAsk';
import SingleProductModalComments from 'components/custom/Modals/SingleProductModal/SingleProductModalComments';

export default function SingleProductTabQuestions() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const disClosure = useDisclosure();
  return (
    <>
      <Flex pt="37px" gap="56px">
        <Box border="1.5px solid #eee" p="4" rounded="24" h="max-content">
          <Text fontSize="11" color="description" mb="2">
            سوال شما درباره این محصول چیه ؟
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
            ثبت پرسش
          </Button>
        </Box>
        <List spacing={12} pt="6" mb={'112px'} w="100%">
          {Array.from('odddd').map((_, index) => (
            <ListItem key={index} flexDir="column" alignItems="start" gap="0">
              <Text fontSize={13} color="description" mb="1">
                احسان امانیان
              </Text>
              <Flex justify="space-between" align={'center'} w="100%" mb="4">
                <Box fontWeight="500">سلام ، برای گیم مناسب هست ؟</Box>
                <Box fontSize="11" color="description">
                  (۳ شهریور ۱۴۰۲)
                </Box>
              </Flex>
              <Divider w="87%" borderBottomWidth="1.5px" />
              <Flex mb={8} mt={'21.5px'} gap="4">
                <Badge
                  display="block"
                  w="max-content"
                  rounded={8}
                  bgColor="divider"
                  color="#7D7D7D"
                  p="1.5px 10px"
                  fontWeight="400"
                  fontSize="14px"
                >
                  پاسخ
                </Badge>
                <Text>
                  نه بابا ، فقط کاربری تجاری داره و اصلا به درد بازی نمی خوره
                </Text>
              </Flex>
              <Flex justify="space-between" w="100%" mb="9">
                <Center
                  color="secondary.500"
                  cursor="pointer"
                  gap="2"
                  fontSize={14}
                  fontWeight="400"
                  onClick={disClosure.onOpen}
                >
                  ثبت پاسخ
                  <AngleDownIcon boxSize={2.5} transform={'rotate(90deg)'} />
                </Center>
                <Center color="description" gap={4}>
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
      <SingleProductModalAsk isOpen={isOpen} onClose={onClose} />
      <SingleProductModalAnswer
        isOpen={disClosure.isOpen}
        onClose={disClosure.onClose}
      />
    </>
  );
}

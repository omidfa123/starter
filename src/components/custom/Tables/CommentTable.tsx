import {
  Avatar,
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { LikeIcon } from 'components/common/Icons';

export function CommentTable() {
  return (
    <List spacing={4} mb={10}>
      {Array.from('omid').map((_, index) => (
        <ListItem key={index} rounded={24} border={'1.5px solid #eee'} p={4}>
          <Avatar
            name="امید فاریابی"
            w="53px"
            h="53px"
            ml={3}
            alignSelf="start"
          />
          <Stack spacing={'22px'} mt={2.5}>
            <Box>
              <Box
                as="span"
                textStyle="medium16"
                textAlign="start"
                _after={{
                  content: "'( ۳ شهریور ۱۴۰۲ )'",
                  fontSize: '11px',
                  fontWeight: '400',
                  mr: '8px',
                  color: 'description',
                }}
              >
                احسان امانیان
              </Box>
              <Text fontSize="14px" mt={1} color="description">
                سلام، رزولوشن این مانیتور 2k هستش، 1440p هست باقی کامنتا اشتباه
                نوشتن. اگر که مدل g9 neo باشه HDR 2000 داره که در نوع خود بی
                نظیره.
              </Text>
            </Box>
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
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
export function AnsCommentTable() {
  return (
    <List spacing={4} mb={10}>
      {Array.from('omid').map((_, index) => (
        <ListItem
          key={index}
          rounded={24}
          border={'1.5px solid #eee'}
          p={4}
          flexDir="column"
        >
          <Center h="24px" gap={4} alignSelf="start">
            <Badge
              display="block"
              w="max-content"
              rounded={4}
              bgColor="divider"
              color="#7D7D7D"
              p="3px 14px"
            >
              سوال
            </Badge>
            <Divider orientation="vertical" rounded={6} h="80%" />
            <Box
              as="span"
              textStyle="medium16"
              _after={{
                content: "'( ۳ شهریور ۱۴۰۲ )'",
                fontSize: '11px',
                fontWeight: '400',
                mr: '8px',
                color: 'description',
              }}
            >
              این تلوزیون به چه دردی میخوره ؟
            </Box>
          </Center>
          <Divider my={1.5} />
          <Flex w="full">
            <Avatar
              name="امید فاریابی"
              w="53px"
              h="53px"
              ml={3}
              alignSelf="start"
            />
            <Stack spacing={'22px'} mt={2.5} w="full">
              <Box>
                <Box
                  as="span"
                  textStyle="medium16"
                  textAlign="start"
                  _after={{
                    content: "'( ۳ شهریور ۱۴۰۲ )'",
                    fontSize: '11px',
                    fontWeight: '400',
                    mr: '8px',
                    color: 'description',
                  }}
                >
                  احسان امانیان
                </Box>
                <Badge
                  display="block"
                  w="max-content"
                  rounded={4}
                  bgColor="divider"
                  color="#7D7D7D"
                  p="3px 14px"
                  mb={2}
                  mt={'12px'}
                >
                  پاسخ
                </Badge>
                <Text fontSize="14px" color="description">
                  به درد ، درد بی درمون !
                </Text>
              </Box>
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
            </Stack>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
}

import {
  Box,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import NextLink from 'components/custom/NextLink';
import {
  AngleDownIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  TelIcon,
  UserIcon,
} from '../Icons';
import Image from 'next/future/image';
export default function Header() {
  return <div>omid</div>;
}

// <Box as="header" w="full">
// <HStack
//   as="nav"
//   bgGradient="linear(90deg, bgGradient.one  0%, bgGradient.two 100%)"
//   borderRadius="0px 0px 24px 24px"
//   shadow="0px 4px 8px rgba(0, 0, 0, 0.03)"
//   px={32}
//   justifyContent="space-between"
//   alignItems="center"
//   display={['none', null, 'flex']}
// >
//   <List
//     display="flex"
//     gap={6}
//     textStyle="medium13"
//     color="disableText"
//     sx={{
//       '& li:hover': { color: 'text' },
//       '& li:active': { color: 'disableText' },
//     }}
//     py={3.5}
//   >
//     <ListItem>
//       <NextLink href={'/credit'} as="خرید-اقساطی">
//         <Link>خرید اقساطی</Link>
//       </NextLink>
//     </ListItem>
//     <ListItem>
//       <NextLink href={'/Organization'} as="فروش-سازمانی">
//         <Link>فروش سازمانی</Link>
//       </NextLink>
//     </ListItem>
//     <ListItem>
//       <NextLink href={'/blog'} as="مجله-آترا">
//         <Link>مجله آترا</Link>
//       </NextLink>
//     </ListItem>
//     <ListItem>
//       <NextLink href={'/aboutUs'} as="درباره-ما">
//         <Link>درباره ما</Link>
//       </NextLink>
//     </ListItem>
//   </List>
//   <Link href="tel:0217760225" variant="link">
//     <Box as="span" textStyle={'regular14'}>
//       ۰۲۱-۷۷۶۰۲۲۵
//     </Box>
//     <TelIcon boxSize={7} mr={2} />
//   </Link>
// </HStack>
// <Box pb={[8, null, 6]} />
// <HStack px={[6, null, 32]} justifyContent="space-between">
//   <MenuIcon display={['block', null, 'none']} />
//   <NextLink passHref={false}>
//     <Box as="span">
//       <Image
//         src="/images/atramart_logo.png"
//         alt="لوگو سایت آترامارت"
//         width={154}
//         height={34}
//       />
//     </Box>
//   </NextLink>
//   <Link href="tel:0217760225" display={['block', null, 'none']}>
//     <TelIcon boxSize={7} mr={2} />
//   </Link>
//   <List
//     display={['none', null, 'flex']}
//     textStyle="medium14"
//     color="disableText"
//     sx={{ '& li:hover': { color: 'text' } }}
//     gap={6}
//   >
//     <ListItem>
//       محصولات ما
//       <ListIcon as={AngleDownIcon} boxSize={2.5} />
//     </ListItem>
//     <ListItem>
//       <NextLink href="/assembly" as="کیس-اسمبل-شده">
//         کیس اسمبل شده
//       </NextLink>
//     </ListItem>
//     <ListItem>
//       <NextLink href="/assembly" as="کیس-اسمبل-آنلاین">
//         اسمبل آنلاین
//       </NextLink>
//     </ListItem>
//     <ListItem>
//       <NextLink href="/game" as="گیمینگ">
//         گیمینگ
//       </NextLink>
//     </ListItem>
//     <ListItem>
//       دست دوم
//       <ListIcon as={AngleDownIcon} boxSize={2.5} />
//     </ListItem>
//   </List>

//   <HStack>
//     <ShoppingBagIcon boxSize={9} cursor="pointer" />
//     <UserIcon boxSize={9} cursor="pointer" />
//   </HStack>
// </HStack>
// <Divider my={4} borderColor={['divider', null, 'transparent']} />
// <Box px={[6, null, 32]}>
//   <InputGroup>
//     <InputLeftElement
//       bgColor="primary.500"
//       rounded="0.875rem"
//       top={2}
//       left={2}
//       shadow="0px 0px 4px rgba(255, 153, 0, 0.47)"
//       cursor="pointer"
//     >
//       <SearchIcon boxSize={6} />
//     </InputLeftElement>
//     <Input
//       placeholder="دنبال چی میگردی ؟"
//       rounded="1rem"
//       bgColor="white"
//       shadow="0px 0px 8px rgba(0, 0, 0, 0.02)"
//       h={14}
//       border="none"
//       focusBorderColor="#ff9900"
//     />
//   </InputGroup>
// </Box>
// <Divider my={4} borderColor={['divider', null, 'transparent']} />
// </Box>

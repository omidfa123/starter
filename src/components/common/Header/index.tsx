import {
  Box,
  Divider,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
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

const topNavLinks = [
  { href: '/credit', text: 'خرید اقساطی' },
  { href: '/Organization', text: 'فروش سازمانی' },
  { href: '/blog', text: 'مجله آترا' },
  { href: '/about-us', text: 'درباره ما' },
];
const headerNavList = [
  { href: '/assembly', text: 'کیس اسمبل شده' },
  { href: '/assembly/online', text: 'اسمبل آنلاین' },
  { href: '/gaming', text: 'گیمینگ' },
];
export default function Header() {
  return (
    <>
      <Box
        minH={['4.5625rem', '3.625rem', '3rem']}
        maxW="1280px"
        w="full"
        bgGradient="linear(90deg, bgGradient.one 0%, bgGradient.two 100%)"
        shadow={'0px 4px 8px rgba(0, 0, 0, 0.03)'}
        rounded=" 0px 0px 24px 24px"
        pos="absolute"
        top="0"
        left="50%"
        transform={'translate(-50%, 0%)'}
        zIndex="hide"
      />
      <Grid
        gridTemplateColumns={[
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
          'repeat(5, 1fr)',
        ]}
        layerStyle="container"
        gridTemplateAreas={[
          `
          " menu     logo     tel"
          " search   search   bag "
          " divider  divider  divider"
         `,
          `
         " menu     logo     tel"
         " search   search   bag "
         " divider  divider  divider"
        `,
          `
         " navLinks navLinks .......  ......  tel"
         " logo     navList  navList  navList   bag"
         " search   search   search   search  search"
        `,
        ]}
        rowGap={[10, 8]}
        pt={[7, 2.5, 0]}
      >
        <Box gridArea="menu" display={['block', 'block', 'none']}>
          <MenuIcon boxSize={[6, 10]} />
        </Box>
        <List
          display={['none', 'none', 'flex']}
          gridArea="navLinks"
          gap={6}
          textStyle="medium13"
          color="disableText"
          sx={{
            '& li:hover': { color: 'text' },
            '& li:active': { color: 'disableText' },
          }}
          py={3.5}
        >
          {topNavLinks.map(link => (
            <ListItem key={link.href}>
              <NextLink href={link.href}>
                <Link>{link.text}</Link>
              </NextLink>
            </ListItem>
          ))}
        </List>
        <Link
          gridArea="tel"
          href="tel:0217760225"
          variant="link"
          display="flex"
          alignItems="center"
          justifyContent="end"
          gap={2}
        >
          <Text display={['none', 'block']}>۰۲۱-۷۷۶۰۲۲۵۰</Text>
          <TelIcon boxSize={7} />
        </Link>
        <NextLink passHref={false}>
          <Box
            as="span"
            pos="relative"
            alignSelf="start"
            width={['138px', '154px']}
            height={['30px', '34px']}
            gridArea="logo"
          >
            <Image
              src="/images/atramart_logo.png"
              alt="لوگو سایت آترامارت"
              fill
              priority={true}
              sizes="
               (min-width: 30em ) 138px
               (min-width: 48em)  154px
              "
            />
          </Box>
        </NextLink>
        <List
          display={['none', 'none', 'flex']}
          gridArea="navList"
          justifySelf="center"
          textStyle="medium14"
          color="disableText"
          sx={{ '& li:hover': { color: 'text' } }}
          gap={6}
        >
          <ListItem>
            محصولات ما
            <ListIcon as={AngleDownIcon} boxSize={2.5} />
          </ListItem>
          {headerNavList.map(list => (
            <ListItem key={list.href}>
              <NextLink href={list.href}>{list.text}</NextLink>
            </ListItem>
          ))}
          <ListItem>
            دست دوم
            <ListIcon as={AngleDownIcon} boxSize={2.5} />
          </ListItem>
        </List>
        <Flex
          gridArea="bag"
          justify="end"
          gap={[2.5, 4]}
          align={['center', 'center', 'start']}
        >
          <ShoppingBagIcon boxSize={[7, 9]} cursor="pointer" />
          <UserIcon boxSize={[7, 9]} cursor="pointer" />
        </Flex>
        <InputGroup gridArea="search">
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
            <SearchIcon boxSize={[4, 6]} />
          </InputLeftElement>
          <Input
            p={[2, 4, 6]}
            placeholder="دنبال چی میگردی ؟"
            rounded={[12, 16]}
            bgColor="white"
            shadow="0px 0px 8px rgba(0, 0, 0, 0.02)"
            h={[10, 14]}
            border="none"
            focusBorderColor="#ff9900"
            fontSize={['11px', 16]}
          />
        </InputGroup>
        <Divider
          display={['block', 'block', 'none']}
          borderColor="divider"
          gridArea="divider"
        />
      </Grid>
    </>
  );
}

import {
  Box,
  Divider,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'components/custom/NextLink';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  TelIcon,
  UserIcon,
} from '../Icons';
import Logo from 'components/custom/Logo';
import MobileMenu from './MobileMenu';
import TopNav from './Naves/TopNav';
import NavList from './Naves/NavList';

export default function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box as="header">
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
         `,
            `
         " menu     logo     tel"
         " search   search   bag "
         " divider  divider  divider"
        `,
            `
         " navLinks navLinks navLinks   ......  tel"
         " logo     navList  navList  navList   bag"
         " search   search   search   search  search"
        `,
          ]}
          rowGap={[10, 8]}
          pt={[7, 2.5, 0]}
        >
          <Box
            gridArea="menu"
            display={['block', 'block', 'none']}
            onClick={onOpen}
          >
            <MenuIcon boxSize={[6, 10]} cursor="pointer" />
          </Box>
          <TopNav />
          <Link
            gridArea="tel"
            href="tel:0217760225"
            variant="link"
            display="flex"
            alignItems="center"
            justifyContent="end"
            cursor="default"
            gap={2}
          >
            <Text cursor="pointer" display={['none', 'block']}>
              ۰۲۱-۷۷۶۰۲۲۵۰
            </Text>
            <TelIcon boxSize={7} cursor="pointer" />
          </Link>
          <Logo />
          <NavList />
          <Flex
            gridArea="bag"
            justify="end"
            gap={[2.5, 4]}
            align={['center', 'center', 'start']}
          >
            <ShoppingBagIcon boxSize={[7, 9]} cursor="pointer" />
            <NextLink href="/users/login">
              <Link variant="list">
                <UserIcon boxSize={[7, 9]} />
              </Link>
            </NextLink>
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
            display={['none', 'block', 'none']}
            borderColor="divider"
            gridArea="divider"
          />
        </Grid>
      </Box>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </>
  );
}

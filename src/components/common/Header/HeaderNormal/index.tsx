import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  AngleDownIcon,
  HartOutlineIcon,
  LogoutIcon,
  MenuIcon,
  ShoppingBagIcon,
  ShoppingBagRoundIcon,
  TelIcon,
  UserFlatIcon,
  UserIcon,
} from "../../Icons";
import Logo from "components/custom/Logo";
import MobileMenu from "./MobileMenu";
import TopNav from "./Naves/TopNav";
import NavList from "../../../../../index";
import { destroyCookie, parseCookies } from "nookies";
import NextLink from "components/custom/NextLink";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchInput from "./SearchInput";
import CartModal from "./CartModal";

function HeaderNormal() {
  const { user_info } = parseCookies();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const disClos = useDisclosure();
  // const [cookies, setCookies] = useState<any>(undefined);
  const router = useRouter();
  // const checkCookies =
  //   typeof window !== 'undefined' ? document.cookie : undefined;
  // const getCookies = useCallback(() => parseCookies(), [checkCookies]);
  // useEffect(() => {
  //   const cookies = getCookies();
  //   if (cookies.user_info !== undefined) {
  //     setCookies(JSON.parse(cookies?.user_info));
  //   }
  // }, [getCookies]);
  // const handleLogout = () => {
  //   destroyCookie(null, 'access_token', {
  //     path: '/',
  //   });
  //   destroyCookie(null, 'user_info', {
  //     path: '/',
  //   });
  //   setCookies(undefined);
  //   router.push('/');
  // };
  return (
    <>
      <Box as="header" display={["none", "block"]}>
        <Box
          minH={["4.5625rem", "3.625rem", "3rem"]}
          maxW="1440px"
          w="full"
          bgGradient="linear(90deg, bgGradient.one 0%, bgGradient.two 100%)"
          shadow={"0px 4px 8px rgba(0, 0, 0, 0.03)"}
          rounded=" 0px 0px 24px 24px"
          pos="absolute"
          top="0"
          left="50%"
          transform={"translate(-50%, 0%)"}
          zIndex="hide"
        />
        <Grid
          gridTemplateColumns={[
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(2, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gridTemplateAreas={[
            null,
            `
         " menu     logo     tel"
         " search   search   bag "
         " divider  divider  divider"
        `,
            `
         " navLinks  bag    "
         " logo     navList "
         " search   search  "
        `,
            `
         " navLinks navLinks navLinks   ......  tel"
         " logo     navList  navList  navList   bag"
         " search   search   search   search  search"
        `,
          ]}
          mx={{ base: 10, lg: "auto" }}
          px={{ base: 0, lg: 9 }}
          maxWidth={1440}
          rowGap={[10, 8]}
          pt={[7, 2.5, 0]}
        >
          <Box
            gridArea="menu"
            display={["block", "block", "none"]}
            onClick={onOpen}
          >
            <MenuIcon boxSize={[6, 10]} cursor="pointer" />
          </Box>
          <TopNav />
          <Link
            gridArea="tel"
            gridColumn={{ base: 3, md: 2, lg: 5 }}
            gridRow="1"
            href="tel:0217760225"
            variant="link"
            transform={{ md: "translateX(100px)", lg: "none" }}
            display="flex"
            alignItems="center"
            justifyContent="end"
            cursor="default"
            gap={2}
          >
            <Text cursor="pointer" display={["none", "block"]}>
              ۰۲۱-۷۷۶۰۲۲۵۰
            </Text>
            <TelIcon boxSize={7} cursor="pointer" />
          </Link>
          <Logo />
          <NavList />
          <Flex
            gridArea="bag"
            justify="end"
            alignSelf="center"
            gap={[2.5, 4]}
            align={["center", "center", "start"]}
          >
            <Box pos="relative" onClick={disClos.onOpen}>
              <ShoppingBagRoundIcon
                boxSize={[7, 9]}
                cursor="pointer"
                color="transparent"
                _hover={{ color: "text", "& path": { fill: "#fff" } }}
                transitionProperty="var(--artamart-transition-property-common)"
                transitionDuration="var(--artamart-transition-duration-fast)"
                transitionTimingFunction="var(--artamart-transition-easing-ease-out)"
              />
              <Center
                position="absolute"
                bgColor="secondary.500"
                rounded="full"
                border="0.8px inset #000"
                color="white"
                width="16px"
                fontSize="10px"
                fontWeight="500"
                top="7"
                right="10px"
              >
                2
              </Center>
            </Box>
            {user_info ? (
              <Menu isLazy lazyBehavior="keepMounted" gutter={10}>
                <MenuButton
                  as={Button}
                  rightIcon={<AngleDownIcon boxSize="13px" />}
                  variant="none"
                  pos="relative"
                  fontSize="14px"
                  fontWeight="400px"
                  _before={{
                    content: "''",
                    h: "18px",
                    w: "1px",
                    bgColor: "black",
                    position: "absolute",
                    right: "0",
                    bottom: "13px",
                  }}
                >
                  {/* {cookies.first_name ? cookies.first_name : cookies.mobile} */}
                </MenuButton>
                <Portal>
                  <MenuList
                    minW="152px"
                    rounded="16"
                    shadow="0px 0px 16px rgba(0, 0, 0, 0.04)"
                    border="none"
                    fontSize="14px"
                    pt="6px"
                    pb="16px"
                    sx={{ "& button": { gap: "2", p: "8px 24px" } }}
                  >
                    <MenuGroup
                      title="۲۵٬۳۲۰٬۰۰۰"
                      color="white"
                      bgColor="#9773FF"
                      fontWeight="400"
                      display="inline-block"
                      pt="9px"
                      m="0 6.5px 14px 0px"
                      pl="0px"
                      rounded="12"
                      pos="relative"
                      boxShadow="-48px 0px 0px  #9773FF , -38px 3px 0px 0px  #BAA1FF ,-10px 3px 0px 0px  #BAA1FF , -24px 6px 0px 0px #D8CAFF"
                      _before={{
                        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='none' viewBox='0 0 25 25'%3E%3Crect width='24' height='24' x='.68' y='.662' fill='%23BAA1FF' rx='5'/%3E%3Cpath fill='%23fff' d='M15.895 14.09a.536.536 0 0 0 0 1.072h1.785a.536.536 0 1 0 0-1.072h-1.785ZM4.645 6.77a1.964 1.964 0 0 1 1.964-1.964h9.643a1.964 1.964 0 0 1 1.964 1.964v.899a2.679 2.679 0 0 1 2.5 2.672v7.5a2.678 2.678 0 0 1-2.679 2.679H7.326a2.678 2.678 0 0 1-2.679-2.679v-7.5h-.002V6.948h.007a1.99 1.99 0 0 1-.007-.179Zm13.392 1.964H5.72v9.107a1.607 1.607 0 0 0 1.607 1.608h10.711a1.607 1.607 0 0 0 1.608-1.608v-7.5a1.607 1.607 0 0 0-1.608-1.607Zm-.892-1.964c0-.493-.4-.893-.893-.893H6.609a.893.893 0 1 0 0 1.786h10.536V6.77Z'/%3E%3C/svg%3E")`,
                        display: "inline-block",
                        verticalAlign: "-10px",
                        ml: "2",
                        mr: "9px",
                      }}
                    >
                      <MenuItem
                        icon={<UserFlatIcon />}
                        onClick={() => router.push("/profile")}
                      >
                        حساب کاربری
                      </MenuItem>
                      <MenuItem
                        onClick={() => router.push("/profile/orders")}
                        icon={<ShoppingBagIcon color="black" />}
                      >
                        سفارشات
                      </MenuItem>
                      <MenuItem
                        onClick={() => router.push("/profile/favorites")}
                        icon={<HartOutlineIcon boxSize="4" />}
                      >
                        علاقه مندی ها
                      </MenuItem>
                      <MenuItem
                        icon={<LogoutIcon boxSize="4" />}
                        color="#FF5E5E"
                        // onClick={handleLogout}
                      >
                        خروج
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Portal>
              </Menu>
            ) : (
              <NextLink href="/users/login">
                <Link variant="list">
                  <UserIcon
                    boxSize={[7, 9]}
                    color="transparent"
                    _hover={{ color: "text", "& path": { fill: "#fff" } }}
                    transitionProperty="var(--artamart-transition-property-common)"
                    transitionDuration="var(--artamart-transition-duration-fast)"
                    transitionTimingFunction="var(--artamart-transition-easing-ease-out)"
                  />
                </Link>
              </NextLink>
            )}
          </Flex>
          <SearchInput />
          <Divider
            display={["none", "block", "none"]}
            borderColor="divider"
            gridArea="divider"
          />
        </Grid>
      </Box>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
      <CartModal isOpen={disClos.isOpen} onClose={disClos.onClose} />
    </>
  );
}

export default HeaderNormal;

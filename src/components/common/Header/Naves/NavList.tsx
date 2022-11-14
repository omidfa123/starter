import {
  Center,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  LampIcon,
  LaptopIcon,
  MenuShapeIcon,
  PcIcon,
  PhoneIcon,
} from 'components/common/Icons';
import NextLink from 'components/custom/NextLink';
import { useRouter } from 'next/router';

const navList = [
  { href: '/assembly', text: 'کیس اسمبل شده' },
  { href: '/assembly/online', text: 'اسمبل آنلاین' },
  { href: '/gaming', text: 'گیمینگ' },
];

export default function NavList({ isMobile = false }: { isMobile?: boolean }) {
  const router = useRouter();
  const display = isMobile ? 'flex' : 'none';
  return (
    <List
      display={[display, display, 'flex']}
      flexDir={{ base: 'column', md: 'row' }}
      py={{ base: 3.5, md: 0 }}
      gridArea="navList"
      justifySelf="center"
      textStyle={{ base: 'medium16', md: 'medium14' }}
      color="disableText"
      sx={{ '& li:hover': { color: 'text' } }}
      gap={6}
    >
      <Popover
        isLazy
        lazyBehavior="keepMounted"
        // isOpen
        offset={[-195, 20]}
        trigger="hover"
        openDelay={0}
      >
        <PopoverTrigger>
          <ListItem cursor="pointer">
            محصولات ما
            <ListIcon as={AngleDownIcon} boxSize={2.5} />
          </ListItem>
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            rounded="32"
            shadow="0px 10px 16px rgba(0, 0, 0, 0.12)"
            border="none"
            minW={'1024px'}
            h="486px"
            py="18px"
          >
            <Tabs
              orientation="vertical"
              isLazy
              lazyBehavior="keepMounted"
              variant="menu-line"
              flex="1"
              _after={{
                content: `url("data:image/svg+xml,%3Csvg width='183' height='221' viewBox='0 0 183 221' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_di_0_1)'%3E%3Cpath d='M12.0547 42.8913C12.0547 35.4091 14.6481 27.8488 21.3804 24.584C32.7718 19.06 54.6912 15.7693 87.6447 41.2389C137.803 80.0058 98.4859 86.8308 136.63 124.497C137.942 125.793 139.259 127.249 140.326 128.753C168.887 168.984 147.831 189.535 136.838 196.776C133.315 199.097 129.096 199.874 124.878 199.874H44.0547C26.3816 199.874 12.0547 185.547 12.0547 167.874V42.8913Z' fill='%239773FF'/%3E%3C/g%3E%3Cg filter='url(%23filter1_di_0_1)'%3E%3Cpath d='M12.0547 65.3124C12.0547 57.8302 14.6606 50.1962 21.543 47.2612C31.7631 42.903 50.3183 41.2612 77.5902 62.3395C120.962 95.8613 87.1684 101.836 119.8 134.266C121.108 135.566 122.415 137.006 123.478 138.514C147.333 172.36 130.594 190.065 120.941 196.716C117.467 199.11 113.239 199.874 109.021 199.874H44.0547C26.3816 199.874 12.0547 185.547 12.0547 167.874V65.3124Z' fill='%23FFA826'/%3E%3C/g%3E%3Cg filter='url(%23filter2_di_0_1)'%3E%3Cpath d='M12.4622 90.8054C12.4622 83.3232 15.0959 75.5747 22.175 73.1523C30.9522 70.1487 45.7413 70.0874 66.7977 86.3617C102.61 114.041 74.9672 119.067 101.464 145.667C102.766 146.974 104.058 148.39 105.113 149.904C123.791 176.705 111.663 191.209 103.628 197.14C100.234 199.645 95.9831 200.392 91.7649 200.392H44.4622C26.7891 200.392 12.4622 186.065 12.4622 168.392V90.8054Z' fill='%23FF5E5E'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_di_0_1' x='0.0546875' y='0.709717' width='182.62' height='219.164' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='8'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='9.5'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect2_innerShadow_0_1'/%3E%3C/filter%3E%3Cfilter id='filter1_di_0_1' x='0.0546875' y='24.541' width='163.649' height='195.333' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='8'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='9.5'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect2_innerShadow_0_1'/%3E%3C/filter%3E%3Cfilter id='filter2_di_0_1' x='0.462158' y='51.605' width='142.518' height='168.787' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='8'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='9.5'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect2_innerShadow_0_1'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A")`,
                position: 'absolute',
                left: '-3',
                bottom: '-12',
              }}
              pos="relative"
            >
              <TabList>
                <Tab>
                  <PhoneIcon boxSize="6" /> کالای دیجیتال
                </Tab>
                <Tab>
                  <LampIcon boxSize="6" /> لوازم خانگی
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>one!!</TabPanel>
                <TabPanel>two!!</TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverContent>
        </Portal>
      </Popover>
      {navList.map(list => (
        <ListItem key={list.href}>
          <NextLink href={list.href}>{list.text}</NextLink>
        </ListItem>
      ))}
      <Menu isLazy lazyBehavior="keepMounted">
        <MenuButton
          as={Center}
          fontSize="0.875rem"
          fontWeight="500"
          _hover={{ cursor: 'pointer', color: 'text' }}
        >
          دست دوم
          <AngleDownIcon boxSize="2.5" mr="2" />
        </MenuButton>
        <Portal>
          <MenuList
            rounded="24"
            shadow=" 0px 10px 16px rgba(0, 0, 0, 0.12)"
            border="none"
            fontSize="13px"
            p="16px 8px 12px 8px"
            minW="189px"
            sx={{
              '& button': {
                p: '8px',
                fontWeight: '500',
                rounded: '12',
              },
              '& button:hover , & button:focus': {
                bgColor: 'secondary.500',
                color: 'white',
              },
            }}
          >
            <MenuItem
              icon={<PhoneIcon boxSize={6} />}
              onClick={() => router.push('/')}
            >
              موبایل دست دوم
            </MenuItem>
            <MenuItem
              onClick={() => router.push('/')}
              icon={<LaptopIcon boxSize={6} />}
            >
              لپ تاپ دست دوم
            </MenuItem>
            <MenuItem
              onClick={() => router.push('/')}
              icon={<PcIcon boxSize={6} />}
            >
              قطعات سیستم دست دوم
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </List>
  );
}

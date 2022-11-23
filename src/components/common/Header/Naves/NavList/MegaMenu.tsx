import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Link,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  LampIcon,
  MegaMenuIconPurple,
  MegaMenuIconRed,
  MegaMenuIconYellow,
  PcIcon,
  PhoneIcon,
} from 'components/common/Icons';
import NextLink from 'components/custom/NextLink';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
const menus = {
  mobile: [
    'اپل',
    'سامسونگ',
    'شیامی',
    'موتورلا',
    'هوآوی',
    'نوکیا',
    'کت',
    'گوگل',
    'وان پلاس',
    'داکس',
    'آرد',
    'جی پلاس',
    'ایسوس',
    'آتراجایزر',
  ],
  laptop: [
    'ایسوس',
    'لنوو',
    'ایسر',
    'ام اس آی',
    'اچ پی',
    'هوآوی',
    'اپل',
    'مایکروسافت',
    'دل',
  ],
  tablet: ['اپل', 'مایکروسافت', 'سامسونگ', 'لنوو', 'هوآوی'],
  tracking: ['رهباب جی پی اس ( GPS )', 'گارمین'],
  watch: ['اپل', 'سامسونگ', 'گارمین', 'شیامی'],
  watchSmart: 'شیامی',
  pc: [
    'کارت گرافیک',
    'پردازنده ( CPU )',
    'مادربرد',
    'رم کامپیوتر',
    'پاور',
    'قاب کیس',
    'مانیتور',
  ],
  organization: ['پرینتر', 'اسکنر', 'فکس'],
  network: ['مودم', 'سوییچ', 'کارت شبکه', 'روتر و اکسس پوینت'],
  camera: ['نیکون', 'کنن', 'سونی', 'فوجی فیلم', 'پاور', 'قاب کیس', 'مانیتور'],
  gaming: ['سونی', 'ماکروسافت'],
  extensions: [
    'هدفون اپل',
    'لوازم جانبی لپ تاپ',
    'لوازم جانبی تبلت',
    'هدفون ، هدست ، ابرفون',
    'کیبورد',
    'موس',
    'اسپیکر',
    'لوازم جانبی پرینتر',
    'لوازم جانبی بازی',
  ],
};

const HeadMenu = ({ children }: { children: ReactNode }) => (
  <Flex
    _before={{
      content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='18' fill='none'%3E%3Cpath fill='%239773FF' d='M2.275 8.01C5.072 6.596 7.187 3.7 7.888.21c.428 3.49 2.315 6.385 5.001 7.8.523.277 1.834.7 1.834.7s-1.344.423-1.889.7c-2.797 1.416-4.911 4.31-5.61 7.8-.428-3.493-2.317-6.387-5.003-7.803-.523-.274-1.834-.7-1.834-.7s1.344-.422 1.888-.696Z'/%3E%3C/svg%3E")`,
      ml: '1',
    }}
    _after={{
      content: `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='8' fill='none'%3E%3Cpath fill='%239773FF' d='M6.028.502a.5.5 0 0 1-.146.353L3.324 3.412a.833.833 0 0 0 0 1.179l2.554 2.554a.5.5 0 0 1-.707.707L2.617 5.3a1.835 1.835 0 0 1 0-2.593L5.175.148a.5.5 0 0 1 .853.354Z'/%3E%3C/svg%3E")`,
      mr: '2',
    }}
    color="secondary.500"
    textStyle="medium13"
    cursor="pointer"
    userSelect="none"
  >
    {children}
  </Flex>
);
export default function MegaMenu({
  setAnimate,
}: {
  setAnimate: Dispatch<
    SetStateAction<{
      pos: string;
      width: string;
    }>
  >;
}) {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Popover
      isLazy
      lazyBehavior="keepMounted"
      offset={[-195, 20]}
      trigger="hover"
      openDelay={0}
    >
      <PopoverTrigger>
        <ListItem
          cursor="pointer"
          onMouseOverCapture={() => setAnimate({ pos: '0px', width: '34px' })}
          onMouseLeave={() => setAnimate({ width: '0px', pos: '0px' })}
        >
          محصولات ما
          <ListIcon as={AngleDownIcon} boxSize={2.5} />
        </ListItem>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          rounded="32"
          shadow="0px 10px 16px rgba(0, 0, 0, 0.12)"
          border="none"
          minW={'1028px'}
          onMouseOverCapture={() => setAnimate({ pos: '0px', width: '34px' })}
          onMouseLeave={() => setAnimate({ width: '0px', pos: '0px' })}
        >
          <Tabs
            orientation="vertical"
            isLazy
            lazyBehavior="keepMounted"
            variant="menu-line"
            flex="1"
            pos="relative"
            index={tabIndex}
            onChange={index => setTabIndex(index)}
            pt="26px"
            mb="18px"
          >
            <TabList>
              <Tab onMouseOver={() => setTabIndex(0)}>
                <PhoneIcon boxSize="6" /> کالای دیجیتال
              </Tab>
              <Tab onMouseOver={() => setTabIndex(1)}>
                <LampIcon boxSize="6" /> لوازم خانگی
              </Tab>
              <Tab onMouseOver={() => setTabIndex(2)}>
                <PcIcon boxSize={5} ml="1" /> دست دوم
              </Tab>
            </TabList>
            <TabPanels pos="relative">
              <TabPanel>
                <List
                  sx={{
                    '& li': {
                      cursor: 'pointer',
                      userSelect: 'none',
                      '&:hover': { color: 'secondary.500' },
                    },
                  }}
                  maxH="440px"
                  display="flex"
                  flexDir="column"
                  flexWrap="wrap"
                  justifyContent="flex-start"
                  alignItems="baseline"
                  gap="8px 32px"
                >
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>موبایل</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.mobile.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                      <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>لپ تاپ</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.laptop.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                        <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>تبلت</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.tablet.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                       <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>رهباب ماهواره ای</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.tracking.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                       <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>ساعت هوشمند</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.watch.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                     <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>مچ بند هوشمند</HeadMenu>
                    </Link>
                  </NextLink>

                  <ListItem
                    key={menus.watchSmart}
                    textStyle="regular13"
                    color="description"
                    pr="1"
                  >
                    {menus.watchSmart}
                  </ListItem>
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>کامپیوتر</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.pc.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                        <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>ماشین های اداری</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.organization.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                       <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>شبکه</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.network.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                       <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>دوربین عکاسی</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.camera.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                        <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>کنسول و تجهیزات بازی</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.gaming.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                        <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                  <NextLink href="/products">
                    <Link>
                      <HeadMenu>لوازم جانبی</HeadMenu>
                    </Link>
                  </NextLink>
                  {menus.extensions.map(menu => (
                    <ListItem
                      key={menu}
                      textStyle="regular13"
                      color="description"
                      pr="1"
                    >
                       <NextLink href="/products">
                        <Link>{menu}</Link>
                      </NextLink>
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
              <TabPanel>
                <List
                  sx={{
                    '& li': {
                      cursor: 'pointer',
                      userSelect: 'none',
                      '&:hover': { color: 'secondary.500' },
                    },
                  }}
                  maxH="440px"
                  h="429px"
                  display="flex"
                  flexDir="column"
                  flexWrap="wrap"
                  justifyContent="flex-start"
                  alignItems="baseline"
                  gap="8px 32px"
                >
                  <HeadMenu>صوتی و تصویری</HeadMenu>

                  <ListItem textStyle="regular13" color="description" pr="1">
                    تلویزیون
                  </ListItem>

                  <HeadMenu>لوازم خانگی برقی</HeadMenu>
                  <ListItem textStyle="regular13" color="description" pr="1">
                    یخچال و فریزر
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <List
                  sx={{
                    '& li': {
                      cursor: 'pointer',
                      userSelect: 'none',
                      '&:hover': { color: 'secondary.500' },
                    },
                  }}
                  maxH="440px"
                  h="429px"
                  display="flex"
                  flexDir="column"
                  flexWrap="wrap"
                  justifyContent="flex-start"
                  alignItems="baseline"
                  gap="8px 32px"
                >
                  <HeadMenu>دست دوم</HeadMenu>

                  <ListItem textStyle="regular13" color="description" pr="1">
                    تلویزیون
                  </ListItem>

                  <HeadMenu>دست دوم</HeadMenu>
                  <ListItem textStyle="regular13" color="description" pr="1">
                    یخچال و فریزر
                  </ListItem>
                </List>
              </TabPanel>
              <Box pos="absolute" bottom="36.2%" left="16.3%">
                <svg style={{ visibility: 'hidden', position: 'absolute' }}>
                  <filter id="inset-shadow">
                    <feOffset dx="0" dy="0" />
                    <feGaussianBlur stdDeviation="7" result="offset-blur" />
                    <feComposite
                      operator="out"
                      in="SourceGraphic"
                      in2="offset-blur"
                      result="inverse"
                    />
                    <feFlood
                      flood-color="white"
                      flood-opacity=".95"
                      result="color"
                    />
                    <feComposite
                      operator="in"
                      in="color"
                      in2="inverse"
                      result="shadow"
                    />
                    <feComposite
                      operator="over"
                      in="shadow"
                      in2="SourceGraphic"
                    />
                  </filter>
                </svg>
                <MegaMenuIconPurple pos="absolute" />

                <MegaMenuIconYellow
                  filter="url(#inset-shadow) drop-shadow(8px 0px 20px rgba(0, 0, 0, 0.08))"
                  pos="absolute"
                  top="23px"
                  right="19px"
                />
                <MegaMenuIconRed
                  filter="url(#inset-shadow) drop-shadow(8px 0px 20px rgba(0, 0, 0, 0.08))"
                  pos="absolute"
                  top="50px"
                  right="40px"
                />
              </Box>
            </TabPanels>
          </Tabs>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

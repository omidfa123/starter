import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Logo from 'components/custom/Logo';
import NextLink from 'components/custom/NextLink';
import Image from 'next/future/image';
import { EnvelopIcon, TelIcon } from '../../Icons';
import dynamic from 'next/dynamic';

const CopyRights = dynamic(() => import('./FooterCopyRights'), { ssr: false });

const footerList = [
  {
    heading: 'دسته بندی',
    href: [
      '/our-products',
      '/assembly',
      '/assembly/ready',
      '/gaming',
      '/second-hand',
    ],
    lists: [
      'محصولات ما',
      'کیس های اسمبل شده',
      'اسمبل آنلاین',
      'محصولات گیمینگ',
      'دسته دوم',
    ],
  },
  {
    heading: 'خدمات فروشگاه آترا',
    href: ['/credit', '/organizational', '/blog', '/about-us'],
    lists: ['خرید اقساطی', 'فروش سازمانی', 'مجله آترا', 'درباره ما'],
  },
  {
    heading: 'خدمات مربوط کاربران',
    href: ['/login', '/shopping-cart', '/rules', '/privacy', '/warranty'],
    lists: [
      'حساب کابری',
      'سبد خرید',
      'شرایط و قوانین',
      'حفظ حریم خصوصی',
      'گارانتی محصولات',
    ],
  },
];

const EnamadPics = [
  {
    src: '/images/e3.png',
    alt: 'اینماد',
    h: ['59px', '44px', '98px'],
    w: ['53px', '56px', '89px'],
  },
  {
    src: '/images/e2.png',
    alt: 'اینماد',
    h: ['59px', '50px', '90px'],
    w: ['61px', '52px', '94px'],
  },
  {
    src: '/images/e.png',
    alt: 'اینماد',
    h: ['52px', '52px', '85px'],
    w: ['66px', '47px', '108px'],
  },
];

export default function FooterDesktop() {
  return (
    <Box as="footer" display={['none', 'block']}>
      <Grid
        gridTemplateColumns={[
          'repeat(2 ,1fr)',
          'repeat(3 ,1fr)',
          'repeat(4 ,1fr)',
        ]}
        gridTemplateAreas={[
          `
        "divider2 divider2"
        "list0   list1"
        "list2   number"
        "divider divider"
        "about   pics"`,
          `
        "divider2 divider2 divider2"
        "list0   list1   list2"
        "divider divider divider"
        "about   about   pics"`,
          `
        "divider2 divider2 divider2 divider2"
        "list0   list1   list2   pics"
        "divider divider divider divider"
        "about   about   about   number "`,
        ]}
        pb={[8, 12, 10]}
        maxW="1440"
        mx={{ base: 10, lg: 'auto' }}
        px={{ base: 0, lg: 9 }}
        rowGap={[8, 8, 10]}
        columnGap={[5]}
        justifyItems={{ base: 'center', md: 'start' }}
      >
        {footerList.map((list, index) => (
          <Flex
            key={list.heading}
            flexDir="column"
            gap={4}
            gridArea={`list${index}`}
          >
            <Text textStyle={['medium16', 'medium20']} color="#000">
              {list.heading}
            </Text>
            <List
              spacing={[2, 4]}
              color="disableUl"
              sx={{ '& li:hover ': { color: 'primary.500' } }}
            >
              {list.lists.map((menus, index) => (
                <ListItem key={menus}>
                  <NextLink
                    href={list.href[index]}
                    as={list.lists[index].replaceAll(' ', '-')}
                  >
                    <Link textStyle={['medium13', 'medium16']}>{menus}</Link>
                  </NextLink>
                </ListItem>
              ))}
            </List>
          </Flex>
        ))}
        <Flex
          gap={[2, 4]}
          gridArea={'pics'}
          alignItems="center"
          flexWrap={['wrap', 'wrap', 'unset']}
          direction={['column', 'row-reverse', 'column', 'row']}
        >
          {EnamadPics.map(pic => (
            <Center
              key={pic.src}
              bg="boxBg"
              border="3px solid white"
              rounded={16}
              h={['78px', '82px', '82px', '230px']}
              w={['132px', '85px', '85px', '132px']}
            >
              <Box
                pos="relative"
                w={[
                  `${[pic.w[0]]}`,
                  `${[pic.w[1]]}`,
                  `${[pic.w[1]]}`,
                  `${[pic.w[2]]}`,
                ]}
                h={[
                  `${[pic.h[0]]}`,
                  `${[pic.w[1]]}`,
                  `${[pic.w[1]]}`,
                  `${[pic.w[2]]}`,
                ]}
              >
                <Image
                  src={pic.src}
                  alt={pic.alt}
                  fill
                  sizes={`
                 (min-width: 30em ) ${[pic.w[0]]}
                 (min-width: 48em)  ${[pic.h[1]]}
                 (min-width: 62em)  ${[pic.h[1]]}
                 (min-width: 80em)  ${[pic.h[2]]}
                 `}
                />
              </Box>
            </Center>
          ))}
        </Flex>
        <Divider
          borderColor="break"
          gridArea="divider"
          w={['95%', '99%', '100%']}
        />
        <Divider
          borderColor="break"
          gridArea="divider2"
          w={['95%', '99%', '100%']}
        />
        <Flex gap={4} gridArea={'about'} flexDir="column">
          <Logo />
          <Text
            textStyle={['regular10', 'regular14', 'regular16']}
            lineHeight={[4, 5, 6]}
          >
            ما در فروشگاه اینترنتی آترامارک سعی بر این داریم تا بتوانیم تمام
            محصولات سرگرمی و الکترونیکی کاربران مان را به بهترین نحو و در بهترین
            قیمت ، فراهم کنیم تا بتوانیم تمام نیاز های کاربرانمان را در سریع
            ترین حالت ممکن رفع کنیم وما در فروشگاه اینترنتی آترامارک سعی بر این
            داریم تا بتوانیم تمام محصولات سرگرمی و الکترونیکی کاربران مان را به
            بهترین نحو و در بهترین قیمت.....
          </Text>
        </Flex>
        <Box
          display={['flex', 'none', 'flex']}
          flexDir="column"
          gap={4}
          fontSize={['13px', '14px']}
          justifySelf="center"
          gridArea={'number'}
        >
          <Text textStyle={['medium16', 'medium20']}>راه های ارتباطی</Text>
          <Link
            href="tel:0217760225"
            variant="link"
            display="flex"
            alignItems="center"
          >
            <TelIcon boxSize={9} ml={2} transform="scale(-1 , 1)" />
            ۰۲۱-۷۷۶۰۲۲۵۰ ۰۹۳۳۱۸۰۹۸۹۷
          </Link>
          <Link
            href="mailto :omidfa1234@gmail.com"
            variant="link"
            display="flex"
            alignItems="center"
          >
            <EnvelopIcon boxSize={9} ml={2} />
            atra@atra.com
          </Link>
        </Box>
      </Grid>
      <CopyRights />
    </Box>
  );
}

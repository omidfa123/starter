import {
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  LampIcon,
  LaptopIcon,
  PcIcon,
  PhoneIcon,
} from 'components/common/Icons';
import NextLink from 'components/custom/NextLink';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NavUnderLine from './src/components/common/Header/HeaderNormal/Naves/NavUnderLine';
import MegaMenu from './src/components/common/Header/HeaderNormal/Naves/NavList/MegaMenu';
const navList = [
  { href: '/assembly', text: 'کیس اسمبل شده', position: ' -124px' },
  { href: '/assembly/online', text: 'اسمبل آنلاین', position: '-246px' },
  { href: '/gaming', text: 'گیمینگ', position: '-346px' },
];

export default function NavList({ isMobile = false }: { isMobile?: boolean }) {
  const router = useRouter();
  const [animate, setAnimate] = useState({ pos: '0px', width: '0px' });
  const display = isMobile ? 'flex' : 'none';
  return (
    <List
      display={[display, display, 'flex']}
      flexDir={{ base: 'column', md: 'row' }}
      py={{ base: 3.5, md: 0 }}
      gridColumn={{base: '1 / span 2' , lg: "2 /5"}}
      justifySelf="end"
      gridRow="2"
      textStyle={{ base: 'medium16', md: 'medium14' }}
      color="disableText"
      sx={{ '& li': { '&:hover': { color: 'text' }, pl: '6' } }}
      pos="relative"
      w="max-content"
    >
      <MegaMenu setAnimate={setAnimate} />

      {navList.map(list => (
        <ListItem
          key={list.href}
          onMouseOverCapture={() =>
            setAnimate({ pos: list.position, width: '34px' })
          }
          onMouseLeave={() => setAnimate({ width: '0px', pos: list.position })}
        >
          <NextLink href={list.href}>{list.text}</NextLink>
        </ListItem>
      ))}
      <Popover isLazy lazyBehavior="keepMounted" trigger="hover" openDelay={0}>
        <PopoverTrigger>
          <ListItem
            cursor="pointer"
            fontSize="0.875rem"
            fontWeight="500"
            onMouseOverCapture={() =>
              setAnimate({ width: '34px', pos: '-412px' })
            }
            onMouseLeave={() => setAnimate({ width: '0px', pos: '-412px' })}
          >
            دست دوم
            <ListIcon as={AngleDownIcon} boxSize={2.5} />
          </ListItem>
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            rounded="24"
            shadow=" 0px 10px 16px rgba(0, 0, 0, 0.12)"
            border="none"
            fontSize="13px"
            p="16px 8px 12px 8px"
            maxW="189px"
            sx={{
              '& li': {
                p: '8px',
                fontWeight: '500',
                rounded: '12',
                gap: '0',
                userSelect: 'none',
                cursor: 'pointer',
              },
              '& li:hover , & li:focus': {
                bgColor: 'secondary.500',
                color: 'white',
              },
            }}
            onMouseOverCapture={() =>
              setAnimate({ pos: '-412px', width: '34px' })
            }
            onMouseLeave={() => setAnimate({ width: '0px', pos: '-412px' })}
          >
            <ListItem onClick={() => router.push('/')}>
              <ListIcon as={PhoneIcon} boxSize={6} />
              موبایل دست دوم
            </ListItem>
            <ListItem onClick={() => router.push('/')}>
              <ListIcon as={LaptopIcon} boxSize={6} />
              لپ تاپ دست دوم
            </ListItem>
            <ListItem onClick={() => router.push('/')} whiteSpace="nowrap">
              <ListIcon as={PcIcon} boxSize={6} />
              سیستم دست دوم
            </ListItem>
          </PopoverContent>
        </Portal>
      </Popover>
      <NavUnderLine pos={animate.pos} width={animate.width} />
    </List>
  );
}

import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';
import NextLink from 'components/custom/NextLink';

const navList = [
  { href: '/assembly', text: 'کیس اسمبل شده' },
  { href: '/assembly/online', text: 'اسمبل آنلاین' },
  { href: '/gaming', text: 'گیمینگ' },
];

export default function NavList({ isMobile = false }: { isMobile?: boolean }) {
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
      <ListItem>
        محصولات ما
        <ListIcon as={AngleDownIcon} boxSize={2.5} />
      </ListItem>
      {navList.map(list => (
        <ListItem key={list.href}>
          <NextLink href={list.href}>{list.text}</NextLink>
        </ListItem>
      ))}
      <ListItem>
        دست دوم
        <ListIcon as={AngleDownIcon} boxSize={2.5} />
      </ListItem>
    </List>
  );
}

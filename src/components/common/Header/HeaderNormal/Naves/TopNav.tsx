import { Link, List, ListItem } from '@chakra-ui/react';
import NextLink from 'components/custom/NextLink';
import { useRouter } from 'next/router';

const topNavLinks = [
  { href: '/installment', text: 'خرید اقساطی' },
  { href: '/enterprise-sales', text: 'فروش سازمانی' },
  { href: '/blog', text: 'مجله آترا' },
  { href: '/about-us', text: 'درباره ما' },
];

export default function TopNav({ isMobile = false }: { isMobile?: boolean }) {
  const display = isMobile ? 'flex' : 'none';
  const { pathname } = useRouter();

  return (
    <List
      display={[display, display, 'flex']}
      gridArea="navLinks"
      gap={6}
      textStyle="medium13"
      color="#CACACA"
      flexDir={['column', 'column', 'row']}
      sx={{
        '& a:hover': { color: 'text' },
        '& li:active': { color: 'disableText' },
      }}
      py={3.5}
      w="max-content"
    >
      {topNavLinks.map(link => (
        <ListItem
          key={link.href}
          color={link.href === pathname ? 'black' : undefined}
        >
          <NextLink href={link.href}>
            <Link>{link.text}</Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  );
}

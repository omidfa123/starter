import { Link, List, ListItem } from '@chakra-ui/react';
import NextLink from 'components/custom/NextLink';

const topNavLinks = [
  { href: '/credit', text: 'خرید اقساطی' },
  { href: '/Organization', text: 'فروش سازمانی' },
  { href: '/blog', text: 'مجله آترا' },
  { href: '/about-us', text: 'درباره ما' },
];

export default function TopNav({ isMobile = false }: { isMobile?: boolean }) {
  const display = isMobile ? 'flex' : 'none';
  return (
    <List
      display={[display, display, 'flex']}
      gridArea="navLinks"
      gap={6}
      textStyle="medium13"
      color="disableText"
      flexDir={['column', 'column', 'row']}
      sx={{
        '& li:hover': { color: 'text' },
        '& li:active': { color: 'disableText' },
      }}
      py={3.5}
      w="max-content"
    >
      {topNavLinks.map(link => (
        <ListItem key={link.href}>
          <NextLink href={link.href}>
            <Link>{link.text}</Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  );
}

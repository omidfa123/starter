import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

export default function NextLink({
  children,
  href = '/',
  as = null,
  passHref = true,
  replace = false,
  shallow = false,
  scroll = true,
}: {
  children: ReactNode;
  href?: any;
  as?: any;
  passHref?: boolean;
  replace?: boolean;
  shallow?: boolean;
  scroll?: boolean;
}) {
  return (
    <Link
      passHref={passHref}
      href={href}
      prefetch={false}
      as={as}
      replace={replace}
      shallow={shallow}
      scroll={scroll}
      legacyBehavior
    >
      {children}
    </Link>
  );
}

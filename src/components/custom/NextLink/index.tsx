import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

export default function NextLink({
  children,
  href = '/',
  as = null,
  passHref = true,
  style,
}: {
  children: ReactNode;
  href?: any;
  as?: any;
  passHref?: boolean;
  style?: CSSProperties;
}) {
  return (
    <Link
      passHref={passHref}
      href={href}
      prefetch={false}
      as={as}
      style={style}
    >
      {children}
    </Link>
  );
}

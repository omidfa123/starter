import Link from 'next/link';
import type { ReactNode } from 'react';

export default function NextLink({
  children,
  href = '/',
  as = { href },
  passHref = true,
}: {
  children: ReactNode;
  href?: any;
  as?: any;
  passHref?: boolean;
}) {
  return (
    <Link passHref={passHref} href={href} prefetch={false} as={as}>
      {children}
    </Link>
  );
}

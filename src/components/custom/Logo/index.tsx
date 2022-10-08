import { Box } from '@chakra-ui/react';
import Image from 'next/future/image';
import NextLink from '../NextLink';

export default function Logo() {
  return (
    <NextLink passHref={false}>
      <Box
        as="span"
        pos="relative"
        alignSelf="start"
        width={['138px', '154px']}
        height={['30px', '34px']}
        gridArea="logo"
      >
        <Image
          src="/images/atramart_logo.png"
          alt="لوگو سایت آترامارت"
          fill
          priority={true}
          sizes="
       (min-width: 30em ) 138px
       (min-width: 48em)  154px
      "
        />
      </Box>
    </NextLink>
  );
}

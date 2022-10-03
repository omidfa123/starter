import { Box, Button, Text } from '@chakra-ui/react';
import {
  AngleDownIcon,
  PhoneIcon,
  ShoppingBagIcon,
  UserIcon,
} from 'components/common/Icons';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>آرتامارت</title>
        <meta content="فروشگاه" name="description" />
        <meta name="robots" content="follow, index" />
      </Head>
      <Box layerStyle="base">
        <Text textStyle={'bold36'}>امید فاریابی</Text>
      </Box>
      <Link href="/auth">
        <Button>omid</Button>
      </Link>
      <AngleDownIcon transform="rotate(90deg)" />
    </>
  );
};

export default Home;

import { Box, Button, Text } from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Head>
      <title>آرتامارت</title>
      <meta content="فروشگاه" name="description" />
      <meta name="robots" content="follow, index" />
    </Head>
  );
};

export default Home;

import { Center, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>آرتامارت</title>
        <meta content="فروشگاه" name="description" />
        <meta name="robots" content="follow, index" />
      </Head>
      <Center as="main" flex="1">
        <Heading textColor="primary.500">صفحه اصلی</Heading>
      </Center>
    </>
  );
};

export default Home;

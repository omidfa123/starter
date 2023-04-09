import { Center, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>آترامارت</title>
        <meta content="فروشگاه" name="description" />
        <meta name="robots" content="nofollow, noindex" />
      </Head>
      <Center py="10rem">
        <Heading textColor="primary.500">صفحه اصلی</Heading>
      </Center>
    </>
  );
};

export default Home;

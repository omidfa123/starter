import { Box, Button, Text } from '@chakra-ui/react';
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
      <Box layerStyle="base">
        <Text textStyle={'bold36'}>امید فاریابی</Text>
      </Box>
    </>
  );
};

export default Home;

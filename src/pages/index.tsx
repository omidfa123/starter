import { Button, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Text layerStyle={'heading'}>امید فاریابی</Text>
      <Text fontSize="40" fontWeight="bold">
        امید فاریابی
      </Text>
      <Button bgColor="primary.400" color="white">
        امید فاریابی
      </Button>
      <Button
        bgGradient={'linear(180deg, primary.500 0%, #F5F9FF 100%)'}
        color="white"
      >
        امید فاریابی
      </Button>
    </>
  );
};

export default Home;

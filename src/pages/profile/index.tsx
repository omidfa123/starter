import { Center, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

const profile: NextPage = () => {
  return (
    <Center py="10rem">
      <Heading textColor="primary.500">به ناحیه کاربری خوش‌آمدید</Heading>
    </Center>
  );
};

export default profile;

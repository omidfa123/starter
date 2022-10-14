import { Box, Center, Heading, Link, Text, VStack } from '@chakra-ui/react';
import Logo from 'components/custom/Logo';
import NextLink from 'components/custom/NextLink';
import type { NextPage } from 'next';

const Welcome: NextPage = () => {
  return (
    <Center layerStyle="container" as="main" py={['44px', '54px', '64px']}>
      <VStack
        border="2px solid"
        rounded={12}
        borderColor="primary.400"
        gap={[2, 3, 4]}
        px={[10, 14, 16]}
        py={[8]}
      >
        <Logo />
        <Heading as="h1" fontSize={[16, 20, 24]}>
          به آترامارت خوش آمدید
        </Heading>
        <Text fontSize={[10, 12, 14]} textAlign="center">
          حالا شما عضو آترامارت هستید و خوش قیمت ترین کالا های بازار در دسترس
          شماست
        </Text>
        <NextLink>
          <Link
            py={[3, 4, 5]}
            px={[6, 9, 20]}
            rounded={12}
            textStyle="medium16"
            color="white"
            bgColor="primary.500"
          >
            بازگشت به آترامارت
          </Link>
        </NextLink>
        <NextLink href="/profile">
          <Link color="primary.500">تکمیل مشخصات</Link>
        </NextLink>
      </VStack>
    </Center>
  );
};

export default Welcome;

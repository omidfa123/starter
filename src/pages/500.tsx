import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { AngleDownIcon, Error500 } from 'components/common/Icons';
import NextLink from 'components/custom/NextLink';
import type { NextPage } from 'next';

const ErrorServer: NextPage = () => {
  return (
    <Box as="main" layerStyle="container" py={['44px', '54px', '64px']}>
      <VStack gap={[2, 3, 4]}>
        <Heading as="h1" fontSize={[10, 16, 20, 24]}>
          بعضی وقتا بعضی چیزا درست کار نمیکنه، صبور باشید و چند دقیقه دیگه بهمون
          سر بزنید.
        </Heading>
        <NextLink>
          <Link
            display="flex"
            alignItems="center"
            gap={1.5}
            color="primary.500"
            fontSize={[12, 14, 16]}
          >
            <Text>بازگشت به صفحه اصلی</Text>
            <AngleDownIcon transform={'rotate(90deg)'} boxSize={3} />
          </Link>
        </NextLink>
        <Error500 />
      </VStack>
    </Box>
  );
};

export default ErrorServer;

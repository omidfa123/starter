import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';
import { Error404 } from 'components/common/Icons/Vectors';
import NextLink from 'components/custom/NextLink';
import type { NextPage } from 'next';

const NotFind: NextPage = () => {
  return (
    <Box as="main" flex="1"  layerStyle="container" py={['44px', '54px', '64px']}>
      <VStack gap={[2, 3, 4]}>
        <Heading as="h1" fontSize={[20, 24, 28, 36]}>
          صفحه ای که دنبال آن بودید پیدا نشد!
        </Heading>
        <NextLink>
          <Link
            display="flex"
            alignItems="center"
            gap={1.5}
            color="secondary.500"
          >
            <Text>بازگشت به صفحه اصلی</Text>
            <AngleDownIcon transform={'rotate(90deg)'} boxSize={3} />
          </Link>
        </NextLink>
        <Error404 />
      </VStack>
    </Box>
  );
};

export default NotFind;

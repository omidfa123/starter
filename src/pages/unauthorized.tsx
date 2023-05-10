import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';
import { UnauthorizedVector } from 'components/common/Icons/Vectors';
import NextLink from 'components/custom/NextLink';
import type { NextPage } from 'next';

const Unauthorized: NextPage = () => {
  return (
    <Box as="main" layerStyle="container" py={['44px', '54px', '64px']}>
      <VStack gap={[2, 3, 4]}>
        <Heading as="h1" fontSize={[10, 16, 20, 24]}>
          کاربر گرامی شما دسترسی های لازم برای ورود به این صفحه را ندارید
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
        <UnauthorizedVector />
      </VStack>
    </Box>
  );
};

export default Unauthorized;

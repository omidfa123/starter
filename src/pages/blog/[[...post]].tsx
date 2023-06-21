import { Box } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';

export default function Blog() {
  return <Box>blog</Box>;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  console.log(ctx.params);

  return {
    props: {},
  };
};

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from 'theme';
import 'styles/global.css';
import Layout from 'components/common/layout';
import { LoadingProgressProvider } from 'components/custom/LoadingProgress';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LoadingProgressProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingProgressProvider>
    </ChakraProvider>
  );
}

export default MyApp;

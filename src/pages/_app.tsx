import { ChakraProvider } from '@chakra-ui/react';
import { LoadingProgressProvider } from 'components/custom/LoadingProgress';
import { QueryClientProvider } from 'react-query/react';
import { queryClient } from 'libs/react-query/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from 'components/common/layout';
import theme from 'theme';
import type { AppProps } from 'next/app';
import 'styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <LoadingProgressProvider>
          <Layout>
            <Component {...pageProps} />
            <ReactQueryDevtools panelProps={{ style: { direction: 'ltr' } }} />
          </Layout>
        </LoadingProgressProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;

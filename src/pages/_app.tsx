import { ChakraProvider } from '@chakra-ui/react';
import { LoadingProgressProvider } from 'components/custom/LoadingProgress';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'libs/react-query/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from 'components/common/layout';
import theme from 'theme';
import type { AppProps } from 'next/app';
import type { DehydratedState } from '@tanstack/react-query';
import React, { useRef } from 'react';
import 'styles/global.css';
import 'keen-slider/keen-slider.min.css';
function MyApp({
  Component,
  pageProps,
  router,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const queryClientRef = useRef(queryClient);
  const isLayoutNeeded = [`/access-denied`].includes(router.route);
  const LayoutComponent = !isLayoutNeeded ? Layout : React.Fragment;
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClientRef.current}>
        <LoadingProgressProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
          </Hydrate>
          <ReactQueryDevtools panelProps={{ style: { direction: 'ltr' } }} />
        </LoadingProgressProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
 
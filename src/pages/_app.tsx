import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import { LoadingProgressProvider } from 'components/custom/LoadingProgress';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'libs/react-query/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from 'components/common/layout';

import type { AppProps } from 'next/app';
import type { DehydratedState } from '@tanstack/react-query';
import React, { useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import localFont from 'next/font/local';
import overrides from 'theme';
import 'styles/global.css';

const iranSansXV = localFont({
  src: '../../public/fonts/iransansxv.woff',
  variable: '--font-iransans',
});

const theme = extendTheme(
  overrides(iranSansXV.style.fontFamily),
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

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
            <main className={iranSansXV.variable}>
              <LayoutComponent>
                <Component {...pageProps} />
              </LayoutComponent>
            </main>
          </Hydrate>
          <ReactQueryDevtools panelProps={{ style: { direction: 'ltr' } }} />
        </LoadingProgressProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;

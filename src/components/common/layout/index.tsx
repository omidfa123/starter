import { useLoadingProgress } from 'components/custom/LoadingProgress';
import { Router } from 'next/router';
import { useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import Footer from '../Footer/';
import Header from '../Header';
import Loading from '../Loading';

export default function Layout({ children }: { children: ReactNode }) {
  const { start, done } = useLoadingProgress();

  const onRouteChangeStart = useCallback(() => {
    start();
  }, [start]);

  const onRouteChangeComplete = useCallback(() => {
    setTimeout(() => {
      done();
    }, 1);
  }, [done]);

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart);
    Router.events.on('routeChangeComplete', onRouteChangeComplete);
    Router.events.on('routeChangeError', onRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart);
      Router.events.off('routeChangeComplete', onRouteChangeComplete);
      Router.events.off('routeChangeError', onRouteChangeComplete);
    };
  }, [onRouteChangeComplete, onRouteChangeStart]);
  return (
    <>
      <Header />
      <Loading />
      {children}
      <Footer />
    </>
  );
}

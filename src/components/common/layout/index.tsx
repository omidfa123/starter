import { useLoadingProgress } from 'components/custom/LoadingProgress';
import { Router } from 'next/router';
import { ReactNode, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children }: { children: ReactNode }) {
  const { start, done } = useLoadingProgress();

  const onRouteChangeStart = () => {
    start();
  };

  const onRouteChangeComplete = () => {
    setTimeout(() => {
      done();
    }, 1);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart);
    Router.events.on('routeChangeComplete', onRouteChangeComplete);
    Router.events.on('routeChangeError', onRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart);
      Router.events.off('routeChangeComplete', onRouteChangeComplete);
      Router.events.off('routeChangeError', onRouteChangeComplete);
    };
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

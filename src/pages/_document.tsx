import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from 'theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fa-IR" dir="rtl">
        <Head>
          <link
            rel="preload"
            href="/fonts/iransansxv.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Head>

        <body>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            type={'cookie'}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

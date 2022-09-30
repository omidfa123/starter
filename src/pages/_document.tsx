import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { theme } from 'theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fa-IR" dir="rtl">
        <Head>
          <link
            rel="preload"
            href="/fonts/IRANSansXV.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

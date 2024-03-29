import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fa-IR" dir="rtl">
        <Head />
        <body>
          <ColorModeScript type={'cookie'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

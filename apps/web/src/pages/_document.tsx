import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getServerStylesheetInitialProps } from '@shallot-ui/next'

export default class NextDocument extends Document {
  static getInitialProps = getServerStylesheetInitialProps

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@0;1&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

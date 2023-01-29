import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { GlobalStyle } from '@shallot-ui/web'

import { makeTheme } from '@shallot-ui/theme'

const NextApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <ThemeProvider theme={makeTheme()}>
        <GlobalStyle />
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default NextApp

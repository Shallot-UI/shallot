import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { GlobalStyle, makeTheme } from '@shallot-ui/next'

const NextApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <ThemeProvider theme={makeTheme({})}>
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

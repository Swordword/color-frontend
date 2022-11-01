import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { IdentityContext } from '../config/identifyContext'
import { theme } from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import Layout from '../layout/Pager'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export const queryClient = new QueryClient()

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IdentityContext>
          <Layout>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              {/* react-query devtools */}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </Layout>
        </IdentityContext>
      </ThemeProvider>
    </CacheProvider>
  )
}

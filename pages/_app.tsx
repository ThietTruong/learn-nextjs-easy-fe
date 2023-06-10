import axiosClient from "@/axios-client/axios-client";
import { EmptyLayout } from "@/components/layouts";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import createEmotionCache from "@/utils/create-emotion-cache";
import theme from "@/utils/theme";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { ScopedCssBaseline } from "@mui/material";
import Head from "next/head";
import { SWRConfig } from "swr";
import "../styles/globals.css";
import "../styles/prism.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <Layout>
            <SWRConfig
              value={{
                fetcher: (url: string) => axiosClient.get(url),
                shouldRetryOnError: false,
              }}
            >
              <Component {...pageProps} />
            </SWRConfig>
          </Layout>
        </ScopedCssBaseline>
      </ThemeProvider>
    </CacheProvider>
  );
}

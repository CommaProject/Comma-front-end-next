import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider } from 'jotai';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/globalStyle';
import { theme } from '@/styles/theme';
import '@/assets/fonts/font.css';

import PageHead from '@/components/layout/page-head';
import PageLayout from '@/components/layout/page-layout';
import ModalPortal from '@/components/common/modal-portal';
import { CookiesProvider } from 'react-cookie';
import OnlyPlayerModal from '../components/common/modal-portal/only-player-modal/OnlyPlayerModal';

interface InitializeAppProps {
  isNavigationVisible: boolean;
}

const MyApp = ({ Component, pageProps }: AppProps<InitializeAppProps>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  const { isNavigationVisible = true } = pageProps;
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider>
        <CookiesProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PageHead />
            <ModalPortal />
            <OnlyPlayerModal />
            <PageLayout isNavigationVisible={isNavigationVisible}>
              {/* eslint-disable react/jsx-props-no-spreading */}
              <Component {...pageProps} />
            </PageLayout>
          </ThemeProvider>
        </CookiesProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;

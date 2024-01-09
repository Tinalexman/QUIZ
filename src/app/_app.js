import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
 return (
  <MantineProvider theme="light" colorScheme="light">
    <Component {...pageProps} />
  </MantineProvider>
 );
}

export default MyApp;

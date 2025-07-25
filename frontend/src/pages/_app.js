// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

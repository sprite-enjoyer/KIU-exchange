import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      pink: 'rgba(217, 139, 139, 0.3)',
      darkGreen: "#255459",
      lightGreen: "#177373",
    },
    space: {},
    fonts: {}
  }
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';

const myLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      green1: "#145672",
      green2: "#26b3b3",
      green3: "#22b651",
      purple1: "#9d64d5",
      pink1: "#de5da4",
      pink2: "#de3994",
      pink3: "#cc348d",
    },
    space: {},
    fonts: {}
  }
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider theme={myLightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
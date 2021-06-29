import { ChakraProvider } from "@chakra-ui/react"
import { AppTheme } from "../styles/appTheme"
import { PrismGlobal } from '../styles/prism'
import AppSEO from "../utils/AppSEO"

import "@fontsource/noto-serif/700.css"
import "@fontsource/mukta/400.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={AppTheme}>
      <AppSEO />
      <PrismGlobal />
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}
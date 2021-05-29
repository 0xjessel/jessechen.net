import { ChakraProvider } from "@chakra-ui/react"
import { AppTheme } from "../styles/appTheme"
import { FontsGlobal } from "../styles/fonts"
import { PrismGlobal } from '../styles/prism'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={AppTheme}>
      <FontsGlobal />
      <PrismGlobal />
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}
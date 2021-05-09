import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { PrismGlobal } from '../styles/prism'

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '40rem',
      }
    }
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <PrismGlobal />
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}
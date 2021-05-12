import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { PrismGlobal } from '../styles/prism'

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  styles: {
    global: {
      'html': {
        minWidth: '320px',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '40rem',
        px: 0,
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
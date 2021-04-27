import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}
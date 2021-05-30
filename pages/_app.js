import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo, SocialProfileJsonLd } from "next-seo"
import { AppTheme } from "../styles/appTheme"
import { FontsGlobal } from "../styles/fonts"
import { PrismGlobal } from '../styles/prism'
import SEO from '../utils/next-seo.config'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={AppTheme}>
      <DefaultSeo {...SEO} />
      <SocialProfileJsonLd
        type="Person"
        name="Jesse Chen"
        url="http://jessechen.net"
        sameAs={[
          'http://www.facebook.com/0xjessel',
          'http://instagram.com/0xjessel',
          'http://www.linkedin.com/in/0xjessel',
          'http://github.com/0xjessel',
        ]}
      />
      <FontsGlobal />
      <PrismGlobal />
      <Component {...pageProps} /> 
    </ChakraProvider>
  )
}
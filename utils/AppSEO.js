import { useColorModeValue } from "@chakra-ui/react"
import { DefaultSeo, SocialProfileJsonLd } from "next-seo"
import { SEO_CONFIG_LIGHT, SEO_CONFIG_DARK } from '../utils/next-seo.config'

export default function AppSEO() {
  const SEO_CONFIG = useColorModeValue(SEO_CONFIG_LIGHT, SEO_CONFIG_DARK)

  return (
    <>
      <DefaultSeo {...SEO_CONFIG} />
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
    </>
  )
}
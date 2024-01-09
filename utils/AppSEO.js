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
        name="Dhinesh -SE"
        url="http://Dhinesh-SE.net"
        sameAs={[
          'http://www.facebook.com/Dhinesh-Se',
          'http://instagram.com/dnesh_vd',
          'http://www.linkedin.com/in/dhineshse',
          'http://github.com/Dhinesh-Se',
        ]}
      />
    </>
  )
}
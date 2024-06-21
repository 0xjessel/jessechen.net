import { Container } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

export default function Layout({ SEO, children }) {
  return (
    <>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        openGraph={{
          title: `${SEO.title ? `${SEO.title} | Dhinesh-SE` : `Dhinesh-SE`}`,
          description: SEO.description,
          url: SEO.url,
        }}
      />
      <Container 
        as="main" 
        maxW="2xl" 
        px={4} 
        py={8}>
        {children}
      </Container>
    </>
  )
}

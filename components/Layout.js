import { Container } from "@chakra-ui/react"

export default function Layout({ children }) {
  return (
    <>
      <Container 
        as="main" 
        maxW="2xl" 
        px={4} 
        py={8}
        css={{
          '::selection': {
            color: 'blue',
            background: 'tomato',
          },
        }}>
        {children}
      </Container>
    </>
  )
}
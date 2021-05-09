import Layout from '../components/Layout'
import { Box, Container, Divider, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Index() {
  return (
    <Layout>
      <Header />
      <Heading as="h1" mb="4">Hello, I'm Jesse Chen</Heading>
      <Container mb="8">
        <Text>
          Hello, world!  This is my new and improved website.  Thanks for checking it out.  Lorem ipsum and all that jazz.  It’s been a long time since we saw a revamp here. 
          <br />
          <br />
          1. I love building teams and helping engineering organizations scale
          <br />
          2. I love working on products that people care about
          <br />
          <br />
          Experience scaling and supporting multiple fullstack product teams at both Facebook and Instagram.  
        </Text>
      </Container>
      <Image 
        mb={8}
        borderRadius="4"
        boxShadow="lg"
        src="/images/hero.jpg"
      />
      <Divider />
      <Grid 
        px="8"
        mt="8"
        templateColumns="repeat(3, 3fr)" 
        gap={4}>
        <Box w="100%" h="40" bg="blue.500" />
        <Box w="100%" h="40" bg="blue.500" />
        <Box w="100%" h="40" bg="blue.500" />
        <Box w="100%" h="40" bg="blue.500" />
        <Box w="100%" h="40" bg="blue.500" />
        <Box w="100%" h="40" bg="blue.500" />
        <Box w="100%" h="40" bg="blue.500" />
        <Box w="100%" h="40" bg="blue.500" />
        <Box w="100%" h="40" bg="blue.500" />
      </Grid>
      <Footer />
    </Layout>
  )
}
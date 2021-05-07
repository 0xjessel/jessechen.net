import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import { Box, Container, Divider, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Index({ posts }) {
  return (
    <Layout>
      <Header />
      <Heading as="h1" mb="4">Hello, I'm Jesse Chen</Heading>
      <Container mb="8">
        <Text>
          Hello, world!  This is my new and improved website.  Thanks for checking it out.  Lorem ipsum and all that jazz.  It’s been a long time since we saw a revamp here. 
        </Text>
        <br />
        <ol>
          <li>I love building teams and helping engineering organizations scale</li>
          <li>I love working on products that people care about</li>
        </ol>
        <br />
        <Text>
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

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}

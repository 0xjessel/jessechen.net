import { Heading, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ArticleListItem from '../components/ArticleListItem'

import { getAllMDXPostsWithMetadata } from '../utils/mdxUtils'

export default function Articles({ posts }) {
  return (
    <Layout>
      <Header />
      <Heading as="h1" mb="8">Articles</Heading>
      <VStack spacing="16">
        {posts.map((post) => 
          <ArticleListItem key={post.filePath} post={post} />
        )}
      </VStack>
      <Footer />
    </Layout>
  )
}

export function getStaticProps() {
  const posts = getAllMDXPostsWithMetadata()

  return { props: { posts } }
}
import { Heading, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ArticleListItem from '../components/ArticleListItem'

import { getAllMDXPostsWithMetadata } from '../utils/mdxUtils'

export default function Articles({ posts }) {
  return (
    <Layout
      SEO={{ 
        title: "Articles",
        description: "Sage wisdoms crafted by Jesse Chen",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/articles`,
      }}>
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
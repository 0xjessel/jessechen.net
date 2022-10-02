import { Heading, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostListItem from '../components/PostListItem'

import { getAllMDXPostsWithMetadata } from '../utils/mdxUtils'

export default function Posts({ posts }) {
  return (
    <Layout
      SEO={{ 
        title: "Posts",
        description: "Sage wisdoms by Jesse Chen",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/posts`,
      }}>
      <Header />
      <Heading as="h1" mb="8">Posts</Heading>
      <VStack spacing="16">
        {posts.map((post) => 
          <PostListItem key={post.filePath} post={post} />
        )}
      </VStack>
      <Footer />
    </Layout>
  )
}

export function getStaticProps() {
  const posts = getAllMDXPostsWithMetadata(
    true, // sorted
    false, // includeUnpublished
    false, // withContent
  )

  return { props: { posts } }
}
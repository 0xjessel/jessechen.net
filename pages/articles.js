import { Heading, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'

import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import ArticleListItem from '../components/ArticleListItem'

export default function Articles({ posts }) {
  return (
    <Layout>
      <Header />
      <Heading as="h1" mb="8">Articles</Heading>
      <VStack spacing="16">
        {posts.map((post) => <ArticleListItem post={post} />)}
      </VStack>
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
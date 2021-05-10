import { Heading, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ArticleListItem from '../components/ArticleListItem'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getAllMDXPosts, POSTS_PATH } from '../utils/mdxUtils'

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
  const posts = getAllMDXPosts().map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    data.readingTime = require('reading-time')(content)

    return {
      content,
      data,
      filePath,
    }
  }).sort((postA, postB) => postA.data.date < postB.data.date ? 1 : -1)

  return { props: { posts } }
}
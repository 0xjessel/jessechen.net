import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import { getAllMDXPosts, POSTS_PATH } from '../../utils/mdxUtils'

import Layout from '../../components/Layout'
import { Heading, HStack, Text } from '@chakra-ui/layout'
import Header from '../../components/Header'
import Tags from '../../components/Tags'

import { components } from '../../utils/mdxComponents'

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components })

  return (
    <Layout>
      <Header />
      <Heading as="h1" mb="4">{frontMatter.title}</Heading>
      <HStack mb="8">
        <Text color="gray.500">
          {'Jesse Chen • '}
          {new Date(frontMatter.date)
            .toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}
          {' • '}
          {frontMatter.readingTime.text}
        </Text>
        <Tags tags={frontMatter.tags} />
      </HStack>
      {content}
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug.join('/')}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  data.readingTime = require('reading-time')(content)

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require('remark-breaks'),
        require('remark-slug'),
      ],
      rehypePlugins: [
        require('mdx-prism'),
      ],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllMDXPosts()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug: slug.split('/') } }))

  return {
    paths,
    fallback: false,
  }
}

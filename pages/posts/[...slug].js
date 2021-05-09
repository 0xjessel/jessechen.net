import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import { getAllMDXPosts, POSTS_PATH } from '../../utils/mdxUtils'

import NLink from 'next/link'
import Layout from '../../components/Layout'
import { Box, Code, Divider, Heading, HStack, Kbd, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/layout'
import Header from '../../components/Header'
import Tags from '../../components/Tags'
import { useColorModeValue } from '@chakra-ui/color-mode'

const components = {
  h1: (p) => <Heading as="h1" fontSize="2xl" mb="4" {...p} />,
  h2: (p) => <Heading as="h2" fontSize="xl" mb="4" {...p} />,
  h3: (p) => <Heading as="h3" fontSize="lg" mb="4" {...p} />,
  h4: (p) => <Heading as="h4" fontSize="md" mb="4" {...p} />,
  h5: (p) => <Heading as="h5" fontSize="md" mb="4" {...p} />,
  h6: (p) => <Heading as="h6" fontSize="md" mb="4" {...p} />,
  p: (p) => <Text as="p" mb="8" lineHeight="tall" {...p} />,
  strong: (p) => <Text as="strong" fontWeight="semibold" {...p} />,
  a: (p) => <Link isExternal color={useColorModeValue("yellow.500", "yellow.400")} {...p} />,
  ul: (p) => <UnorderedList mb="8" {...p} />,
  ol: (p) => <OrderedList mb="8" {...p} />,
  li: (p) => <ListItem {...p} />,
  blockquote: (p) =>  <Box
    as="blockquote"
    position="relative"
    mx={[-4, 0]}
    pl={6}
    pr={8}
    py={2}
    my={8}
    fontSize="lg"
    sx={{
      '& p:last-child': {
        mb: 0
      }
    }}
    fontStyle="italic"
    borderLeftWidth={4}
    borderLeftColor={useColorModeValue('gray.400', 'gray.600')}
    rounded={['none', 'sm']}
    {...p}
    _after={{
      // opening: “
      content: '"”"',
      fontFamily: 'serif',
      position: 'absolute',
      color: useColorModeValue('gray.400', 'gray.600'),
      fontSize: '5xl',
      top: '-4px',
      right: 3
    }}
  />,
  inlineCode: (p) => <Code {...p} />,
  hr: (p) => <Divider mb="8" {...p} />,
  kbd: (p) => <Kbd {...p} />,
}

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
          9 mins
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

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require('remark-breaks'),
        require('remark-slug'),
        [ 
          // TODO: this doesn't actually work
          require('remark-autolink-headings'),
          {
            behavior: 'append',
          },
        ],
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

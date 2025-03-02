import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import path from 'path'
import MDXPrism from 'mdx-prism';
import remarkBreaks from 'remark-breaks';
import remarkSlug from 'remark-slug';
import { getAllMDXPosts, getAllMDXPostsWithMetadata, POSTS_PATH } from '../../utils/mdxUtils'

import Layout from '../../components/Layout'
import { Flex, Heading, Spacer, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PostMetadata from '../../components/PostMetadata'

import { components } from '../../utils/mdxComponents'
import { useLinkColor } from '../../styles/colorModes'

export default function PostPage({ source, frontMatter, filePath, previous, next }) {
  const linkColor = useLinkColor()

  return (
    <Layout
      SEO={{ 
        title: frontMatter.title,
        description: frontMatter.description,
        url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/posts/${filePath}`,
      }}>
      <Header />
      <Heading as="h1" mb="2">{frontMatter.title}</Heading>
      <PostMetadata 
        frontMatter={frontMatter}
        showAuthor={true}
        showClock={true}
        mb={8}
      />
      <MDXRemote {...source} components={components} />
      <Flex as="nav" mt="20">
        {previous && 
          <NextLink href={`/posts/${previous.filePath.replace(/\.mdx?$/, '')}`} passHref legacyBehavior>
            <ChakraLink 
              textAlign="left"
              color={linkColor}>
              {`← ${previous.title}`}
            </ChakraLink>
          </NextLink>
        }
        <Spacer />
        {next &&
          <NextLink href={`/posts/${next.filePath.replace(/\.mdx?$/, '')}`} passHref legacyBehavior>
            <ChakraLink 
              textAlign="right"
              color={linkColor}>
              {`${next.title} →`}
            </ChakraLink>
          </NextLink>
        }
      </Flex>
      <Footer />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilename = `${params.slug.join('/')}.mdx`
  const postFilePath = path.join(POSTS_PATH, postFilename)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  
  if (!data.isPublished) {
    return {
      notFound: true,
    }
  }

  data.readingTime = require('reading-time')(content)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkBreaks, remarkSlug],
      rehypePlugins: [MDXPrism],
    },
    scope: data,
  })

  const allPosts = getAllMDXPostsWithMetadata()
  const postIndex = allPosts.findIndex(post => post.filePath === postFilename)
  const prevPost = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null
  const nextPost = postIndex > 0 ? allPosts[postIndex - 1] : null 

  let previous = null
  if (prevPost !== null) {
    const prevPostFilePath = path.join(POSTS_PATH, prevPost.filePath)
    const prevSource = fs.readFileSync(prevPostFilePath)
    const { _, data } = matter(prevSource)

    previous = {
      filePath: prevPost.filePath,
      title: data.title,
    }
  }

  let next = null;
  if (nextPost !== null) {
    const nextPostFilePath = path.join(POSTS_PATH, nextPost.filePath)
    const nextSource = fs.readFileSync(nextPostFilePath)
    const { _, data } = matter(nextSource)

    next = {
      filePath: nextPost.filePath,
      title: data.title,
    }
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      filePath: `${params.slug.join('/')}`,
      previous,
      next,
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

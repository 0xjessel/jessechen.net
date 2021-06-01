import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import { getAllMDXPosts, getAllMDXPostsWithMetadata, POSTS_PATH } from '../../utils/mdxUtils'

import Layout from '../../components/Layout'
import { Flex, Heading, Link, Spacer } from '@chakra-ui/layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NLink from 'next/link'
import ArticleMetadata from '../../components/ArticleMetadata'

import { components } from '../../utils/mdxComponents'
import { useLinkColor } from '../../styles/colorModes'

export default function PostPage({ source, frontMatter, filePath, previous, next }) {
  const content = hydrate(source, { components })

  return (
    <Layout
      SEO={{ 
        title: frontMatter.title,
        description: frontMatter.description,
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/posts/${filePath}`,
      }}>
      <Header />
      <Heading as="h1" mb="2">{frontMatter.title}</Heading>
      <ArticleMetadata 
        frontMatter={frontMatter}
        showAuthor={true}
        mb={8}
      />
      {content}
      <Flex as="nav" mt="20">
        {previous && 
          <NLink
            as={`/posts/${previous.filePath.replace(/\.mdx?$/, '')}`}
            href={`/posts/[...slug]`}>
            <Link color={useLinkColor()}>
              {`← ${previous.title}`}
            </Link>
          </NLink>
        }
        <Spacer />
        {next &&
          <NLink 
            as={`/posts/${next.filePath.replace(/\.mdx?$/, '')}`}
            href={`/posts/[...slug]`}>
            <Link color={useLinkColor()}>
              {`${next.title} →`}
            </Link>
          </NLink>
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

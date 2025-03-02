import { Container, Heading, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useLinkColor } from '../styles/colorModes'
import PostMetadata from './PostMetadata'

export default function PostListItem({ post }) {
  return (
    <Container
      as="article" 
      minWidth="100%">
      <Heading 
        as="h2" 
        size="lg"
        display="inline-block"
        _hover={{ color: useLinkColor() }}>
        <NextLink href={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} passHref legacyBehavior>
          <ChakraLink>
            {post.data.title}
          </ChakraLink>
        </NextLink>
      </Heading>
      <PostMetadata 
        frontMatter={post.data}
        showAuthor={false}
        showClock={false}
      />
    </Container>
  )
}
import { Container, Heading } from '@chakra-ui/layout'
import NLink from 'next/link'
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
        <NLink
          as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/posts/[...slug]`}
          passHref>
          {post.data.title}
        </NLink>
      </Heading>
      <PostMetadata 
        frontMatter={post.data}
        showAuthor={false}
        showClock={false}
      />
    </Container>
  )
}
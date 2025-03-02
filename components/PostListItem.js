import { Container, Heading, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { useLinkColor } from '../styles/colorModes'
import PostMetadata from './PostMetadata'

export default function PostListItem({ post }) {
  const linkColor = useLinkColor();
  
  return (
    <Container
      as="article" 
      minWidth="100%">
      <Heading 
        as="h2" 
        size="lg"
        display="inline-block"
        _hover={{ color: useLinkColor() }}>
        <Link 
          href={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
          style={{ color: linkColor }}
        >
          {post.data.title}
        </Link>
      </Heading>
      <PostMetadata 
        frontMatter={post.data}
        showAuthor={false}
        showClock={false}
      />
    </Container>
  )
}
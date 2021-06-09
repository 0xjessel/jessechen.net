import { Container, Heading } from '@chakra-ui/layout'
import NLink from 'next/link'
import { useLinkColor } from '../styles/colorModes'
import ArticleMetadata from './ArticleMetadata'

export default function ArticleListItem({ post }) {
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
      <ArticleMetadata 
        frontMatter={post.data}
        showAuthor={false}
        showClock={false}
      />
    </Container>
  )
}
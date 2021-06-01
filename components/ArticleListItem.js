import { Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/layout'
import NLink from 'next/link'
import { useLinkColor } from '../styles/colorModes'
import ArticleMetadata from './ArticleMetadata'

export default function ArticleListItem({ post }) {
  return (
    <LinkBox 
      as="article" 
      minWidth="100%"
      sx={{
        '&:hover h2': { color: useLinkColor()}
      }}>
      <Heading as="h2" size="lg">
        <NLink
          as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/posts/[...slug]`}
          passHref>
          <LinkOverlay>
            {post.data.title}
          </LinkOverlay>
        </NLink>
      </Heading>
      <ArticleMetadata 
        frontMatter={post.data}
        showAuthor={false}
      />
      <Text>
        {post.data.description}
      </Text>
    </LinkBox>
  )
}
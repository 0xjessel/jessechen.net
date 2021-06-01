import { Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/layout'
import NLink from 'next/link'
import { useLinkColor } from '../styles/colorModes'
import Tags from './Tags'
import { FiClock } from 'react-icons/fi'

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
      <HStack>
        <Text fontSize="sm" color="gray.500">
          {new Date(post.data.date)
            .toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}
          {' • '}
          <FiClock style={{ display: "inline" }} />
          {' '}
          {post.data.readingTime.text}
        </Text>
        <Tags tags={post.data.tags} />
      </HStack>
      <Text>
        {post.data.description}
      </Text>
    </LinkBox>
  )
}
import { Container, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/tag';
import Link from 'next/link'
import Tags from './Tags';

export default function ArticleListItem({ post }) {
  let timestamp = null;
  if (post.data.date) {
    timestamp = 
      <Text fontSize="sm" color="gray.500">
        {new Date(post.data.date)
          .toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}
      </Text>
  }

  return (
    <Stack as="article" minWidth="100%">
      <Heading as="h2" size="lg">
        <Link
          as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={`/posts/[...slug]`}>
          {post.data.title}
        </Link>
      </Heading>
      <HStack>
        {timestamp}
        <Tags tags={post.data.tags} />
      </HStack>
      <Text>
        {post.data.description}
      </Text>
    </Stack>
  )
}
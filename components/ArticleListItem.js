import { Container, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/tag';
import Link from 'next/link'
import Tags from './Tags';

export default function ArticleListItem({ post }) {
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
        <Text fontSize="sm" color="gray.500">
          {new Date(post.data.date)
            .toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}
          {' • '}
          {post.data.readingTime.text}
        </Text>
        <Tags tags={post.data.tags} />
      </HStack>
      <Text>
        {post.data.description}
      </Text>
    </Stack>
  )
}
import { Container, Text } from "@chakra-ui/layout";
import { FiClock } from 'react-icons/fi'
import Tags from './Tags'

export default function ArticleMetadata({ frontMatter, showAuthor, ...props }) {

  return (
    <Container {...props}>
      <Text
        css={{ display: 'inline' }}
        mr={2}
        fontSize="sm" 
        color="gray.500">
        {showAuthor ? 'Jesse Chen • ' : null}
        {new Date(frontMatter.date)
          .toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}
        {' • '}
        <FiClock style={{ display: "inline" }} />
        {' '}
        {frontMatter.readingTime.text}
      </Text>
      <Tags tags={frontMatter.tags} />
    </Container>
  )
}
import { Container, Heading, Link, Text } from "@chakra-ui/layout"
import { useLinkColor } from "../styles/colorModes"

export default function ProjectListItem({ project }) {
  return(
    <Container
      as="article" 
      minWidth="100%">
      <Heading
        as="h3"
        size="md"
        display="inline-block"
        _hover={{ color: useLinkColor() }}>
        <Link
          href={project.href} 
          _hover={{ textDecoration: 'none' }}
          isExternal>
          {project.title}
        </Link>
      </Heading>
      <Text 
        color="gray.500" 
        lineHeight="base"
        whiteSpace="pre-line">
        {project.description}
      </Text>
    </Container>
  )
}
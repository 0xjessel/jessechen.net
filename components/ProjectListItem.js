import { Container, Heading, Link, Text } from "@chakra-ui/layout"
import { useLinkColor } from "../styles/colorModes"
import { FiArrowUpRight } from 'react-icons/fi'

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
          <FiArrowUpRight 
            style={{ 
              display: 'inline',
              marginLeft: '2px',
              verticalAlign: 'baseline',
            }} 
            size="0.7em" 
          />
        </Link>
      </Heading>
      <Text 
        lineHeight="base"
        whiteSpace="pre-line">
        {project.description}
      </Text>
    </Container>
  )
}
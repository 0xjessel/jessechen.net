import { Box, Code, Divider, Heading as CHeading, Kbd, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/layout'
import { Image, useColorModeValue } from '@chakra-ui/react'
import { useLinkColor } from '../styles/links'

function Heading({ children, ...props }) {
  return (
    <CHeading 
      {...props} 
      mb="4"
      css={{
        '&:hover a': { opacity: 0.25 },
        '&:hover a:hover': { opacity: 1 }
      }}>
      {children}
      <Link 
        href={`#${props.id}`}
        ml="1"
        opacity="0"
        _hover={{
          opacity: 1,
          color: useLinkColor(),
          textDecoration: 'underline',
        }}
        _focus={{
          opacity: 1,
          color: useLinkColor(),
          textDecoration: 'underline'
        }}>
        #
      </Link>
    </CHeading>
  )
}

export const components = {
  h1: (p) => <Heading as="h1" fontSize="2xl" {...p} />,
  h2: (p) => <Heading as="h2" fontSize="xl" {...p} />,
  h3: (p) => <Heading as="h3" fontSize="lg" {...p} />,
  h4: (p) => <Heading as="h4" fontSize="md" {...p} />,
  h5: (p) => <Heading as="h5" fontSize="md" {...p} />,
  h6: (p) => <Heading as="h6" fontSize="md" {...p} />,
  p: (p) => <Text as="p" mb="8" {...p} />,
  strong: (p) => <Text as="strong" fontWeight="semibold" {...p} />,
  a: (p) => <Link isExternal color={useLinkColor()} {...p} />,
  ul: (p) => <UnorderedList mb="8" {...p} />,
  ol: (p) => <OrderedList mb="8" {...p} />,
  li: (p) => <ListItem {...p} />,
  blockquote: (p) =>  <Box
    as="blockquote"
    position="relative"
    mx={[-4, 0]}
    pl={6}
    pr={8}
    py={2}
    my={8}
    fontSize="lg"
    sx={{
      '& p:last-child': {
        mb: 0
      }
    }}
    fontStyle="italic"
    borderLeftWidth={4}
    borderLeftColor={useColorModeValue('gray.400', 'gray.600')}
    rounded={['none', 'sm']}
    {...p}
    _after={{
      // opening: “
      content: '"”"',
      fontFamily: 'serif',
      position: 'absolute',
      color: useColorModeValue('gray.400', 'gray.600'),
      fontSize: '5xl',
      top: '-4px',
      right: 3
    }}
  />,
  inlineCode: (p) => <Code {...p} />,
  pre: (p) =>
    <Box mb="8">
      <pre {...p} />
    </Box>,
  hr: (p) => <Divider mb="8" {...p} />,
  kbd: (p) => <Kbd {...p} />,
  img: (p) => <Image {...p} />,
  iframe: (p) => <Box my="8"><iframe {...p} /></Box>
}
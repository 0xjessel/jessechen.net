/* eslint-disable react/display-name */
import { AspectRatio, Box, Center, Code, Divider, Heading as CHeading, Kbd, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import { Image, useColorModeValue, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

import { useLinkColor } from '../styles/colorModes'
import Callout from '../components/Callout'

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
      <ChakraLink 
        href={`#${props.id}`}
        ml="1"
        opacity="0"
        fontWeight="bold"
        _hover={{
          opacity: 1,
          color: useLinkColor(),
        }}
        _focus={{
          opacity: 1,
          color: useLinkColor(),
        }}>
        #
      </ChakraLink>
    </CHeading>
  )
}

function GIF({ children, ...props }) {
  return (
    <Box {...props}>
      <video autoPlay loop muted playsInline>
        {children}
      </video>
    </Box>
  )
}

// Custom link components that handles external and internal links
const CustomLink = (props) => {
  const linkColor = useLinkColor();
  // Check if it's an external link
  const isExternal = props.href && (props.href.startsWith('http') || props.href.startsWith('mailto:'));
  
  if (isExternal) {
    return <ChakraLink isExternal color={linkColor} {...props} />;
  }
  
  // For internal links
  return (
    <Link 
      href={props.href}
      style={{ color: linkColor }}
      {...props}
    >
      {props.children}
    </Link>
  );
}

// Custom image component that handles both Cloudinary and local images
const CustomImage = (props) => {
  // Check if the image is from Cloudinary
  const isCloudinary = props.src && !props.src.startsWith('/');
  
  if (isCloudinary) {
    return (
      <CldImage
        {...props}
        width={800}
        height={600}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    );
  }
  
  // For local images
  return <Image {...props} />;
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
  a: (p) => <CustomLink {...p} />,
  Link: (p) => <CustomLink {...p} />,
  ul: (p) => <UnorderedList mb="8" {...p} />,
  ol: (p) => <OrderedList mb="8" {...p} />,
  li: (p) => <ListItem {...p} />,
  blockquote: (p) =>  
    <Box
      as="blockquote"
      px={6}
      py={2}
      my={8}
      fontSize="xl"
      lineHeight="tall"
      sx={{
        '& p:last-child': {
          mb: 0
        }
      }}
      fontStyle="italic"
      borderLeftWidth={4}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      borderLeftColor={useColorModeValue('gray.400', 'gray.600')}
      {...p}
    />,
  code: (p) => <Code display="inline" {...p} />,
  pre: (p) =>
    <Box mb="8">
      <pre {...p} />
    </Box>,
  hr: (p) => <Divider mb="8" {...p} />,
  kbd: (p) => <Kbd {...p} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (p) => <CustomImage {...p} />,
  VideoEmbed: (p) => <AspectRatio my="8"><iframe {...p} /></AspectRatio>,
  GIF: (p) => <GIF my="8" {...p} />,
  Caption: (p) => <Center mb="8" mt="-6"><Text as="i" fontSize="sm" {...p} /></Center>,
  Callout: (p) => <Callout mb="8" {...p} />,
}
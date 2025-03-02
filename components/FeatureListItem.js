import { Box, Heading, Image, LinkBox, LinkOverlay, Text, useBreakpointValue } from "@chakra-ui/react";

export default function FeatureListItem({ feature, ...props }) {
  const imgSrc = `https://res.cloudinary.com/jessel/image/upload/w_300,f_auto,c_scale/${feature.image}`

  const tooSmall = useBreakpointValue({ base: true, sm: true, md: false })

  return(
    <LinkBox 
      {...props}
      as="article" 
      borderWidth="1px" 
      rounded="md"
      display={['block', 'flex', 'block']}
      overflow="hidden"
      transition="all 0.25s"
      transitionTimingFunction="spring(1 100 10 10)"
      _hover={tooSmall 
        ? { }
        : { transform: `translateY(-4px)`, shadow: `xl` }
      }>
      <Image
        objectFit="cover"
        src={imgSrc}
        height={['150px', '165px', '150px']}
        width={['100%', '165px', '100%']}
        alt={`${feature.title} thumbnail`}
      />
      <Box pt="4" px="4" pb="4">
        <Heading size="md" mb="2">
          <LinkOverlay href={feature.href} isExternal>
            <Text noOfLines={[2, null, 3]}>
              {feature.title}
            </Text>
          </LinkOverlay>
        </Heading>
        <Text noOfLines="2" lineHeight="base">
          {feature.description}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {new URL(feature.href).hostname}
        </Text>
      </Box>
    </LinkBox>
  )
}
import { Image } from "@chakra-ui/image";
import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/react";

export default function FeatureListItem({ feature, ...props }) {
  const imgSrc = `https://res.cloudinary.com/jessel/image/upload/f_auto,c_scale,w_300,dpr_${window.devicePixelRatio}/${feature.image}`

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
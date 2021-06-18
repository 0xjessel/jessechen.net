import { Image } from "@chakra-ui/image";
import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";

export default function FeatureListItem({ feature, ...props }) {
  const imgSrc = `https://res.cloudinary.com/jessel/image/upload/f_auto,c_scale,w_300,dpr_${window.devicePixelRatio}/${feature.image}`

  return(
    <LinkBox 
      {...props}
      as="article" 
      borderWidth="1px" 
      rounded="md"
      display={['block', 'flex', 'block']}
      overflow="hidden">
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
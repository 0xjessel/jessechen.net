import { Image } from "@chakra-ui/image";
import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";

export default function FeatureListItem({ feature, ...props }) {
  return(
    <LinkBox 
      {...props}
      as="article" 
      borderWidth="1px" 
      rounded="md"
      display={['flex', null, 'block']}
      overflow="hidden">
      <Image
        objectFit="cover"
        src={feature.image}
        height={['165px', null, '150px']}
        width={['165px', null, '100%']}
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
import { LinkOverlay, SimpleGrid } from "@chakra-ui/layout";
import { Icon, Image } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa"

export default function InstaGrid({ medias, ...props }) {
  if (!medias) {
    return null
  }

  return (
    <SimpleGrid
      {...props}
      columns={[2, 3]}
      spacing="4">
      {medias.map((media) => 
        <LinkOverlay
          isExternal
          href={media.permalink}
          key={media.id}
          css={media.media_type === "VIDEO" 
            ? {
                position: 'relative',
                '& svg' : {
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }
              } : {
                position: 'relative',
              }
          }>
          <Image
            width="100%"
            css={{ 'aspect-ratio': '1' }}
            objectFit="cover"
            src={media.media_type === "VIDEO" ? media.thumbnail_url : media.media_url}
            alt="Instagram photo"
          />
          {media.media_type === "VIDEO"
            ? <Icon as={FaPlay} boxSize="8" />
            : null
          }
        </LinkOverlay>
      )}
    </SimpleGrid>
  )
}
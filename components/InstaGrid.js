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
      {medias.map((media) => {
        const isVideo = media.media_type === "VIDEO" 

        return (
          <LinkOverlay
            isExternal
            href={media.permalink}
            key={media.id}
            css={isVideo
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
              css={{ 'aspectRatio': '1' }}
              objectFit="cover"
              src={isVideo ? media.thumbnail_url : media.media_url}
              alt="Instagram photo"
            />
            {isVideo ? <Icon as={FaPlay} boxSize="8" /> : null}
          </LinkOverlay>
        )}
      )}
    </SimpleGrid>
  )
}
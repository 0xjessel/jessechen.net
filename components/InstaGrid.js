import { AspectRatio, Icon, LinkOverlay, SimpleGrid } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa"
import NImage from 'next/image'
import cloudinaryLoader from "../utils/cloudinaryLoader";

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
            data-umami-event="click--instagram_grid"
            isExternal
            href={media.permalink}
            key={media.id}
            position="relative"
            css={isVideo
              ? {
                  '& svg' : {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }
                } 
              : {}
            }>
            <AspectRatio ratio="1">
              <NImage
                loader={cloudinaryLoader}
                src={media.public_id}
                height="181"
                width="181"
                alt="Instagram photo"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 181px, 181px"
                quality={90}
              />
            </AspectRatio>
            {isVideo ? <Icon as={FaPlay} boxSize="6" /> : null}
          </LinkOverlay>
        )}
      )}
    </SimpleGrid>
  )
}
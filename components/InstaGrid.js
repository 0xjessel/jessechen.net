import { AspectRatio, LinkOverlay, SimpleGrid } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa"
import NImage from 'next/image'

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

        console.log(media.media_url)

        return (
          <LinkOverlay
            className="umami--click--instagram_grid"
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
                layout="fill"
                src={`/image/fetch/f_auto,c_fill,w_181,h_181,dpr_${window.devicePixelRatio}/${encodeURIComponent(isVideo ? media.thumbnail_url : media.media_url)}`}
                alt="Instagram photo"
              />
            </AspectRatio>
            {isVideo ? <Icon as={FaPlay} boxSize="6" /> : null}
          </LinkOverlay>
        )}
      )}
    </SimpleGrid>
  )
}
import { Box, LinkOverlay, SimpleGrid } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa"
import NImage from "next/image"

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

        const boxBaseCSS = {
          position: 'relative',
          '&::before': {
            content: '""',
            display: "block",
            "padding-bottom": "100%"
          },
        }

        return (
          <LinkOverlay
            isExternal
            href={media.permalink}
            key={media.id}
            position="relative">
            <Box
              css={isVideo
                ? {
                    ...boxBaseCSS,
                    '& svg' : {
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }
                  } 
                : boxBaseCSS
                }>
              <NImage
                layout="fill" 
                objectFit="cover"
                src={isVideo ? media.thumbnail_url : media.media_url}
                alt="Instagram photo"
              />
              {isVideo ? <Icon as={FaPlay} boxSize="8" /> : null}
            </Box>
          </LinkOverlay>
        )}
      )}
    </SimpleGrid>
  )
}
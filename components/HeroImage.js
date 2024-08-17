import { Box } from '@chakra-ui/react'
import NImage from 'next/image'
import cloudinaryLoader from '../utils/cloudinaryLoader'

export default function HeroImage() {
  return (
    <Box
      mb={8}
      borderRadius="4"
      overflow="hidden"
      boxShadow="lg"
      css={{
        '& span': { display: 'block !important' },
      }}>
      <NImage 
        loader={cloudinaryLoader}
        src="hero.jpg"
        dpr={window.devicePixelRatio}
        width="638"
        height="420"
        style={{
          width: '100%',
          height: 'auto',
        }}
        alt="image of jesse chen"
      />
    </Box>
  )
}

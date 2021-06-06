import { Box } from '@chakra-ui/react'
import NImage from 'next/image'

export default function HeroImage() {
  return (
    <Box
      mb={8}
      borderRadius="4"
      maxHeight="421"
      boxShadow="lg"
      overflow="hidden">
      <NImage 
        width="640"
        height="421"
        layout="intrinsic"
        src={`/image/upload/f_auto,c_fill,w_421,dpr_${window.devicePixelRatio}/v1623004674/hero.jpg`}
        alt="image of jesse chen"
      />
    </Box>
  )
}

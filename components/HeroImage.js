import { Box } from '@chakra-ui/react'
import NImage from 'next/image'

export default function HeroImage() {
  return (
    <Box
      mb={8}
      borderRadius="4"
      overflow="hidden"
      boxShadow="lg"
      css={{
        '& div': { display: 'block !important' },
      }}>
      <NImage 
        width="638"
        height="420"
        layout="intrinsic"
        src={`/image/upload/f_auto,c_fill,w_638,dpr_${window.devicePixelRatio}/v1623004674/hero.jpg`}
        alt="image of jesse chen"
      />
    </Box>
  )
}

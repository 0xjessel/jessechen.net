import { Box, Center } from '@chakra-ui/react'
import NImage from 'next/image'
import cloudinaryLoader from '../utils/cloudinaryLoader'

export default function HeroImage(props) {
  return (
    <Box
      {...props}
      borderRadius="4"
      overflow="hidden"
      boxShadow="lg"
      css={{
        '& span': { display: 'block !important' },
      }}>
      <NImage 
        loader={cloudinaryLoader}
        src="hero2.jpg"
        dpr={window.devicePixelRatio}
        width="640"
        height="766"
        style={{
          width: '100%',
          height: 'auto',
        }}
        alt="image of jesse chen"
      />
    </Box>
  )
}

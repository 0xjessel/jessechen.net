import { Box } from '@chakra-ui/react'
import { CldImage } from 'next-cloudinary'

export default function HeroImage(props) {
  return (
    <Box
      {...props}
      width="100%"
      height="fit-content"
      borderRadius="4"
      overflow="hidden"
      boxShadow="lg"
      css={{
        '& span': { display: 'block !important' },
      }}>
      <CldImage
        src="hero2"
        width={640}
        height={766}
        style={{
          width: '100%',
        }}
        alt="image of jesse chen"
        priority
        sizes="(max-width: 640px) 100vw, 640px"
      />
    </Box>
  )
}

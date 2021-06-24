var cloudinary = require('cloudinary');

import Layout from '../components/Layout'
import { Container, Divider, Heading, Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useAccentColor, useLinkColor } from '../styles/colorModes'
import dynamic from "next/dynamic";

const HeroImage = dynamic(
  () => {
    return import('../components/HeroImage')
  },
  { ssr: false },
)
const InstaGrid = dynamic(
  () => {
    return import('../components/InstaGrid')
  },
  { ssr: false },
)

export default function Index(props) {
  const igMedias = props.igMedias

  return (
    <Layout 
      SEO={{ 
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}`,
      }}>
      <Header />
      <Heading as="h1" mb="4">Hi, I'm <Text as="span" color={useAccentColor()}>Jesse Chen</Text> 👋</Heading>
      <Container mb="8">
        <Text>
          Hello world!  I am a software engineer/engineering manager, currently at Facebook.  I love building teams and helping engineering organizations scale, and I love working on products that people care about.  
          <br />
          <br />
          Welcome to my site, where I write sporadically about technology, finance, and career.  
          <br />
          <br />
          GHLF.
        </Text>
      </Container>
      <HeroImage />
      <Divider />
      <InstaGrid mt="8" px="8" medias={igMedias} />
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

  const igMedias = []
  try {
    const result = await cloudinary.v2.search.expression('folder:instagram/*')
      .with_field('context',)
      .sort_by('created_at','asc')
      .max_results('9')
      .execute()

    if (result) {
      result.resources.forEach(resource => igMedias.push(
        {
          public_id: resource.public_id,
          permalink: resource.context.media_permalink,
          media_type: resource.context.media_type,
          id: resource.context.id,
        }
      ))
    }
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      igMedias,
    },
    revalidate: 3600, // 1 day
  }
}
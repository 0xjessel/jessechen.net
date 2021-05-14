import Layout from '../components/Layout'
import { Container, Divider, Grid, Heading, Image, Skeleton, Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InstaGrid from '../components/InstaGrid'

export default function Index(props) {
  const igMedias = props.igMedias

  return (
    <Layout>
      <Header />
      <Heading as="h1" mb="4">Hello, I'm Jesse Chen</Heading>
      <Container mb="8">
        <Text>
          Hello, world!  This is my new and improved website.  Thanks for checking it out.  Lorem ipsum and all that jazz.  It’s been a long time since we saw a revamp here. 
          <br />
          <br />
          1. I love building teams and helping engineering organizations scale
          <br />
          2. I love working on products that people care about
          <br />
          <br />
          Experience scaling and supporting multiple fullstack product teams at both Facebook and Instagram.  
        </Text>
      </Container>
      <Image 
        mb={8}
        borderRadius="4"
        boxShadow="lg"
        src="/images/hero.jpg"
        fallback={<Skeleton mb={8} width={640} height={421} />}
      />
      <Divider />
      <InstaGrid mt="8" px="8" medias={igMedias} />
      <Footer />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://graph.instagram.com/${process.env.IG_USER_ID}/media?fields=media_type%2Cmedia_url%2Cpermalink%2Cthumbnail_url&limit=9&access_token=${process.env.IG_ACCESS_TOKEN}`)
  const data = await res.json()
  
  if (!res.ok) {
    console.error(res.statusText)
  }

  const igMedias = data.data ?? null;

  return {
    props: {
      igMedias,
    }
  }
}
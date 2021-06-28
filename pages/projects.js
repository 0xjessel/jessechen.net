import { Box, Center, Heading, Link, SimpleGrid, useBoolean, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import FadeItem from '../components/FadeItem'
import ProjectListItem from '../components/ProjectListItem'
import dynamic from "next/dynamic";


import { PROJECTS, FEATURES } from '../utils/projectsData'

const FeatureListItem = dynamic(
  () => {
    return import('../components/FeatureListItem')
  },
  { ssr: false },
)

const SEE_MORE_INDEX = 3

export default function Projects() {
  const [seeMore, setSeeMore] = useBoolean()

  return (
    <Layout
      SEO={{ 
        title: "Projects",
        description: "Notable features and work",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/projects`,
      }}>
      <Header />
      <FadeItem direction="up" triggerOnce>
        <Heading as="h1" mb="4">Featured Work</Heading>
      </FadeItem>
      <Box mb="8">
        <SimpleGrid columns={[1, null, 2]} spacing="4" mb="4">
          {FEATURES.map((feature, index) => {
            if (!seeMore && index > SEE_MORE_INDEX) {
              return null
            }

            const fadeDelay = index <= SEE_MORE_INDEX
              ? 200 + (400 * index)
              : 100 * ((index + 1) - (SEE_MORE_INDEX + 1))

            return (
              <FadeItem 
                key={feature.href} 
                delay={fadeDelay} 
                direction="up" 
                triggerOnce>
                <FeatureListItem height="100%" feature={feature} />
              </FadeItem>
            )
          })}
        </SimpleGrid>
        {!seeMore 
          ? <FadeItem delay={1800} direction="up" triggerOnce>
              <Center>
                <Link p="2" onClick={setSeeMore.toggle}>See more..</Link>
              </Center>
            </FadeItem>
          : null}
      </Box>
      <FadeItem delay={2000} direction="up" triggerOnce>
        <Heading as="h1" mb="4">Side Projects</Heading>
      </FadeItem>
      <FadeItem delay={2000} direction="up" triggerOnce>
        <VStack spacing="12">
          {PROJECTS.map((project) => 
            <ProjectListItem key={project.href} project={project} />
          )}
        </VStack>
      </FadeItem>
      <Footer />
    </Layout>
  )
}
import { Box, Center, Heading, Link, SimpleGrid, useBoolean, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectListItem from '../components/ProjectListItem'
import FeatureListItem from '../components/FeatureListItem'

import { PROJECTS, FEATURES } from '../utils/projectsData'

export default function Projects() {
  const [seeMore, setSeeMore] = useBoolean()

  return (
    <Layout
      SEO={{ 
        title: "Projects",
        description: "Notable projects and work",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/projects`,
      }}>
      <Header />
      <Heading as="h1" mb="4">Featured Work</Heading>
      <Box mb="8">
        <SimpleGrid columns={[1, null, 2]} spacing="4" mb="4">
          {FEATURES.map((feature, index) => {
            if (!seeMore && index > 3) {
              return null
            }

            return (
              <FeatureListItem 
                key={feature.href} 
                feature={feature} 
              />
            )
            })}
        </SimpleGrid>
        {!seeMore 
          ? <Center>
              <Link p="2" onClick={setSeeMore.toggle}>See more..</Link>
            </Center>
          : null}
      </Box>
      <Heading as="h1" mb="4">Side Projects</Heading>
      <VStack spacing="12">
        {PROJECTS.map((project) => 
          <ProjectListItem key={project.href} project={project} />
        )}
      </VStack>
      <Footer />
    </Layout>
  )
}
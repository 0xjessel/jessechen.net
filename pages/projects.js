import { Heading } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Projects() {
  return (
    <Layout>
      <Header />
      <Heading as="h1" mb="4">Projects</Heading>
      <Footer />
    </Layout>
  )
}
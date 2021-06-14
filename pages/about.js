import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WorkExperience from '../components/WorkExperience'
import dynamic from "next/dynamic";

const HeroImage = dynamic(
  () => {
    return import('../components/HeroImage')
  },
  { ssr: false },
)

export default function About() {
  return (
    <Layout
      SEO={{ 
        title: "About",
        description: "Things you should know about me",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/about`,
      }}>
      <Header />
      <Heading as="h1" mb="4">About Me</Heading>
      <Container mb="8">
        <HeroImage />
        <Text>
          For the last 10 years, I've been at Facebook where I focused on building both consumer products and engineering orgs at scale.  
          I've worked across a number of areas across the core app including Photos, Newsfeed, Video, FB/IG Live, Groups and Instagram Creators.
          Currently, I am the engineering lead for a group of teams building products for specific segments of community creators.
        </Text>
      </Container>
      <Container mb="8">
        <Heading as="h2" size="lg" mb="4">Career</Heading>
        <VStack spacing="8" mb="8">
          <WorkExperience
            imgSource="/images/about/fb-logo.png"
            company="Facebook"
            role="Engineering Manager"
            description={'Facebook Communities (Groups/Events/Profile).  Supporting a team of ~50 Software Engineers and Engineering Managers.'}
            dateRange="2020 - Present"
          />
          <WorkExperience
            imgSource="/images/about/ig-logo.png"
            company="Instagram"
            role="Engineering Manager"
            description={'Instagram Live and Creators.  My teams are responsible for the millions of influencers that drive the majority of impressions and engagement on Instagram.'}
            dateRange="2018 - 2020"
          />
          <WorkExperience
            imgSource="/images/about/fb-logo.png"
            company="Facebook"
            role="Engineering Manager"
            description={'I supported 3 fullstack product teams of Android, iOS, and WWW engineers at Facebook. Experience supporting engineers and managers, I grew the team from 4 to 25 engineers (recursively).'}
            dateRange="2016 - 2018"
          />
          <WorkExperience
            imgSource="/images/about/fb-logo.png"
            company="Facebook"
            role="Software Engineer"
            description={`I wrote code that you see on www.facebook.com.

              Experience in building UI products on mobile and desktop web. Tech-led and shipped core components of the www site including the photo album uploader, photo viewer, newsfeed composer, UFI and more.`}
            dateRange="2012 - 2016"
          />
        </VStack>
        <Heading as="h2" size="lg" mb="4">Education</Heading>
        <WorkExperience
          imgSource="/images/about/cal-logo.png"
          company="University of California, Berkeley"
          role="Bachelor of Science (B.S.), Electrical Engineering and Computer Sciences"
          description={`Center for Entrepreneurship and Technology, Residential Computing, Intramural Basketball`}
          dateRange="2008 - 2012"
        />
      </Container>
      <Footer />
    </Layout>
  )
}
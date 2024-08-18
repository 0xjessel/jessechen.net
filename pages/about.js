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
        <Text whiteSpace="pre-line">
          {`For the last 12 years, I've been at Meta where I focused on building consumer products and engineering orgs at scale.  During my time there, I have been responsible for creating and leading cross-functional teams on multiple 0-1 ventures, such as Instagram Creators and Threads.`}
        </Text>
      </Container>
      <Container mb="8">
        <Heading as="h2" size="lg" mb="4">Career</Heading>
        <VStack spacing="8" mb="8">
          <WorkExperience
            imgSource="/images/about/threads-logo.png"
            company="Threads"
            role="Director of Engineering, Threads"
            description={`Lead the engineering team for Threads. Built in 5 months and became the fastest growing app in history (100M users in 5 days).`}
            dateRange="2023 - Present"
          />
          <WorkExperience
            imgSource="/images/about/fb-logo.png"
            company="Facebook"
            role="Senior Engineering Manager"
            description={`Create and lead a 70-person engineering team to build new products for community creators.  Products we've launched include Online Events, Q&A, and Expert roles for Facebook Groups.`}
            dateRange="2020 - 2023"
          />
          <WorkExperience
            imgSource="/images/about/ig-logo.png"
            company="Instagram"
            role="Engineering Manager"
            description={'Led engineering for Instagram Live and Creator Monetization.  My teams were responsible for the millions of influencers that drive the majority of impressions and engagement on Instagram.'}
            dateRange="2018 - 2020"
          />
          <WorkExperience
            imgSource="/images/about/fb-logo.png"
            company="Facebook"
            role="Engineering Manager"
            description={`Built a new team that grew into 25 engineers and EMs to shift Facebook Video towards individual video creators.  Shipped 2-person Live, Creator app, and Top Fans for creators to connect with their fans.`}
            dateRange="2016 - 2018"
          />
          <WorkExperience
            imgSource="/images/about/fb-logo.png"
            company="Facebook"
            role="Software Engineer"
            description={`I wrote code that you see on www.facebook.com.

              Experience in building UI products on mobile and desktop web. Tech-led and shipped core components of the www site including the photo album uploader, photo viewer, newsfeed composer, and UFI.`}
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
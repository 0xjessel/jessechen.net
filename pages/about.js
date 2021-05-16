import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WorkExperience from '../components/WorkExperience'
import NImage from "next/image"

export default function About() {
  return (
    <Layout>
      <Header />
      <Heading as="h1" mb="4">About Me</Heading>
      <Container mb="8">
        <Box
          mb={8}
          borderRadius="4"
          maxHeight="421"
          boxShadow="lg"
          overflow="hidden">
          <NImage 
            width="640"
            height="421"
            layout="intrinsic"
            src="/images/hero.jpg"
          />
        </Box>
        <Text>
          My name is Jesse Chen and I am a software engineer at Facebook. I graduated from UC Berkeley in 2012 where I studied Electrical Engineering and Computer Sciences.
        </Text>
        <br />
        <Text>
          I started this website because I wanted to create a website for myself where I can control my online profile on the Internet and serve as a place where I can showcase some of my work or projects that I have done. It also serves as a place for people to get to know me better.
        </Text>
        <br />
        <Text>
          I host a Wordpress blog on this website where I write reviews, how to's, and other various thoughts. My most popular article by far is the article about how Google Voice saved my phone interview. It has been featured on sites like Lifehacker.
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
          dateRange="2008 - 2012"
        />
      </Container>
      <Footer />
    </Layout>
  )
}
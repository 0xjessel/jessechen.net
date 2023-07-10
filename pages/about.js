// import { Container, Heading, Text, VStack } from '@chakra-ui/react'
// import Layout from '../components/Layout'
// import Footer from '../components/Footer'
// import Header from '../components/Header'
// import WorkExperience from '../components/WorkExperience'
// import dynamic from "next/dynamic";

// const HeroImage = dynamic(
//   () => {
//     return import('../components/HeroImage')
//   },
//   { ssr: false },
// )

// export default function About() {
//   return (
//     <Layout
//       SEO={{
//         title: "About",
//         description: "Things you should know about me",
//         url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/about`,
//       }}>
//       <Header />
//       <Heading as="h1" mb="4">About Me</Heading>
//       <Container mb="8">
//         <HeroImage />
//         <Text whiteSpace="pre-line">
//           {`For the last 10+ years, I've been at Facebook where I focused on building both consumer products and engineering orgs at scale.  During my time there, I have been responsible for creating and leading cross-functional teams on multiple new 0-1 ventures, such as Instagram Creators and Facebook Groups.`}
//         </Text>
//       </Container>
//       <Container mb="8">
//         <Heading as="h2" size="lg" mb="4">Career</Heading>
//         <VStack spacing="8" mb="8">
//           <WorkExperience
//             imgSource="/images/about/fb-logo.png"
//             company="Facebook"
//             role="Senior Engineering Manager"
//             description={`Create and lead a 70-person engineering team to build new products for community creators.  Products we've launched include Online Events, Q&A, and Expert roles for Facebook Groups.`}
//             dateRange="2020 - Present"
//           />
//           <WorkExperience
//             imgSource="/images/about/ig-logo.png"
//             company="Instagram"
//             role="Engineering Manager"
//             description={'Led engineering for Instagram Live and Creator Monetization.  My teams were responsible for the millions of influencers that drive the majority of impressions and engagement on Instagram.'}
//             dateRange="2018 - 2020"
//           />
//           <WorkExperience
//             imgSource="/images/about/fb-logo.png"
//             company="Facebook"
//             role="Engineering Manager"
//             description={`Built a new team that grew into 25 engineers and EMs to shift Facebook Video towards individual video creators.  Shipped 2-person Live, Creator app, and Top Fans for creators to connect with their fans.`}
//             dateRange="2016 - 2018"
//           />
//           <WorkExperience
//             imgSource="/images/about/fb-logo.png"
//             company="Facebook"
//             role="Software Engineer"
//             description={`I wrote code that you see on www.facebook.com.

//               Experience in building UI products on mobile and desktop web. Tech-led and shipped core components of the www site including the photo album uploader, photo viewer, newsfeed composer, and UFI.`}
//             dateRange="2012 - 2016"
//           />
//         </VStack>
//         <Heading as="h2" size="lg" mb="4">Education</Heading>
//         <WorkExperience
//           imgSource="/images/about/cal-logo.png"
//           company="University of California, Berkeley"
//           role="Bachelor of Science (B.S.), Electrical Engineering and Computer Sciences"
//           description={`Center for Entrepreneurship and Technology, Residential Computing, Intramural Basketball`}
//           dateRange="2008 - 2012"
//         />
//       </Container>
//       <Footer />
//     </Layout>
//   )
// }
import { Container, Heading, Text } from "@chakra-ui/react";
import WorkExperience from "../components/WorkExperience";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import dynamic from "next/dynamic";
 
const HeroImage = dynamic(
  () => {
    return import("../components/HeroImage");
  },
  { ssr: false }
);

export default function About() {
  return (
    <Layout
      SEO={{
        title: "About",
        description: "Things you should know about me",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/about`,
      }}
    >
      <Header />
      <Heading as="h1" mb="4">
        About Me
      </Heading>
      <Container mb="8">
        <HeroImage />
        <Text whiteSpace="pre-line">
          {`For the last 1 years, I've been at Kgisl where I focused on building both consumer products and engineering orgs at scale.`}
        </Text>
      </Container>
      <Container mb="8">
        <Heading as="h2" size="lg" mb="4">
          Education
        </Heading>
        <WorkExperience
          imgSource="/images/about/cal-logo.png"
          company="Coimbatore Institute Of Emginnering and Technology"
          role="Bachelor of Technology(B.Tech), Information Technology"
          description={`Center for Entrepreneurship and Technology, Rotract Club Member, Cricketer`}
          dateRange="2018 - 2022"
        />{" "}
        <WorkExperience
          imgSource="/images/about/kgisl-logo.png"
          company="Kgisl"
          role="Software Engineer"
          description={` `}
          dateRange="2022 - Present"
        />
      </Container>
      <Footer />
    </Layout>
  );
}

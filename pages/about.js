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
          company="Coimbatore Institute Of Enginnering and Technology"
          role="Bachelor of Technology(B.Tech), Information Technology"
          description={`Center for Inteligence and Technology, Rotract Club Member, Cricketer`}
          dateRange="2018 - 2022"
        />{" " + " "}
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

// pages/index.js

import React from "react";
import Layout from "../components/Layout";
import { Container, Divider, Heading, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAccentColor } from "../styles/colorModes";
import dynamic from "next/dynamic";

const HeroImage = dynamic(() => import("../components/HeroImage"), {
  ssr: false,
});
const InstaGrid = dynamic(() => import("../components/InstaGrid"), {
  ssr: false,
});

export default function Index(props) {
  const { igMedias } = props; // Destructure the igMedias prop

  return (
    <Layout
      SEO={{
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}`,
      }}
    >
      <Header />
      <Heading as="h1" mb="4">
        Hi, I&apos;m <Text as="span" color={useAccentColor()}>Dhinesh </Text> 👋
      </Heading>
      <Container mb="8">
        <Text>
          Hello world! I&apos;m a Software Engineer currently at Kgisl. I love
          building Backend Applications.
          <br />
          <br />
          Welcome to my site, where I write sporadically about technology and
          career.
          <br />
          <br />
          GLHF.
        </Text>
      </Container>
      <HeroImage />
      <Divider />
      {/* Pass the igMedias prop to InstaGrid using double curly braces */}
      <InstaGrid mt="8" px="8" medias={igMedias} />
      <Footer />
    </Layout>
  );
}

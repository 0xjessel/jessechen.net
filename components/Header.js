import { Box, Button, ButtonGroup, Flex, Spacer } from "@chakra-ui/react"
import { FiSun, FiTwitter } from 'react-icons/fi'

export default function Header() {
  return (
    <Flex my="8">
      <ButtonGroup variant="">
        <Button 
          href="/"
          border="1px"
          borderColor="gray.800"
          py="1"
          px="3">
          jessel
        </Button>
        <Button
          href="/projects">
          Projects
        </Button>
        <Button
          href="/blog">
          Blog
        </Button>
        <Button
          href="/about">
          About
        </Button>
      </ButtonGroup>
      <Spacer />
      <Button 
        backgroundColor="white"
        borderRadius="full">
        <FiTwitter />
      </Button>
      <Button 
        backgroundColor="white"
        borderRadius="full">
        <FiSun />
      </Button>
    </Flex>
  );
};
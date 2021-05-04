import { Box, Button, ButtonGroup, Flex, Spacer } from "@chakra-ui/react"
import Link from 'next/link'
import { FiSun, FiTwitter } from 'react-icons/fi'

export default function Header() {
  return (
    <Flex my="8">
      <ButtonGroup variant="">
        <Button 
          border="1px"
          borderColor="gray.800"
          py="1"
          px="3">
          <Link href="/">
            <a>jessel</a>
          </Link>
        </Button>
        <Button>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </Button>
        <Button>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </Button>
        <Button>
          <Link href="/about">
            <a>About</a>
          </Link>
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
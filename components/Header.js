import NLink from 'next/link'
import { Box, Button, ButtonGroup, Flex, Link, Spacer, useColorMode } from "@chakra-ui/react"
import { FiSun, FiTwitter } from 'react-icons/fi'

export default function Header() {
  const { _, toggleColorMode } = useColorMode();
  return (
    <Flex my="8">
      <ButtonGroup variant="">
        <NLink href="/">
          <Button 
            border="1px"
            borderColor="gray.800">
            jessel
          </Button>
        </NLink>
        <NLink href="/projects">
          <Button>
            Projects
          </Button>
        </NLink>
        <NLink href="/blog">
          <Button>
            Blog
          </Button>
        </NLink>
        <NLink href="/about">
          <Button>
            About
          </Button>
        </NLink>
      </ButtonGroup>
      <Spacer />
      <Button 
        as="a"
        href="https://twitter.com/0xjessel"
        target="_blank"
        borderRadius="full">
        <FiTwitter />
      </Button>
      <Button 
        ml={2}
        borderRadius="full"
        onClick={toggleColorMode}>
        <FiSun />
      </Button>
    </Flex>
  );
};
import NLink from 'next/link'
import { Center, Flex, HStack, Link, Spacer, useColorMode } from "@chakra-ui/react"
import { FiSun, FiTwitter } from 'react-icons/fi'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" my={[0, 8]} mb={[8, null]}>
      <HStack spacing={[4, 8]}>
        <NLink href="/">
          <Link
            fontSize={['sm', 'md']}
            border="1px"
            borderColor={colorMode === 'light' ? 'gray.800' : 'gray.50'}>
            <Center px="2" py="1">
              𝚓𝚎𝚜𝚜𝚎𝚕 ⟠
            </Center>
          </Link>
        </NLink>
        <NLink href="/projects">
          <Link fontSize={['sm', 'md']}>
            Projects
          </Link>
        </NLink>
        <NLink href="/articles">
          <Link fontSize={['sm', 'md']}>
            Articles
          </Link>
        </NLink>
        <NLink href="/about">
          <Link fontSize={['sm', 'md']}>
            About
          </Link>
        </NLink>
      </HStack>
      <Spacer />
      <HStack spacing={[2, 8]}>
        <Link
          href="https://twitter.com/0xjessel"
          target="_blank"
          isExternal>
          <FiTwitter />
        </Link>
        <Link
          ml={2}
          onClick={toggleColorMode}>
          <FiSun />
        </Link>
      </HStack>
    </Flex>
  );
};
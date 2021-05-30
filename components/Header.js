import NLink from 'next/link'
import { Center, Flex, HStack, Link, Spacer, useColorMode } from "@chakra-ui/react"
import { FiSun, FiMoon } from 'react-icons/fi'
import { useBorderColor } from '../styles/colorModes';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const links = [
    ['Projects', '/projects'],
    ['Articles', '/articles'],
    ['About', '/about'],
  ]

  return (
    <Flex as="nav" my={[0, 8]} mb={[4, 8]}>
      <HStack spacing={[1, 4]}>
        <NLink href="/">
          <Link
            fontSize={['sm', 'md']}
            mr={1}
            border="1px"
            borderColor={useBorderColor()}>
            <Center 
              fontSize={['md', 'lg']} 
              whiteSpace="nowrap"
              py={1}
              px={2}>
              𝚓𝚎𝚜𝚜𝚎𝚕 ⟠        
            </Center>
          </Link>
        </NLink>
        {links.map(link => 
          <NLink href={link[1]}>
            <Link 
              fontSize={['sm', 'md']}
              borderRadius="base"
              p={2}
              _hover={{ 
                'text-decoration': 'none',
              }}>
              {link[0]}
            </Link>
          </NLink>
        )}
      </HStack>
      <Spacer />
      <HStack spacing={[2, 8]}>
        <Link
          borderRadius="full"
          pl={2}
          py={2}
          onClick={toggleColorMode}>
          {colorMode == 'dark' ? <FiMoon /> : <FiSun />}
        </Link>
      </HStack>
    </Flex>
  );
};
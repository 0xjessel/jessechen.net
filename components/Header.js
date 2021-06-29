import NLink from 'next/link'
import { Center, Flex, HStack, IconButton, Link, Spacer, useColorMode } from "@chakra-ui/react"
import { FiSun, FiMoon } from 'react-icons/fi'
import { useBackgroundColor, useBorderColor } from '../styles/colorModes'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const linkBackgroundColor = useBackgroundColor()

  const links = [
    ['Posts', '/posts'],
    ['Projects', '/projects'],
    ['About', '/about'],
  ]

  return (
    <Flex as="nav" mb={[4, 8]}>
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
          <NLink 
            key={link[1]}
            href={link[1]}>
            <Link 
              fontSize={['sm', 'md']}
              borderRadius="base"
              p={2}
              _hover={{ 
                backgroundColor: linkBackgroundColor,
                textDecoration: 'none',
              }}>
              {link[0]}
            </Link>
          </NLink>
        )}
      </HStack>
      <Spacer />
      <HStack spacing={[2, 8]}>
        <IconButton
          borderRadius="full"
          size="md"
          variant="ghost"
          colorScheme="brand"
          icon={colorMode == 'dark' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
};
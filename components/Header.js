import NLink from 'next/link'
import { Box, Center, Flex, HStack, IconButton, Link, Spacer, useColorMode } from "@chakra-ui/react"
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
          <Box
            mr={1}
            border="1px"
            borderColor={useBorderColor()}>
            <Center
              fontSize={['sm', 'md']}
              whiteSpace="nowrap"
              _hover={{ textDecoration: 'underline' }} // Underline text on hover
              py={1}
              px={2}>
              𝚓𝚎𝚜𝚜𝚎𝚕 ⟠
            </Center>
          </Box>
        </NLink>
        {links.map(link => 
          <NLink 
            key={link[1]}
            href={link[1]}>
            <Box
              fontSize={['sm', 'md']}
              borderRadius="base"
              p={2}
              _hover={{ 
                backgroundColor: linkBackgroundColor,
                textDecoration: 'none',
              }}>
              {link[0]}
            </Box>
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
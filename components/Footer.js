import { Center, HStack, Link, Text, VStack } from "@chakra-ui/react"
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from "react-icons/fi"

export default function Footer() {
  return (
    <VStack py="12" spacing="2">
      <HStack spacing="1">
        <Link 
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://www.linkedin.com/in/0xjessel" isExternal>
          <FiLinkedin />
        </Link>
        <Link 
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://github.com/0xjessel" isExternal>
          <FiGithub />
        </Link>
        <Link 
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://twitter.com/0xjessel" isExternal>
          <FiTwitter />
        </Link>
        <Link 
          padding="2"
          _hover={{ opacity: .7 }}
          href="mailto:contact@jessechen.net" isExternal>
          <FiMail />
        </Link>
      </HStack>
      <Center>
        <Text fontSize="xs" color="gray.400">
          © 2021, Jesse Chen • 02ecf248
        </Text>
      </Center>
    </VStack>    
  )
}
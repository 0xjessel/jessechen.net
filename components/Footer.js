import { Center, HStack, Link, Text, VStack } from "@chakra-ui/react"
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from "react-icons/fi"

export default function Footer() {
  return (
    <VStack py="12" spacing="4">
      <HStack spacing="4">
        <Link href="https://www.linkedin.com/in/0xjessel" isExternal>
          <FiLinkedin />
        </Link>
        <Link href="https://github.com/0xjessel" isExternal>
          <FiGithub />
        </Link>
        <Link href="https://twitter.com/0xjessel" isExternal>
          <FiTwitter />
        </Link>
        <Link href="mailto:contact@jessechen.net" isExternal>
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
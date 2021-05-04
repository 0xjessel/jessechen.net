import { Center, HStack, Text, VStack } from "@chakra-ui/react"
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from "react-icons/fi"

export default function Footer() {
  return (
    <VStack py="12" spacing="4">
      <HStack spacing="4">
        <FiLinkedin />
        <FiGithub />
        <FiTwitter />
        <FiMail />
      </HStack>
      <Center>
        <Text fontSize="xs" color="gray.400">
          © 2021, Jesse Chen • 02ecf248
        </Text>
      </Center>
    </VStack>    
  )
}
import { Center, HStack, Link, Text, VStack } from "@chakra-ui/react"
import { RiLinkedinLine, RiGithubLine, RiTwitterLine, RiMailLine } from "react-icons/ri"

export default function Footer() {
  const commitSHA = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  const commitURL = 
    <Link
      href={`https://github.com/0xjessel/jessechen.net/commit/${commitSHA}`}
      isExternal>
      <pre>
        {commitSHA.slice(0, 7)}
        {' - '}
        {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
      </pre>
    </Link>

  return (
    <VStack py="12" spacing="2">
      <HStack spacing="1">
        <Link 
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://www.linkedin.com/in/0xjessel" isExternal>
          <RiLinkedinLine size="1.1em" />
        </Link>
        <Link 
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://github.com/0xjessel" isExternal>
          <RiGithubLine size="1.1em" />
        </Link>
        <Link 
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://twitter.com/0xjessel" isExternal>
          <RiTwitterLine size="1.1em" />
        </Link>
        <Link 
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="mailto:contact@jessechen.net" isExternal>
          <RiMailLine size="1.1em" />
        </Link>
      </HStack>
      <Center>
        <Text 
          fontSize="xs" 
          color="gray.400"
          sx={{ 
            '& pre': { display: "inline" },
          }}>
          © 2021, Jesse Chen • {commitURL}
        </Text>
      </Center>
    </VStack>    
  )
}
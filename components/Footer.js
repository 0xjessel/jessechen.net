import { Center, HStack, Link, Text, VStack } from "@chakra-ui/react"
import { RiLinkedinLine, RiGithubLine, RiTwitterLine, RiMailLine } from "react-icons/ri"

export default function Footer() {
  const commitSHA = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  let commitMessage = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE
  const messageMatch = commitMessage.match(/^.{0,18}/g) // first 18 chars that is not a linebreak
  commitMessage = messageMatch.length > 0
    ? messageMatch[0] + '..'
    : ''

  const commitURL = 
    <Link
      href={`https://github.com/0xjessel/jessechen.net/commit/${commitSHA}`}
      isExternal>
      <Text as="span" display="inline" fontFamily="mono">
        {`${commitSHA.slice(0, 7)} ${commitMessage}`}
      </Text>
    </Link>

  return (
    <VStack py="12" spacing="2">
      <HStack spacing="1">
        <Link 
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://www.linkedin.com/in/0xjessel" 
          title="LinkedIn"
          isExternal>
          <RiLinkedinLine size="1.1em" />
        </Link>
        <Link 
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://github.com/0xjessel" 
          title="Github"
          isExternal>
          <RiGithubLine size="1.1em" />
        </Link>
        <Link 
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://twitter.com/0xjessel" 
          title="Twitter"
          isExternal>
          <RiTwitterLine size="1.1em" />
        </Link>
        <Link 
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="mailto:contact+website@jessechen.net" 
          title="Email"
          isExternal>
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
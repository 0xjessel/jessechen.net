import { Center, HStack, Link, Text, Tooltip, VStack } from "@chakra-ui/react"
import { RiLinkedinLine, RiGithubLine, RiInstagramLine, RiMailLine, RiThreadsLine } from "react-icons/ri"
import { useBackgroundColor } from "../styles/colorModes"

export default function Footer() {
  const commitSHA = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  let commitMessage = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE
  const messageMatch = commitMessage.match(/^.*/g) // grabs commit title only
  commitMessage = messageMatch.length > 0 ? messageMatch[0] : ''

  const commitURL = 
    <Link
      data-umami-event="click--github_commit"
      href={`https://github.com/0xjessel/jessechen.net/commit/${commitSHA}`}
      isExternal>
      <Tooltip 
        hasArrow 
        label={commitMessage} 
        gutter={12} 
        fontSize="xs"
        color="whiteAlpha"
        bg={useBackgroundColor()}
        fontFamily="mono">
        <Text as="span" display="inline" fontFamily="mono">
          {commitSHA.slice(0, 7)}
        </Text>
      </Tooltip>
    </Link>

  return (
    <VStack pt="12" spacing="2">
      <HStack spacing="1">
        <Link 
          data-umami-event="click--linkedin"
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://www.linkedin.com/in/0xjessel" 
          title="LinkedIn"
          isExternal>
          <RiLinkedinLine size="1.1em" />
        </Link>
        <Link 
          data-umami-event="click--github"
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://github.com/0xjessel" 
          title="Github"
          isExternal>
          <RiGithubLine size="1.1em" />
        </Link>
        <Link 
          data-umami-event="click--threads"
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://www.threads.com/@0xjessel" 
          title="Threads"
          isExternal>
          <RiThreadsLine size="1.1em" />
        </Link>
        <Link 
          data-umami-event="click--instagram"
          borderRadius="full"
          padding="2"
          _hover={{ opacity: .7 }}
          href="https://instagram.com/0xjessel" 
          title="Instagram"
          isExternal>
          <RiInstagramLine size="1.1em" />
        </Link>
        <Link 
          data-umami-event="click--email"
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
          © 2024, Jesse Chen • {commitURL}
        </Text>
      </Center>
    </VStack>    
  )
}
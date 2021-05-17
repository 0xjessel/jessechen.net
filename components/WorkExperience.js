import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function WorkExperience({ imgSource, company, role, description, dateRange }) {
  return (
    <Flex position="relative">
      <Box mt="1" mr="3">
        <Image maxWidth="32px" src={imgSource} />
      </Box>
      <Box flex="1">
        <Text fontSize="xl" fontWeight="bold" maxWidth={["214px", "none"]}>{company}</Text>
        <Text fontSize="lg" mb="2">{role}</Text>
        <Text fontSize="md" whiteSpace="pre-line" lineHeight="base">
          {description}
        </Text>
      </Box>
      <Box position="absolute" right="0">
        <Text color="gray.500" fontSize="md">{dateRange}</Text>
      </Box>
    </Flex>
  );
}
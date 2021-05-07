import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function WorkExperience(props) {
  const {
    imgSource,
    company,
    role,
    description,
    dateRange,
  } = props;

  return (
    <Flex>
      <Box mt="1" mr="3">
        <Image maxWidth="32px" src={imgSource} />
      </Box>
      <Box flex="1">
        <Text fontSize="lg" fontWeight="bold">{company}</Text>
        <Text fontSize="md" mb="2">{role}</Text>
        <Text fontSize="sm" whiteSpace="pre-line">
          {description}
        </Text>
      </Box>
      <Box ml="auto" mt="1">
        <Text fontSize="sm">{dateRange}</Text>
      </Box>
    </Flex>
  );
}
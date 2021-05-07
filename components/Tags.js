import { HStack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

export default function Tags({ tags }) {
  if (!tags || tags.length == 0) {
    return null;
  }
  
  return (
    <HStack>
      {tags.map(tag => (
        <Tag size="sm" key="tag">
          {tag}
        </Tag>
      ))}
    </HStack>
  )
}
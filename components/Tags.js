import { HStack, Tag } from "@chakra-ui/react";

export default function Tags({ tags }) {
  if (!tags || tags.length == 0) {
    return null;
  }
  
  return (
    <HStack css={{ display: 'inline-flex' }}>
      {tags.map(tag => (
        <Tag size="sm" key={tag}>
          {tag}
        </Tag>
      ))}
    </HStack>
  )
}
import { useColorModeValue } from '@chakra-ui/color-mode'

export function useLinkColor() {
  return useColorModeValue('yellow.500', 'yellow.400')
}
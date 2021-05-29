import { useColorModeValue } from '@chakra-ui/color-mode'

export const LINK_LIGHT = 'yellow.500'
export const LINK_DARK = 'yellow.400'

export const BORDER_LIGHT = 'gray.800'
export const BORDER_DARK = 'gray.50'

export function useLinkColor() {
  return useColorModeValue(LINK_LIGHT, LINK_DARK)
}

export function useBorderColor() {
  return useColorModeValue(BORDER_LIGHT, BORDER_DARK)
}
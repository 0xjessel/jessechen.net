import { useColorModeValue } from '@chakra-ui/color-mode'

export const SELECTION_LIGHT = 'gray.300'
export const SELECTION_DARK = 'gray.600'

export const LINK_LIGHT = 'yellow.500'
export const LINK_DARK = 'yellow.400'

export const BORDER_LIGHT = 'gray.800'
export const BORDER_DARK = 'gray.50'

export const BACKGROUND_LIGHT = 'gray.100'
export const BACKGROUND_DARK = 'gray.700'

export function useLinkColor() {
  return useColorModeValue(LINK_LIGHT, LINK_DARK)
}

export function useBorderColor() {
  return useColorModeValue(BORDER_LIGHT, BORDER_DARK)
}

export function useBackgroundColor() {
  return useColorModeValue(BACKGROUND_LIGHT, BACKGROUND_DARK)
}
import { useColorModeValue } from '@chakra-ui/react'

export const SELECTION_LIGHT = 'gray.300'
export const SELECTION_DARK = 'gray.600'

export const ACCENT_LIGHT = 'brand.400'
export const ACCENT_DARK = 'brand.200'

export const LINK_LIGHT = 'brand.500'
export const LINK_DARK = 'brand.200'

export const BORDER_LIGHT = 'gray.800'
export const BORDER_DARK = 'gray.50'

export const BACKGROUND_LIGHT = 'gray.100'
export const BACKGROUND_DARK = 'gray.700'

export function useLinkColor() {
  return useColorModeValue(LINK_LIGHT, LINK_DARK)
}

export function useAccentColor() {
  return useColorModeValue(ACCENT_LIGHT, ACCENT_DARK)
}

export function useBorderColor() {
  return useColorModeValue(BORDER_LIGHT, BORDER_DARK)
}

export function useBackgroundColor() {
  return useColorModeValue(BACKGROUND_LIGHT, BACKGROUND_DARK)
}
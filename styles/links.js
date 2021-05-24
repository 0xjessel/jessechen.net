import { useColorModeValue } from '@chakra-ui/color-mode'

export const LINK_LIGHT = 'yellow.500';

export const LINK_DARK = 'yellow.400';

export function useLinkColor() {
  return useColorModeValue(LINK_LIGHT, LINK_DARK)
}
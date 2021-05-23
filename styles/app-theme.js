import { extendTheme } from "@chakra-ui/react";

export const AppTheme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    //heading: "Hoefler Text",
    //heading: "Merriweather",
    //heading: "Neue Haas Unica Pro",
    mono: "Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace",
  },
  styles: {
    global: {
      'html': {
        minWidth: '320px',
      },
      'body': {
        fontSize: 'var(--chakra-fontSizes-md)',
        lineHeight: 'var(--chakra-lineHeights-7)',
      },
      '::selection': {
        background: 'yellow.400',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '40rem',
        px: 0,
      },
    },
  },
})
import { extendTheme } from "@chakra-ui/react";

export const AppTheme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    heading: "Merriweather",
    body: "Merriweather",
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
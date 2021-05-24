import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

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
    global: (props) => ({
      'html': {
        minWidth: '320px',
      },
      'body': {
        fontSize: 'var(--chakra-fontSizes-md)',
        lineHeight: 'var(--chakra-lineHeights-7)',
      },
      '::selection': {
        background: mode('yellow.400', 'yellow.500')(props),
      },
    }),
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
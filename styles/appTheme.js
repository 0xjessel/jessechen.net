import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { SELECTION_DARK, SELECTION_LIGHT } from "./colorModes"

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
        background: mode(SELECTION_LIGHT, SELECTION_DARK)(props),
      },
      'pre::-webkit-scrollbar': {
        display: 'none',
      },
      'pre': {
        'msOverflowStyle': 'none',
        'scrollbarWidth': 'none',
        'overflowX': 'scroll',
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
  colors: {
    brand: {
      50: '#fff3df',
      100: '#f6e1b8',
      200: '#efd08f',
      300: '#e8c163', // base 
      400: '#e1a539',
      500: '#c88020',
      600: '#9c5a17',
      700: '#6f3a0e',
      800: '#441d05',
      900: '#190700',
    },
  },
})
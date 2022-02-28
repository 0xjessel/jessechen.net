import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { SELECTION_DARK, SELECTION_LIGHT } from "./colorModes"

export const AppTheme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    heading: 'Noto Serif',
    body: 'Mukta',
    mono: 'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',

    // other considerations:
    // heading: 'Merriweather',
    // body: 'Hind Guntur',

    // heading: 'Montserrat',
    // body: 'Kanit',

    // heading: "Hoefler Text",
    // heading: "Neue Haas Unica Pro",
  },
  fontSizes: {
    // to adjust for Mukta, a relative smaller font
    xs: '0.83rem',
    sm: '0.95rem',
    md: '1.08rem',
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
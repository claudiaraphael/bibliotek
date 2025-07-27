import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// Dark mode configuration
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

// Custom theme with rounded edges
const theme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
  colors: {
    brand: {
      50: '#e6f7ff',
      100: '#b3e0ff',
      200: '#80caff',
      300: '#4db3ff',
      400: '#1a9dff',
      500: '#0080ff', // Primary brand color
      600: '#0066cc',
      700: '#004d99',
      800: '#003366',
      900: '#001a33',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'var(--border-radius)',
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'var(--border-radius)',
          overflow: 'hidden',
        },
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          borderRadius: 'var(--border-radius)',
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'var(--border-radius)',
        },
      },
    },
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: 'var(--border-radius)',
    xl: 'calc(var(--border-radius) * 1.5)',
  },
})

export default theme
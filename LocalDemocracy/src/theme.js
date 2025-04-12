import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e8f5fe',
      100: '#c9e2f8',
      200: '#a5ccf1',
      300: '#7fb6ea',
      400: '#5aa0e3',
      500: '#3b8adc',
      600: '#2e6daf',
      700: '#21517f',
      800: '#153552',
      900: '#081a27',
    },
    accent: {
      500: '#f59e0b',
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        primary: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        secondary: {
          bg: 'accent.500',
          color: 'white',
          _hover: {
            bg: 'yellow.600',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          boxShadow: 'sm',
          borderRadius: 'lg',
        },
      },
    },
  },
});

export default theme;

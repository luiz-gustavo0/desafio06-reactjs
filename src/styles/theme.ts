import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  gray: {
    '800': '#47585B',
    '150': '#999999',
    '100': '#DADADA',
    '50': '#F5F8FA',
  },

  yellow: {
    '100': '#FFBA08',
  },
  fonts: {
    heading: 'Popins',
    body: 'Popins',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },

  components: {
    Divider: {
      baseStyle: {
        bg: 'gray.800',
      },
    },
  },
});

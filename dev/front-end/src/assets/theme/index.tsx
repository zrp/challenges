"use client"
import {
  ChakraProvider,
  ChakraProviderProps,
  createStandaloneToast,
  extendTheme,
  ThemeConfig,
} from '@chakra-ui/react';
import { Global } from '@emotion/react';

import { components } from './components';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  cssVarPrefix: 'mais1',
  disableTransitionOnChange: true,
};

const colors = {
  primary: {
    50: '#FFF6E5',
    100: '#FFEDCC',
    200: '#FFDB99',
    300: '#FFC966',
    400: '#FFB833',
    500: '#ffa400',
    600: '#CC8500',
    700: '#996300',
    800: '#664200',
    900: '#332100',
  },
  mais1: '#ffa400',
  black: '#121317 !important',
  dark: '#1a1c23',
  light: '#f4f4f4',
  ifood: {
    main: '#ea1d2c',
    hover: '#bf0013',
  },
  stone: {
    main: '#01C205',
    hover: '#00a002',
  },
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
};

const Fonts = () => (
  <Global
    styles={`@font-face {
      font-family: 'LEMON MILK';
      src: url('LEMONMILK-Bold.woff2') format('woff2'),
          url('LEMONMILK-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'LEMON MILK';
      src: url('LEMONMILK-Regular.woff2') format('woff2'),
          url('LEMONMILK-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'LEMON MILK';
      src: url('LEMONMILK-BoldItalic.woff2') format('woff2'),
          url('LEMONMILK-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'LEMON MILK';
      src: url('LEMONMILK-Light.woff2') format('woff2'),
          url('LEMONMILK-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'LEMON MILK';
      src: url('LEMONMILK-Medium.woff2') format('woff2'),
          url('LEMONMILK-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'LEMON MILK';
      src: url('LEMONMILK-RegularItalic.woff2') format('woff2'),
          url('LEMONMILK-RegularItalic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'LEMON MILK';
      src: url('LEMONMILK-LightItalic.woff2') format('woff2'),
          url('LEMONMILK-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
      font-display: swap;
  }

  @font-face {
      font-family: 'LEMON MILK';
      src: url('LEMONMILK-MediumItalic.woff2') format('woff2'),
          url('LEMONMILK-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
      font-display: swap;
  }


      `}
  />
);

export const theme = extendTheme({
  breakpoints,
  colors,
  components,
  config,
  styles: {
    global: {
      body: {
        bg: 'white',
        _dark: {
          bg: 'dark',
        },
      },
    },
  },
});

const configProvider: ChakraProviderProps = {
  theme,
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { ToastContainer } = createStandaloneToast();
  return (
    <ChakraProvider {...configProvider}>
      <ToastContainer />
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

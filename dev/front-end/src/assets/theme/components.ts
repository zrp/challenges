export const components = {
  Button: {
    baseStyle: {
      fontWeight: 'normal',
    },
    defaultProps: {
      size: 'sm',
    },
  },
  Tooltip: {
    baseStyle: {
      rounded: 'md',
    },
  },
  Checkbox: {
    baseStyle: {
      control: {
        rounded: 'md',
      },
    },
  },
  Table: {
    variants: {
      striped: {
        tr: {
          th: {
            _dark: {
              bg: 'dark !important',
            },
            bg: 'white !important',
          },
          _odd: {
            td: {
              _dark: {
                bg: 'whiteAlpha.50 !important',
              },
              bg: 'gray.50 !important',
            },
          },
        },
      },
    },
  },
  Card: {
    baseStyle: {
      container: {
        _dark: {
          bg: 'dark',
        },
        bg: 'white',
      },
      body: {
        pt: 0,
      },
    },
  },
};

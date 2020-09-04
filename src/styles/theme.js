
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#677281',
      main: '#424f62',
      dark: '#353d48',
      contrastText: '#fff'
    },
    // ray test touch <
    secondary: {
      light: '#f4fafb',
      main: '#f2f9fb',
      dark: '#e1f4f9',
      contrastText: '#424f62'
    },
    error: {
      light: '#f5927b',
      main: '#f3775b',
      dark: '#aa533f',
      contrastText: '#fff'
    },
    warning: {
      light: '#fbe097',
      main: '#fad97d',
      dark: '#af9757',
      contrastText: '#fff'
    },
    info: {
      light: '#6ab6af',
      main: '#45a49c',
      dark: '#30726d',
      contrastText: '#fff'
    },
    // ray test touch >
    text: {
      primary: '#2f2f2f',
      secondary: '#fff'
    },
    background: {
      default: '#f5f6f8'
    }
  },
  overrides: {
    // TODO: fonts should be specific to whether the font-weight is Light, Regular, Medium or Bold.
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'Gustanlp',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            fontWeight: 400,
            src: `
              local('Gustanlp'),
              local('Gustanlp-Regular'),
              url(/assets/fonts/Gustanlp-Medium.woff2) format('woff2')
            `
          }
        ]
      }
    },
    MuiButton: {
      /**
       * TODO: dimensions for small and large size buttons are not defined
       * Re:
       * https://material-ui.com/customization/globals/
       * https://material-ui.com/api/button/
       */
      root: {
        minWidth: 96,
        minHeight: 40
      }
    }
  },
  typography: {
    // TODO: should consider responsive behavior of typography based on the viewport size
    fontFamily: 'Gustanlp, Arial',
    htmlFontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 500,
      fontSize: '4.4rem',
      lineHeight: 1.11,
      letterSpacing: 'normal'
    },
    h2: {
      fontWeight: 500,
      fontSize: '3.2rem',
      lineHeight: 1.09,
      letterSpacing: 'normal'
    },
    h3: {
      fontWeight: 500,
      fontSize: '2.8rem',
      lineHeight: 1.11,
      letterSpacing: 'normal'
    },
    h4: {
      fontWeight: 500,
      fontSize: '2.4rem',
      lineHeight: 1.13,
      letterSpacing: 'normal'
    },
    h5: {
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: 1.1,
      letterSpacing: 'normal'
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.6rem',
      lineHeight: 1.06,
      letterSpacing: 'normal'
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1.6rem',
      lineHeight: 1.06,
      letterSpacing: 'normal'
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '1.6rem',
      lineHeight: 1.06,
      letterSpacing: 'normal'
    },
    subtitle3: {
      fontWeight: 700,
      fontSize: '1.4rem',
      lineHeight: 1.14,
      letterSpacing: 'normal'
    },
    subtitle4: {
      fontWeight: 500,
      fontSize: '1.4rem',
      lineHeight: 1.14,
      letterSpacing: 'normal'
    },
    subtitle5: {
      fontWeight: 500,
      fontSize: '1.2rem',
      lineHeight: 1.08,
      letterSpacing: 'normal'
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.4rem',
      lineHeight: 1.14,
      letterSpacing: 'normal'
    },
    body2: {
      fontWeight: 400,
      fontSize: '1.2rem',
      lineHeight: 1.08,
      letterSpacing: 'normal'
    },
    button: {
      fontWeight: 500,
      fontSize: '1.4rem',
      lineHeight: 1.14,
      letterSpacing: 'normal'
    },
    caption: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.1,
      letterSpacing: 'normal'
    }
  },
  custom: {
    palette: {},
    layout: {}
  }
});

export default theme;


import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#677281',
      main: '#424f62',
      dark: '#353d48',
      contrastText: '#fff'
    },
    secondary: {
      light: '#7088b7',
      main: '#4d6ba5',
      dark: '#354a73',
      contrastText: '#fff'
    },
    error: {
      light: '#ff3333',
      main: '#ff0000',
      dark: '#b20000',
      contrastText: '#fff'
    },
    text: {
      primary: '#2f2f2f',
      secondary: '#fff'
    },
    background: {
      default: '#f5f6f8'
    }
  },
  overrides: {
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
       * TODO: dimensions for small and large size buttons are not defined.
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
      fontSize: '1.4rem',
      lineHeight: 1.14,
      letterSpacing: 'normal'
    },
    subtitle2: {
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
    palette: {
      iceBlueMain: '#f2f9fb',
      iceBlueDark: '#e1f4f9'
    },
    layout: {
      openedDrawerWidth: 272,
      closedDrawerWidth: 64,
      upperSubToolbarHeight: 80,
      lowerSubToolbarHeight: 64,
      networkPopperWidth: 280
    }
  }
});

export default theme;

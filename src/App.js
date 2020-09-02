
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import Layout from 'utils/hocs/Layout';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
};

export default App;


// ray test touch <
import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';

addDecorator(story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));
// ray test touch >

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"}
};

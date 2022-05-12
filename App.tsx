import React from 'react';
import Home from './src/screens/home/Home';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { colors } from './src/utils/theme';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <Home />
  </PaperProvider>
);

export default App;

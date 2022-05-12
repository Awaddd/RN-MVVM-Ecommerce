import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { colors } from './src/utils/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home/Home';
import Sneaker from './src/screens/sneaker/Sneaker';

export type RootStackParamList = {
  Home: undefined;
  Sneaker: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sneaker"
          component={Sneaker}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;

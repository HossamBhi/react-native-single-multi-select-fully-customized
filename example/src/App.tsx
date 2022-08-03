import React from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, Provider } from 'react-native-paper';
import Examples from './Examples';

export default function App() {
  const schema = useColorScheme();

  return (
    <Provider theme={schema === 'dark' ? DarkTheme : DefaultTheme}>
      <Examples />
    </Provider>
  );
}

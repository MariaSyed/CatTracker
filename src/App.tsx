import React, { ReactNode } from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App: () => ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

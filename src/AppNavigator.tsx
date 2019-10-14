import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import CatProfile from './screens/CatProfile';
import FeedingHistory from './screens/FeedingHistory';
import { View, Text } from 'react-native';
import AddFeeding from './screens/AddFeeding';
import AddReceipt from './screens/AddReceipt';

const MainNavigator = createStackNavigator({
  Home,
  CatProfile,
  FeedingHistory
});

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainNavigator,
      navigationOptions: {
        header: null
      }
    },
    AddFeeding,
    AddReceipt
  },
  { mode: 'modal' }
);

export default AppNavigator;

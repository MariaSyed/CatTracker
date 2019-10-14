import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import CatProfile from './screens/CatProfile';
import FeedingHistory from './screens/FeedingHistory';
import { View } from 'react-native';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  CatProfile: {
    screen: CatProfile
  },
  FeedingHistory: {
    screen: FeedingHistory
  },
  AddFeeding: {
    screen: () => <View />
  },
  AddReceipt: {
    screen: () => <View />
  }
});

export default AppNavigator;

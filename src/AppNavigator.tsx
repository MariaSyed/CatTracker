import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import CatProfile from './screens/CatProfile';
import FeedingHistory from './screens/FeedingHistory';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  CatProfile: {
    screen: CatProfile
  },
  FeedingHistory: {
    screen: FeedingHistory
  }
});

export default AppNavigator;

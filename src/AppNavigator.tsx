import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import CatProfile from './screens/CatProfile';
import FeedingHistory from './screens/FeedingHistory';
import { View, Text } from 'react-native';

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
    AddFeeding: () => (
      <View>
        <Text>Add feeding</Text>
      </View>
    ),
    AddReceipt: () => (
      <View>
        <Text>Add receipt</Text>
      </View>
    )
  },
  { mode: 'modal' }
);

export default AppNavigator;

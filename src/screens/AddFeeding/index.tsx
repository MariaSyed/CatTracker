import * as React from 'react';
import { View } from 'react-native';

export interface AddFeedingProps {}

const AddFeeding: React.SFC<AddFeedingProps> = () => {
  return <View></View>;
};

// @ts-ignore
AddFeeding.navigationOptions = {
  title: 'Feed Cat'
};

export default AddFeeding;

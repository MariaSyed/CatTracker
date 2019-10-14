import * as React from 'react';
import { View } from 'react-native';

export interface AddFeedingProps {}

const AddReceipt: React.SFC<AddFeedingProps> = () => {
  return <View></View>;
};

// @ts-ignore
AddReceipt.navigationOptions = {
  title: 'Add Receipt'
};

export default AddReceipt;

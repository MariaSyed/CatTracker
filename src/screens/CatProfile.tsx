import * as React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';

export interface CatProfileProps {}

const CatProfile: React.SFC<CatProfileProps> = () => {
  return (
    <View>
      <Text>Cat Profile</Text>
    </View>
  );
};

export default CatProfile;

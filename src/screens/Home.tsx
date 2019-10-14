import React from 'react';
import { Text, View } from 'react-native';

import { Header } from 'react-native/Libraries/NewAppScreen';
import ImageHeader from '../components/ImageHeader';
import Images from '../assets/images';

const Home = () => {
  return (
    <View>
      <ImageHeader source={Images.HomeHeader} />
      <Text>Hey this is a home view!</Text>
    </View>
  );
};

Home.navigationOptions = {
  title: 'Cat Tracker'
};

export default Home;

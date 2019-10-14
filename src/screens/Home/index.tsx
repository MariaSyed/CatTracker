import React from 'react';
import { View } from 'react-native';
import ImageHeader from '../../components/ImageHeader';
import Images from '../../assets/images';
import CatList from './CatList';

const Home = () => {
  return (
    <View>
      <ImageHeader source={Images.HomeHeader} />
      <CatList />
    </View>
  );
};

Home.navigationOptions = {
  title: 'Cat Tracker'
};

export default Home;

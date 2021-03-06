import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import ImageHeader from '../../components/ImageHeader';
import Images from '../../assets/images';
import CatList from './CatList';
import FAB from '../../components/FAB';
import moment from 'moment';

type HomeProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Home: React.SFC<HomeProps> = props => {
  return (
    <View style={styles.container}>
      <ImageHeader source={Images.HomeHeader} />
      <CatList
        openCatProfile={cat => props.navigation.navigate('CatProfile', { cat })}
      />
      <View style={styles.fabContainer}>
        <FAB
          color="orange"
          type={'receipt'}
          onPress={() => props.navigation.navigate('AddReceipt')}
        />
        <FAB
          color="blue"
          type={'feed'}
          onPress={() => props.navigation.navigate('AddFeeding')}
        />
        <FAB
          color="red"
          type={'exit-enter'}
          onPress={() => {
            Alert.prompt(
              'Leave house',
              'You are about to set yourself as left. Set custom time',
              text => console.log(text),
              undefined,
              moment().calendar()
            );
          }}
        />
      </View>
    </View>
  );
};

// @ts-ignore
Home.navigationOptions = {
  title: 'Cat Tracker'
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
});

export default Home;

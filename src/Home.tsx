import React from 'react';
import { Text, View } from 'react-native';

import { Header } from 'react-native/Libraries/NewAppScreen';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Hey this is a home view!</Text>
      </View>
    );
  }
}
export default Home;

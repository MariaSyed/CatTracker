import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from 'react-navigation';
import ImageHeader from '../../components/ImageHeader';
import { Cat } from '../../types/types';
import { FlatList } from 'react-native-gesture-handler';

type CatProfileProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const CatProfile: React.SFC<CatProfileProps> = props => {
  const cat: Cat = props.navigation.getParam('cat');
  const catData = Object.keys(cat).map(key => ({
    title: key,
    // @ts-ignore
    value: cat[key]
  }));

  return (
    <FlatList
      data={catData}
      renderItem={renderItem}
      ListHeaderComponent={<ImageHeader source={cat.photo} />}
      keyExtractor={(_, i) => `${i}`}
    />
  );
};

const renderItem = ({ item }: { item: { title: string; value: string } }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.value}>{item.value}</Text>
  </View>
);

// @ts-ignore
CatProfile.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('cat').name
});

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1
  },
  value: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right'
  }
});

export default CatProfile;

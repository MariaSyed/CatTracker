import * as React from 'react';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import moment from 'moment';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Images from '../../assets/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Cat } from '../../types/types';

const mockCats: Cat[] = [
  {
    key: '1',
    name: 'Masha',
    lastFedBrand: 'Latz Sensations',
    lastFedFlavour: 'Beef',
    lastFed: moment()
      .subtract(1, 'hour')
      .format(),
    leftAlone: moment()
      .subtract(2, 'hours')
      .format(),
    foodPacketsLeft: 10,
    photo: Images.Masha
  },
  {
    key: '2',
    name: 'Kimchi',
    lastFedBrand: 'Premium BritCare',
    lastFedFlavour: 'Chicken',
    lastFed: moment().format(),
    leftAlone: moment()
      .subtract(2, 'hours')
      .format(),
    foodPacketsLeft: 29,
    photo: Images.Kimchi
  }
];

const renderItem = (item: Cat, openCatProfile: (cat: Cat) => void) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => openCatProfile(item)}>
    <Image source={item.photo} style={styles.photo} />
    <View style={styles.content}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.text}>
        {item.lastFedBrand} ({item.lastFedFlavour}){'\n'}
        {moment(item.lastFed).fromNow()}
      </Text>
      <Text style={styles.text}>
        Left alone {moment(item.leftAlone).fromNow()}
      </Text>
      <Text style={styles.text}>
        {item.foodPacketsLeft} packets of food left
      </Text>
    </View>
    <Icons name="chevron-right" style={styles.rightIcon} />
  </TouchableOpacity>
);

export interface CatListProps {
  openCatProfile: (cat: Cat) => void;
}

const CatList: React.SFC<CatListProps> = props => {
  return (
    <FlatList
      data={mockCats}
      renderItem={({ item }) => renderItem(item, props.openCatProfile)}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 20,
    paddingRight: 20,
    marginLeft: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  photo: {
    marginRight: 10,
    resizeMode: 'contain',
    flex: 3,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc'
  },
  content: {
    flex: 7
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5
  },
  text: {
    flexShrink: 1,
    marginBottom: 5
  },
  rightIcon: {
    fontSize: 30,
    textAlign: 'right',
    color: '#ccc',
    flex: 1
  }
});

export default CatList;

import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type FABType = 'edit' | 'exit-enter' | 'feed' | 'receipt';

const FABIconMap: { [k in FABType]: string } = {
  edit: 'pencil',
  'exit-enter': 'home',
  feed: 'add',
  receipt: 'receipt'
};
export interface FABProps {
  type: FABType;
  color: string;
  onPress: () => void;
}

const FAB: React.SFC<FABProps> = ({ type, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}>
      <Icon name={FABIconMap[type]} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ccc',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      width: 4,
      height: 4
    }
  },
  icon: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default FAB;

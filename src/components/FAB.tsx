import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export interface FABProps {
  icon: 'edit' | 'exit' | 'enter' | 'feed' | 'receipt';
  color: string;
  onPress: () => void;
}

const FAB: React.SFC<FABProps> = ({ icon, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}>
      <Icon name="unlock" style={styles.icon} />
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
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default FAB;

import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

interface IItem {
  name: string;
}

const Item = ({ name }: IItem) => {
  return (
    <View style={[styles.container, styles.containerSelected]}>
      <Text style={[styles.text, styles.textSelected]}>{name}</Text>
    </View>
  );
};

export default Item;

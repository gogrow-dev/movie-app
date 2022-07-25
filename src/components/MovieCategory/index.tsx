import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

interface IMovieCategory {
  name: string;
}

const MovieCategory = ({ name }: IMovieCategory) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default MovieCategory;

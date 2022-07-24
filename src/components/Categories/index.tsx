import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import Item from './Item';

const data = ['Top Rated', 'Popular', 'Action'];

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList<string>
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        horizontal
        data={data}
        keyExtractor={(_, index) => `category-${index}`}
        renderItem={({ item }) => <Item name={item} />}
      />
    </View>
  );
};

export default Categories;

import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { Category, getCategories } from '../../store/actions/moviesActions';
import { useDispatch, useSelector } from '../../store';
import styles from './styles';
import Item from './Item';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.movies.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList<Category>
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        horizontal
        data={categories}
        keyExtractor={item => `category-${item.id}`}
        renderItem={({ item }) => <Item id={item.id} name={item.name} />}
      />
    </View>
  );
};

export default Categories;

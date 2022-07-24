import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { useDispatch, useSelector } from '../../../store';
import { selectCategory } from '../../../store/actions/moviesActions';

interface IItem {
  id: number;
  name: string;
}

const Item = ({ id, name }: IItem) => {
  const categorySelected = useSelector(state => state.movies.categorySelected);
  const dispatch = useDispatch();

  const isSelected = id === categorySelected;
  return (
    <TouchableOpacity
      onPress={() => dispatch(selectCategory(id))}
      activeOpacity={0.7}>
      <View style={[styles.container, isSelected && styles.containerSelected]}>
        <Text style={[styles.text, isSelected && styles.textSelected]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

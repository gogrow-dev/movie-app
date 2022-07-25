import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import arrowIcon from '../../assets/icons/arrow-back.png';
import { useDispatch, useSelector } from '../../store';
import { getWatchList, type Movie } from '../../store/actions/moviesActions';
import MovieCard from '../../components/MovieCard';
import FloatingActionButton from '../../components/FloatingActionButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation';
import styles from './styles';

const WatchList = () => {
  const { goBack } = useNavigation<NavigationProps>();
  const watchList = useSelector(state => state.movies.watchList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchList());
  }, [dispatch]);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Movies App</Text>
        <Text style={styles.subtitle}>Your Watch List</Text>
      </View>
      <FlatList<Movie>
        style={styles.list}
        keyExtractor={item => `watch-${item.id}`}
        contentContainerStyle={styles.contentList}
        data={watchList}
        renderItem={({ item }) => <MovieCard hideBookmark item={item} />}
      />
      <FloatingActionButton
        leftIcon={arrowIcon}
        position="right"
        text="Back"
        onPress={goBack}
      />
    </SafeAreaView>
  );
};

export default WatchList;

import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useRef } from 'react';
import styles from './styles';
import bookmarkIcon from '../../assets/icons/bookmark-black.png';
import Categories from '../../components/Categories';
import { useDispatch, useSelector } from '../../store';
import {
  getMovies,
  getWatchList,
  type Movie,
} from '../../store/actions/moviesActions';
import MovieCard from '../../components/MovieCard';
import FloatingActionButton from '../../components/FloatingActionButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation';

const Home = () => {
  const flatListRef = useRef<FlatList>(null);
  const dispatch = useDispatch();
  const categorySelected = useSelector(state => state.movies.categorySelected);
  const movies = useSelector(state => state.movies.movies);
  const { navigate } = useNavigation<NavigationProps>();

  useEffect(() => {
    dispatch(getMovies(categorySelected)).then(() => {
      dispatch(getWatchList());
      flatListRef.current?.scrollToIndex({ index: 0, animated: true });
    });
  }, [dispatch, categorySelected]);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Movies App</Text>
        <Text style={styles.subtitle}>Find your movies</Text>
      </View>
      <Categories />
      <FlatList<Movie>
        ref={flatListRef}
        keyExtractor={item => `movie-${item.id}`}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        data={movies}
        renderItem={({ item }) => <MovieCard item={item} />}
      />
      <FloatingActionButton
        primary
        position="right"
        text="Watch List"
        rightIcon={bookmarkIcon}
        onPress={() => navigate('WatchList')}
      />
    </SafeAreaView>
  );
};

export default Home;

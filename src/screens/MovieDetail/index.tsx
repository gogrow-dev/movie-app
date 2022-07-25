import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import arrowIcon from '../../assets/icons/arrow-back.png';
import bookmarkCheckIcon from '../../assets/icons/bookmark-check-black.png';
import bookmarkIcon from '../../assets/icons/bookmark.png';
import { IMAGE_BASE_URL } from '../../api';
import { useDispatch, useSelector } from '../../store';
import {
  addedToWatchSelector,
  categorySelector,
} from '../../store/selectors/movie';
import MovieCategory from '../../components/MovieCategory';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps, MovieRouteProps } from '../../navigation';
import AboutMovie from '../../components/AboutMovie';
import FloatingActionButton from '../../components/FloatingActionButton';
import styles from './styles';
import {
  addToWatchList,
  getWatchList,
} from '../../store/actions/moviesActions';

const MovieDetail = () => {
  const { goBack } = useNavigation<NavigationProps>();
  const {
    params: { movie },
  } = useRoute<MovieRouteProps>();
  const dispatch = useDispatch();

  const { id, backdropPath, posterPath, genreIds } = movie;
  const categories = useSelector(categorySelector(genreIds));
  const addedToWatch = useSelector(addedToWatchSelector(id));

  const handleAddToWatch = () => {
    dispatch(addToWatchList(movie.id)).then(() => {
      dispatch(getWatchList());
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backdropContainer}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${backdropPath}` }}
          style={styles.backdrop}
        />
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${posterPath}` }}
          style={styles.poster}
        />
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesList}
        contentContainerStyle={styles.categoriesContent}
        horizontal
        data={categories}
        renderItem={({ item }) => <MovieCategory name={item.name} />}
      />
      <AboutMovie movie={movie} />
      <FloatingActionButton
        position="left"
        text="Back"
        leftIcon={arrowIcon}
        onPress={goBack}
      />
      <FloatingActionButton
        disabled={addedToWatch}
        position="right"
        onPress={handleAddToWatch}
        primary={addedToWatch}
        leftIcon={addedToWatch ? bookmarkCheckIcon : bookmarkIcon}
      />
    </View>
  );
};

export default MovieDetail;

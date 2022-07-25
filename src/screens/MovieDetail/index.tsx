import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import arrowIcon from '../../assets/icons/arrow-back.png';
import bookmarkCheckIcon from '../../assets/icons/bookmark-check-black.png';
import bookmarkIcon from '../../assets/icons/bookmark.png';
import { IMAGE_BASE_URL } from '../../api';
import { useSelector } from '../../store';
import { categorySelector } from '../../store/selectors/movie';
import MovieCategory from '../../components/MovieCategory';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MovieNavigationProps, MovieRouteProps } from '../../navigation';
import AboutMovie from '../../components/AboutMovie';
import FloatingActionButton from '../../components/FloatingActionButton';
import styles from './styles';

const MovieDetail = () => {
  const { goBack } = useNavigation<MovieNavigationProps>();
  const {
    params: { movie },
  } = useRoute<MovieRouteProps>();

  const { backdropPath, posterPath, genreIds } = movie;
  const categories = useSelector(categorySelector(genreIds));

  //TODO: [Juan] Implement
  const isChecked = false;

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
        position="right"
        onPress={() => {}}
        primary={isChecked}
        leftIcon={isChecked ? bookmarkCheckIcon : bookmarkIcon}
      />
    </View>
  );
};

export default MovieDetail;

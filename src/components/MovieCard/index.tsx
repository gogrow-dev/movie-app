import { View, Text, Image } from 'react-native';
import React from 'react';
import { Movie } from '../../store/actions/moviesActions';
import styles from './styles';
import { IMAGE_BASE_URL } from '../../api';

interface IMovieCard {
  item: Movie;
}

const MovieCard = ({ item }: IMovieCard) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${item.posterPath}` }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.heading}>Title:</Text>
          <Text style={styles.blurb}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.heading}>Release Date:</Text>
          <Text style={styles.blurb}>{item.releaseDate}</Text>
        </View>
        <View>
          <Text style={styles.heading}>Average Rating:</Text>
          <Text style={styles.blurb}>{item.voteAverage}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;

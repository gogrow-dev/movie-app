import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation';
import { Movie } from '../../store/actions/moviesActions';
import styles from './styles';
import { IMAGE_BASE_URL } from '../../api';
import Bookmark from '../Bookmark';
import Star from '../Star';

interface IMovieCard {
  item: Movie;
  hideBookmark?: boolean;
}

const MovieCard = ({ item, hideBookmark = false }: IMovieCard) => {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity onPress={() => navigate('Movie', { movie: item })}>
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
        <View style={styles.iconsContainer}>
          {!hideBookmark && <Bookmark checked={item.bookmark} />}
          <Star addMargin={!hideBookmark} popularity={item.voteCount} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

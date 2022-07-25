import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import { Movie } from '../../store/actions/moviesActions';

interface IAboutMovie {
  movie: Movie;
}

const AboutMovie = ({ movie }: IAboutMovie) => {
  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      contentContainerStyle={styles.content}>
      <Text style={styles.heading}>About Movie</Text>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Overviews:</Text>
      <Text style={[styles.sectionText, styles.overview]}>
        {movie.overview}
      </Text>
      <Text style={styles.sectionTitle}>Release Date:</Text>
      <Text style={styles.sectionText}>{movie.releaseDate}</Text>
      <View style={styles.subSection}>
        <View style={styles.subSectionMargin}>
          <Text style={styles.sectionTitle}>Average Rating:</Text>
          <Text style={styles.sectionText}>{movie.voteAverage}</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Rate Count:</Text>
          <Text style={styles.sectionText}>{movie.voteCount}</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Popularity:</Text>
      <Text style={styles.sectionText}>{movie.popularity}</Text>
    </ScrollView>
  );
};

export default AboutMovie;

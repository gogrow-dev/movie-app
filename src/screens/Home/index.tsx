import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import styles from './styles';
import Categories from '../../components/Categories';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Movies App</Text>
        <Text style={styles.subtitle}>Find your movies</Text>
      </View>
      <Categories />
    </SafeAreaView>
  );
};

export default Home;

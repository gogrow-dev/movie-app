import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import WatchList from '../screens/WatchList';
import colors from '../styles/colors';
import MovieDetail from '../screens/MovieDetail';
import type { Movie } from '../store/actions/moviesActions';

export type RootStackParamList = {
  Home: undefined;
  Movie: { movie: Movie };
  WatchList: undefined;
};

export type MovieNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Movie'
>;
export type MovieRouteProps = RouteProp<RootStackParamList, 'Movie'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const options: NativeStackNavigationOptions = {
  headerShown: false,
  statusBarStyle: 'light',
  contentStyle: {
    backgroundColor: colors.background,
  },
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options} initialRouteName="Home">
        <Stack.Screen
          options={{ statusBarColor: 'dark-content' }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="WatchList" component={WatchList} />
        <Stack.Screen name="Movie" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

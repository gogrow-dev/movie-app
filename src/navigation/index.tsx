import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import WatchList from '../screens/WatchList';
import colors from '../styles/colors';

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen
          options={{ statusBarColor: 'dark-content' }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="WatchList" component={WatchList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

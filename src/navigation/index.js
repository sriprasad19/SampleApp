import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Counter from '../screen/Counter';
import {screens} from'../constants';

const Stack = createNativeStackNavigator();

const navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.HOME_SCREEN}>
        <Stack.Screen name={screens.HOME_SCREEN} component={Home} />
        <Stack.Screen name={screens.COUNTER_SCREEN} component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigator;
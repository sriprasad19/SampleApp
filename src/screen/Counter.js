import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/selector/homeSelector';

const Counter = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <View>
      <Text>Counter</Text>
    </View>
  )
}

export default Counter
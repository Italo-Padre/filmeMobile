import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Series from './Series';

const SeriesStack = () => {


    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen name="series-populares" component={Series} />
  </Stack.Navigator>
  )
}

export default SeriesStack
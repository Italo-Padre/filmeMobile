import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Atores from './Atores';

const AtoresStack = () => {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
      <Stack.Screen name="atores" component={Atores} />
    </Stack.Navigator>
    )
}

export default AtoresStack
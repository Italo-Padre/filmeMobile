import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FilmesPopulares from './FilmesPopulares';
import FilmesDetalhes from './FilmesDetalhes';
import AtoresDetalhes from '../atores/AtoresDetalhes';

const FilmesStack = () => {

    const Stack = createNativeStackNavigator();

  return (
    <>
         
        <Stack.Navigator>
          <Stack.Screen name="filmes-populares" component={FilmesPopulares} />
          <Stack.Screen name="Filmes-Detalhes" component={FilmesDetalhes} />
          <Stack.Screen name="Ator" component={AtoresDetalhes} />
        </Stack.Navigator>
      
    </>
  )
}

export default FilmesStack
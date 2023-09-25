import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';
import { PaperProvider } from 'react-native-paper';
import AtoresDetalhes from './screens/atores/AtoresDetalhes';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>

    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Filmes-Populares" component={FilmesPopulares} />
          <Stack.Screen name="Filmes-Detalhes" component={FilmesDetalhes} />
          <Stack.Screen name="Ator" component={AtoresDetalhes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
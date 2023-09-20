import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmesPopulares from './screens/FilmesPopulares';
import FilmesDetalhes from './screens/FilmesDetalhes';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>

    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Filmes-Populares" component={FilmesPopulares} />
          <Stack.Screen name="Filmes-Detalhes" component={FilmesDetalhes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
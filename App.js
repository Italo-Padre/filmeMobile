import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';
import { PaperProvider } from 'react-native-paper';
import AtoresDetalhes from './screens/atores/AtoresDetalhes';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesStack from './screens/filmes/FilmesStack';
import SeriesStack from './screens/series/SeriesStack';
import AtoresStack from './screens/atores/AtoresStack';



export default function App() {

  
  const Tab = createMaterialBottomTabNavigator();


  return (
    <PaperProvider>
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Filmes"
        component={FilmesStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie-open"  size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={SeriesStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="remote-tv"  size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ator"
        component={AtoresStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="face-recognition"  size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={AtoresDetalhes}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cogs"  size={26} />
          ),
        }}
      />
    
    </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
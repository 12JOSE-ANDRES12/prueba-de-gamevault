import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameListScreen from '../screens/GameListScreen';
import GameDetailScreen from '../screens/GameDetailScreen';
import AddGameScreen from '../screens/AddGameScreen';
import GamingNewsScreen from '../screens/GamingNewsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CatalogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GameList"
        component={GameListScreen}
        options={{ title: 'Catálogo' }}
      />
      <Stack.Screen
        name="GameDetail"
        component={GameDetailScreen}
        options={{ title: 'Detalle del juego' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Catálogo"
        component={CatalogStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Agregar"
        component={AddGameScreen}
      />
      <Tab.Screen
        name="Noticias"
        component={GamingNewsScreen}
      />
    </Tab.Navigator>
  );
}

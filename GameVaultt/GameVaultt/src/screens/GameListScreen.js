import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Pressable,
  SafeAreaView,
} from 'react-native';
import GameListStyles from '../styles/GameListStyles';

const initialGames = [
  {
    id: '1',
    title: 'Galaxy Raiders',
    platform: 'PS5',
    genre: 'action',
    price: '$69.99',
    ageRating: 'T',
    description: 'Aventura espacial con combates intensos y mejoras modulares.',
    emoji: '🚀',
  },
  {
    id: '2',
    title: 'Cyber Duel',
    platform: 'PC',
    genre: 'strategy',
    price: '$39.99',
    ageRating: 'M',
    description: 'Juego de estrategia en tiempo real con batallas futuristas.',
    emoji: '🤖',
  },
  {
    id: '3',
    title: 'Forest Legends',
    platform: 'Nintendo Switch',
    genre: 'adventure',
    price: '$49.99',
    ageRating: 'E',
    description: 'Explora bosques mágicos y resuelve acertijos antiguos.',
    emoji: '🌲',
  },
  {
    id: '4',
    title: 'Road Fury',
    platform: 'Xbox',
    genre: 'racing',
    price: '$59.99',
    ageRating: 'T',
    description: 'Carreras extremas con vehículos altamente personalizables.',
    emoji: '🏎️',
  },
  {
    id: '5',
    title: 'Kingdom Tactics',
    platform: 'PC',
    genre: 'rpg',
    price: '$54.99',
    ageRating: 'T',
    description: 'RPG táctico con batallas por turnos y narrativa profunda.',
    emoji: '⚔️',
  },
  {
    id: '6',
    title: 'Pixel Fighters',
    platform: 'PS5',
    genre: 'fighting',
    price: '$29.99',
    ageRating: 'M',
    description: 'Campeonato de lucha retro con múltiples arenas y personajes.',
    emoji: '👾',
  },
];

export default function GameListScreen({ navigation }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGames(initialGames);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      style={GameListStyles.card}
      onPress={() => navigation.navigate('GameDetail', { game: item })}
    >
      <Text style={GameListStyles.emoji}>{item.emoji}</Text>
      <Text style={GameListStyles.title}>{item.title}</Text>
      <Text style={GameListStyles.text}>Platform: {item.platform}</Text>
      <Text style={GameListStyles.text}>Genre: {item.genre}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={GameListStyles.container}>
      {loading ? (
        <View style={GameListStyles.loadingContainer}>
          <ActivityIndicator size="large" color="#0066CC" />
          <Text style={GameListStyles.loadingText}>Cargando catálogo...</Text>
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={GameListStyles.list}
        />
      )}
    </SafeAreaView>
  );
}

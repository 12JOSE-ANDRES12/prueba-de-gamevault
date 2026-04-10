import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameDetailStyles from '../styles/GameDetailStyles';

// Displays details of selected game and toggles wishlist status
export default function GameDetailScreen({ route, navigation }) {
  const { game } = route.params;
  const [wishlist, setWishlist] = useState(false);
  const [record, setrecord] = useState([]);

  // side effect runs when selected game changes (currently placeholder)
  useEffect(() => {
    if (game) {
      setrecord((prev) => {
        if (prev[prev.length - 1]?.id === game.id) return prev; // avoid duplicates
        return [...prev, game];
      });
    }
  }, [game]);

  // choose platform-specific style class
  const platformStyle = () => {
    if (game.platform === 'PS5') return GameDetailStyles.ps5;
    if (game.platform === 'Xbox') return GameDetailStyles.xbox;
    if (game.platform === 'PC') return GameDetailStyles.pc;
    return GameDetailStyles.switch;
  };

  const genreStyle = () => {
    if (game.genre === 'action') return GameDetailStyles.genreAction;
    if (game.genre === 'adventure') return GameDetailStyles.genreAdventure;
    if (game.genre === 'rpg') return GameDetailStyles.genreRPG;
    if (game.genre === 'strategy') return GameDetailStyles.genreStrategy;
    return GameDetailStyles.genreDefault;
  };

  return (
    <SafeAreaView style={GameDetailStyles.container}>
      <View style={[GameDetailStyles.card, platformStyle(), genreStyle()]}>
        <Text style={GameDetailStyles.emoji}>{game.emoji}</Text>
        <Text style={GameDetailStyles.title}>{game.title}</Text>
        <Text style={GameDetailStyles.text}>Platform: {game.platform}</Text>
        <Text style={GameDetailStyles.text}>Genre: {game.genre}</Text>
        <Text style={GameDetailStyles.text}>Price: {game.price}</Text>
        <Text style={GameDetailStyles.text}>Age Rating: {game.ageRating}</Text>
        <Text style={GameDetailStyles.description}>{game.description}</Text>
        <Text style={GameDetailStyles.text}>Último juego visto: {record[record.length - 2]?.title || 'Ninguno'}</Text>
        <Text style={GameDetailStyles.text}>Horas jugadas: {game.hoursPlayed ? game.hoursPlayed : 'N/A'}</Text>
         </View>
        
        <View style={[GameDetailStyles.card, platformStyle(), genreStyle()]}></View>
        <Pressable
          style={[GameDetailStyles.button, wishlist ? GameDetailStyles.buttonActive : {}]}
          onPress={() => setWishlist((prev) => !prev)}
        >
          <Text style={GameDetailStyles.buttonText}>
            {wishlist ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
          </Text>
        </Pressable>
        <Pressable
          style={GameDetailStyles.buttonSecondary}
          onPress={() => navigation.goBack()}
        >
          

          <View style={[GameDetailStyles.card, platformStyle(), genreStyle()]}></View>
          <Text style={GameDetailStyles.buttonText}>Volver</Text>
        </Pressable>


    </SafeAreaView>
  );
}

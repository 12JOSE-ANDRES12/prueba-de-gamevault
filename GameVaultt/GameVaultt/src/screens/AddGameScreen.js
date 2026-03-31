import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AddGameStyles from '../styles/AddGameStyles';

// Form screen to add a new game, with validation and clear action.
export default function AddGameScreen() {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [ageRating, setAgeRating] = useState('');
  const [isValid, setIsValid] = useState(false);

  // validate fields whenever input changes
  useEffect(() => {
    const priceValue = Number(price);
    const valid =
      title.trim().length > 0 &&
      platform.trim().length > 0 &&
      genre.trim().length > 0 &&
      ageRating.trim().length > 0 &&
      !Number.isNaN(priceValue) &&
      priceValue > 0;

    setIsValid(valid);
  }, [title, platform, genre, price, ageRating]);

  const handleAddGame = () => {
    Alert.alert(
      'Juego agregado',
      `Title: ${title}\nPlatform: ${platform}\nGenre: ${genre}\nPrice: ${price}\nAge Rating: ${ageRating}`
    );
  };

  const handleClear = () => {
    setTitle('');
    setPlatform('');
    setGenre('');
    setPrice('');
    setAgeRating('');
  };

  return (
    <SafeAreaView style={AddGameStyles.container}>
      <KeyboardAvoidingView
        style={AddGameStyles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={AddGameStyles.card}>
          <Text style={AddGameStyles.label}>Title</Text>
          <TextInput
            style={AddGameStyles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
          />

          <Text style={AddGameStyles.label}>Platform</Text>
          <TextInput
            style={AddGameStyles.input}
            value={platform}
            onChangeText={setPlatform}
            placeholder="PS5, Xbox, PC, Nintendo Switch"
          />

          <Text style={AddGameStyles.label}>Genre</Text>
          <TextInput
            style={AddGameStyles.input}
            value={genre}
            onChangeText={setGenre}
            placeholder="acción, aventura, RPG, deportes, estrategia"
          />

          <Text style={AddGameStyles.label}>Price</Text>
          <TextInput
            style={AddGameStyles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="Precio"
            keyboardType="numeric"
          />

          <Text style={AddGameStyles.label}>Age Rating</Text>
          <TextInput
            style={AddGameStyles.input}
            value={ageRating}
            onChangeText={setAgeRating}
            placeholder="E, T, M"
          />

          <Pressable
            style={[AddGameStyles.button, !isValid && AddGameStyles.buttonDisabled]}
            onPress={handleAddGame}
            disabled={!isValid}
          >
            <Text style={AddGameStyles.buttonText}>Agregar Juego</Text>
          </Pressable>
          <Pressable style={AddGameStyles.buttonSecondary} onPress={handleClear}>
            <Text style={AddGameStyles.buttonText}>Limpiar</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

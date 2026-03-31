import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import gamingNewsData from '../data/gamingNewsData';
import GamingNewsStyles from '../styles/GamingNewsStyles';

export default function GamingNewsScreen() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setNews(gamingNewsData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gamingNewsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      setMessage(`Mostrando noticia ${currentIndex + 1} de ${news.length}`);
    }
  }, [currentIndex, news]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const currentNews = news[currentIndex] || {};

  return (
    <SafeAreaView style={GamingNewsStyles.container}>
      <View style={GamingNewsStyles.card}>
        <Text style={GamingNewsStyles.title}>{currentNews.title}</Text>
        <Text style={GamingNewsStyles.description}>{currentNews.description}</Text>
        <Text style={GamingNewsStyles.date}>{currentNews.date}</Text>
      </View>
      <Text style={GamingNewsStyles.indicator}>Noticia {currentIndex + 1} de {news.length}</Text>
      <Text style={GamingNewsStyles.message}>{message}</Text>
      <Pressable style={GamingNewsStyles.button} onPress={handleNext}>
        <Text style={GamingNewsStyles.buttonText}>Siguiente noticia</Text>
      </Pressable>
    </SafeAreaView>
  );
}

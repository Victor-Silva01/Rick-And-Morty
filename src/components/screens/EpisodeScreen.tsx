import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { api } from '../../../service/api';

const EpisodeScreen = () => {
  const [episodes, setEpisodes] = useState<any[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await api.get('/episode');
        const episodesData = response.data.results;
        setEpisodes(episodesData);
      } catch (error) {
        console.error('Erro ao buscar episódios:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Episodes de Rick and Morty</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          {episodes.map((episode: any, index: number) => (
            <View key={index} style={styles.episodeItem}>
              <Text style={styles.episodeTitle}>{episode.name}</Text>
              <Text style={styles.episodeDetails}>Episode: {episode.episode}</Text>
              <Text style={styles.episodeDetails}>Air Date: {episode.air_date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  episodeItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#B0E0E6', 
  },
  episodeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  episodeDetails: {
    fontSize: 14,
  },
});

export default EpisodeScreen;

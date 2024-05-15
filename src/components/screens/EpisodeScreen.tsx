import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { api } from '../../../service/API';


const EpisodeScreen = () => {
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await api.get('https://api.url/episodes');
        const episodesData = response.data.results;
        setEpisodes(episodesData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar episódios:', error);
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Episódios</Text>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          <View style={styles.episodeContainer}>
            {episodes.map((episode: any, index: number) => (
              <View key={index} style={styles.episodeItem}>
                <Text>Nome: {episode.name}</Text>
                <Text>Código: {episode.episode}</Text>
                {/* Outras informações do episódio */}
              </View>
            ))}
          </View>
        </ScrollView>
      )}
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
  episodeContainer: {
    paddingHorizontal: 10,
  },
  episodeItem: {
    marginBottom: 20,
  },
});

export default EpisodeScreen;

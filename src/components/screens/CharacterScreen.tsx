import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import CardItem from '../../components/CardItem'; 
import { api } from '../../../service/api'; 
import { useNavigation } from '@react-navigation/native';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

const CharacterScreen = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  const fetchCharacters = async () => {
    try {
      const response = await api.get('/character');
      const charactersData = response.data.results;
      setCharacters(charactersData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const navigateToCharacterDetail = (character: Character) => {
    navigation.navigate('CharacterDetail', { character });
  };

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>Error fetching characters: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personagem de Rick and Morty !</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          {characters.map((character) => (
            <TouchableOpacity
              key={character.id}
              onPress={() => navigateToCharacterDetail(character)}
              accessibilityLabel={`Go to details for ${character.name}`}
              accessible
            >
              <CardItem
                name={character.name}
                image={character.image}
                status={character.status}
                species={character.species}
                statusColor={character.status === 'Alive' ? 'green' : 'red'}
              />
            </TouchableOpacity>
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
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CharacterScreen;

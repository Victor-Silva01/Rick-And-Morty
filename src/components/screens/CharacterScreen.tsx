// src/screens/CharacterScreen.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardItem from '../CardItem';
import { api } from '../../../service/API';



const CharacterScreen = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await api.get('/character');
        const charactersData = response.data.results;
        setCharacters(charactersData);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rick and Morty!</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          {characters.map((character: any, index: number) => (
            <CardItem
              key={index}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              statusColor={character.status === 'Alive' ? 'green' : 'red'} 
            />
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
});

export default CharacterScreen;

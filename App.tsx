import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {api} from './service/api'; 

export default function App() {
  const [characterNames, setCharacterNames] = useState<string[]>([]);

  /*useEffect(() => {
    const fetchCharacterNames = async () => {
      try {
        const response = await api.get('/character');
        const characters = response.data.results;
        const names = characters.map((character: any) => character.name);
        setCharacterNames(names);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    };

    fetchCharacterNames();
  }, []);*/

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rick and Morty!</Text>
     
    </View>
  );
}

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
  characterName: {
    fontSize: 18,
    marginBottom: 10,
  },
});

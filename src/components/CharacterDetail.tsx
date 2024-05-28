import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Character {
  name: string;
  image: string;
  status: string;
  species: string;
}

interface RouteParams {
  character: Character;
}

const getBackgroundColor = (name: string): string => {
  switch (name.toLowerCase()) {
    //cores dos personagens 
    case 'rick sanchez':
      return '#ADD8E6'; // azul claro
    case 'morty smith':
      return '#FFEB3B'; // amarelo
    case 'summer smith':
      return '#FFC0CB'; // rosa
    case 'beth smith':
      return '#98FB98'; // verde claro
    case 'jerry smith':
      return '#FFA500'; // laranja
    case 'mr. meeseeks':
      return '#00FFFF'; // ciano
    case 'birdperson':
      return '#A52A2A'; // marrom
    case 'squanchy':
      return '#F4A460'; // areia
    case 'evil morty':
      return '#8B0000'; // vermelho escuro
    case 'pickle rick':
      return '#32CD32'; // verde lima
    // Adicione mais personagens conforme necessário
    default:
      return '#FFF'; // padrão branco
  }
};

const CharacterDetail = ({ route }: { route?: { params?: RouteParams } }) => {
  const character = route?.params?.character;
  const [imageError, setImageError] = useState(false);

  if (!character) {
    return null; // Se não houver personagem, não renderize nada
  }

  const backgroundColor = getBackgroundColor(character.name);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.name} accessibilityRole="header" accessibilityLabel={`Nome: ${character.name}`}>
        {character.name}
      </Text>
      {imageError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Erro ao carregar imagem</Text>
        </View>
      ) : (
        <Image
          source={{ uri: character.image }}
          style={styles.image}
          accessible
          accessibilityLabel={`Imagem de ${character.name}`}
          onError={() => setImageError(true)}
        />
      )}
      <Text style={styles.info} accessibilityRole="text" accessibilityLabel={`Status: ${character.status}`}>
        Status: {character.status}
      </Text>
      <Text style={styles.info} accessibilityRole="text" accessibilityLabel={`Espécie: ${character.species}`}>
        Espécie: {character.species}
      </Text>
    </View>
  );
};

const colors = {
  text: '#000',
  errorText: '#FF0000',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.text,
  },
  errorContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    marginBottom: 20,
  },
  errorText: {
    color: colors.errorText,
    fontSize: 16,
  },
});

export default CharacterDetail;

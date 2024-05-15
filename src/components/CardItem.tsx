import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface CardItemProps {
  name: string;
  image: string;
  status: string;
  species: string;
  statusColor: string;
}

const CardItem: React.FC<CardItemProps> = ({ name, image, status, species, statusColor }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.species}>{`- ${species}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B0E0E6',
    borderRadius: 4,
    marginBottom: 20,
    padding: 15, 
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row', 
  },
  image: {
    width: 100,
    height: 100, 
    borderRadius: 20,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1, 
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    marginBottom: 5,
  },
  species: {
    fontSize: 14,
    color: '#555',
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default CardItem;

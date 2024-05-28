import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { api } from '../../../service/api';

const FilterLocationScreen = () => {
  const [locations, setLocations] = useState<any[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await api.get('/location');
        const locationsData = response.data.results;
        setLocations(locationsData);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Locais de Rick and Morty</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.locationContainer}>
          {locations.map((location: any, index: number) => (
            <View key={index} style={styles.locationItem}>
              <Text style={styles.locationName}>{location.name}</Text>
              <Text>Type: {location.type}</Text>
              <Text>Dimension: {location.dimension}</Text>
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
  locationContainer: {
    paddingHorizontal: 10,
  },
  locationItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#B0E0E6', 
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilterLocationScreen;

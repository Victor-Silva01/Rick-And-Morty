import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Locations Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LocationScreen;

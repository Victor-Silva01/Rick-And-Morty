// src/navigation/AppTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CharacterScreen from '../screens/CharacterScreen';
import LocationScreen from '../screens/LocationScreen';
import EpisodeScreen from '../screens/EpisodeScreen';



const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Characters" component={CharacterScreen} />
        <Tab.Screen name="Locations" component={LocationScreen} />
        <Tab.Screen name="Episodes" component={EpisodeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;
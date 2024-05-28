// AppNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CharacterScreen from '../screens/CharacterScreen';
import LocationScreen from '../screens/LocationScreen';
import EpisodeScreen from '../screens/EpisodeScreen';
import CharacterDetail from '../CharacterDetail'; 
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CharacterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CharacterScreen" 
        component={CharacterScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="CharacterDetail" 
        component={CharacterDetail} 
        options={{ title: 'Detalhe personagem' }} 
      />
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Characters"
          component={CharacterStack}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../../assets/icons/image.png')}
                style={{ width: 33, height: 25, marginTop: 6 }} 
              />
            ),
          }}
        />
        <Tab.Screen
          name="Locations"
          component={LocationScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../../assets/icons/mundo.png')}
                style={{ width: 26, height: 25, marginTop: 5 }} 
              />
            ),
          }}
        />
        <Tab.Screen
          name="Episodes"
          component={EpisodeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../../assets/icons/episodio.png')}
                style={{ width: 26, height: 25, marginTop: 5 }} 
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;

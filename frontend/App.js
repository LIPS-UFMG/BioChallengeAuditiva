import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import DevicesScreen from './components/DevicesScreen'; // Importando DevicesScreen

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/icon-home.png')}
                style={{ width: 20, height: 20, opacity: focused ? 1 : 0.3 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Dispositivos"
          component={DevicesScreen} // Usando DevicesScreen
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/icon-devices.png')}
                style={{ width: 20, height: 15, opacity: focused ? 1 : 0.3 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Configurações"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/icon-settings.png')}
                style={{ width: 20, height: 20, opacity: focused ? 1 : 0.3 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

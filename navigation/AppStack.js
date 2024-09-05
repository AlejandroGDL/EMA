import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Screens
import Menu from '../screens/Menu';
import SettingsScreen from '../screens/Settings';
import EventsScreen from '../screens/Events';
import CertificatesScreen from '../screens/Certificates';

import Theme from '../src/styles/Theme';

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen
        name='Menu'
        component={Menu}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
      />
      <Stack.Screen
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
        name='Events'
        component={EventsScreen}
      />
      <Stack.Screen
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
        name='Certificates'
        component={CertificatesScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});

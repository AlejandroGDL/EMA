import React from 'react';

//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Screens
import LoginScreen from '../screens/Login';
import StartScreen from '../screens/Start';

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Start'>
      <Stack.Screen
        name='Start'
        component={StartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

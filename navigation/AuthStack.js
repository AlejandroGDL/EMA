import React from 'react';

//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Screens
import LoginScreen from '../screens/Login';
import StartScreen from '../screens/Start';
import ForgotPasswordScreen from '../screens/ForgotPassword';

import Theme from '../src/styles/Theme';

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
      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPasswordScreen}
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
    </Stack.Navigator>
  );
};

export default AuthStack;

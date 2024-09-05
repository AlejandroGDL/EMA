import { StyleSheet, View } from 'react-native';
import React from 'react';

import MyButton from '../src/components/MyButton';
import UserComponent from '../src/components/User';
import Theme from '../src/styles/Theme';

const Settings = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
          headerTitle: '',
          headerRight: () => '',
          headerLeft: () => '',
        }}
      />

      <UserComponent />
      <MyButton>Cerrar sesión</MyButton>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});

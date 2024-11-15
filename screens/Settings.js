import { StyleSheet, View } from 'react-native';
import React from 'react';

//Components
import MyButton from '../src/components/MyButton';
import UserComponent from '../src/components/User';
import MyText from '../src/components/MyText';

import Theme from '../src/styles/Theme';

//Hooks
import { useAuth } from '../hooks/AuthContext';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

const Settings = () => {
  const nav = useNavigation();
  const { signOut } = useAuth();

  return (
    <View style={styles.SettingsContainer}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.primary}
      />
      <View>
        <MyText
          h1
          bold
          color={Theme.colors.white}
        >
          Ajustes
        </MyText>
        <UserComponent color={Theme.colors.white} />
      </View>
      <View style={styles.SettingsContainerButtons}>
        <MyButton
          Function={() => {
            nav.navigate('ChangePassword');
          }}
          TextProps={{ color: Theme.colors.white, bold: true }}
        >
          Actualizar Constraseña
        </MyButton>
        <MyButton
          Function={signOut}
          TextProps={{ color: Theme.colors.white, bold: true }}
        >
          Cerrar sesión
        </MyButton>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  SettingsContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
    justifyContent: 'space-between',
  },
  SettingsContainerButtons: {
    display: 'flex',
    gap: 20,
    marginBottom: 50,
  },
});

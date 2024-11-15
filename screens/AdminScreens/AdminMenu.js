import { StyleSheet, View } from 'react-native';
import React from 'react';

//Components
import UserComponent from '../../src/components/User';
import MyButton from '../../src/components/MyButton';

//Icons
import CreateEvent from '../../src/icons/CreateEvent';
import EditEvent from '../../src/icons/EditEvent';
import ResetPassword from '../../src/icons/ResetPassword';
import RegisterAttendace from '../../src/icons/RegisterAttendance';
import SeeAttendance from '../../src/icons/SeeAttendance';

import Theme from '../../src/styles/Theme';

import { StatusBar } from 'expo-status-bar';

const AdminMenu = ({ navigation }) => {
  return (
    <View style={styles.ConAdminMenu}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.primary}
      />
      <UserComponent />
      <View style={styles.ConAdminMenuButtons}>
        <MyButton
          Icon={CreateEvent}
          IconProps={{ color: Theme.colors.white, width: 30, height: 30 }}
          TextProps={{ color: Theme.colors.white, bold: true, h3: true }}
          Function={() => {
            navigation.navigate('Create');
          }}
        >
          Crear Evento
        </MyButton>
        <MyButton
          Icon={EditEvent}
          IconProps={{ color: Theme.colors.white, width: 30, height: 30 }}
          TextProps={{ color: Theme.colors.white, bold: true, h3: true }}
          Function={() => {
            navigation.navigate('Edit');
          }}
        >
          Editar o Eliminar un Evento
        </MyButton>
        <MyButton
          Icon={RegisterAttendace}
          IconProps={{ color: Theme.colors.white, width: 30, height: 30 }}
          TextProps={{ color: Theme.colors.white, bold: true, h3: true }}
          Function={() => {
            navigation.navigate('RegisterByQR');
          }}
        >
          Registrar Asistencia
        </MyButton>
        <MyButton
          Icon={ResetPassword}
          IconProps={{ color: Theme.colors.white, width: 30, height: 30 }}
          TextProps={{ color: Theme.colors.white, bold: true, h3: true }}
          Function={() => {
            navigation.navigate('ChangePasswordbyAdmin');
          }}
        >
          Restablecer Contraseña
        </MyButton>
        <MyButton
          Icon={SeeAttendance}
          IconProps={{ color: Theme.colors.white, width: 30, height: 30 }}
          TextProps={{ color: Theme.colors.white, bold: true, h3: true }}
          Function={() => {
            navigation.navigate('SearchEvents');
          }}
        >
          Ver Asistencias
        </MyButton>
      </View>
    </View>
  );
};

export default AdminMenu;

const styles = StyleSheet.create({
  ConAdminMenu: {
    flex: 1,
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    gap: 30,
  },
  ConAdminMenuButtons: {
    display: 'flex',
    gap: 20,
  },
});

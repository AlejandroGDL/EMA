import { StyleSheet, View } from 'react-native';
import React from 'react';

//Components
import UserComponent from '../../src/components/User';
import MyButton from '../../src/components/MyButton';

//Icons
import CreateEvent from '../../src/icons/CreateEvent';
import EditEvent from '../../src/icons/EditEvent';

import Theme from '../../src/styles/Theme';

const AdminMenu = ({ navigation }) => {
  return (
    <View style={styles.ConAdminMenu}>
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
          Icon={EditEvent}
          IconProps={{ color: Theme.colors.white, width: 30, height: 30 }}
          TextProps={{ color: Theme.colors.white, bold: true, h3: true }}
          Function={() => {
            navigation.navigate('ChangePasswordbyAdmin');
          }}
        >
          Restablecer Contraseña
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

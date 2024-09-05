import { StyleSheet, View } from 'react-native';
import React from 'react';

import { useAuth } from '../hooks/AuthContext';

// Importamos los componentes personalizados
import MyButton from '../src/components/MyButton';
import InfoCard from '../src/components/InfoCard';

// Importamos el tema personalizado
import Theme from '../src/styles/Theme';

// Importamos los iconos personalizados
import Certificates from '../src/icons/Certificates';
import AvailableEvents from '../src/icons/AvailableEvents';
import CarreraBook from '../src/icons/CarreraBook';

import User from '../src/UserData';
import UserComponent from '../src/components/User';

const Menu = ({ navigation }) => {
  const { signOut } = useAuth();
  const { user } = useAuth();

  return (
    <View style={styles.IndexContainer}>
      <UserComponent />
      <View>
        <InfoCard
          Title={'Carrera:'}
          Info={user.StudentInfo.career}
          Icon={CarreraBook}
        />
        <InfoCard
          Title={'Semestre:'}
          Info={user.StudentInfo.semestre}
          Icon={CarreraBook}
        />
        <InfoCard
          Title={'Horas acumuladas:'}
          Info={user.StudentInfo.hours}
          Icon={CarreraBook}
        />
      </View>
      <View style={styles.ConIndexButtons}>
        <MyButton
          Function={() => {
            navigation.navigate('Certificates');
          }}
          Icon={Certificates}
          IconProps={{
            width: 30,
            height: 30,
          }}
          TextProps={{
            h3: true,
            color: Theme.colors.white,
            bold: true,
          }}
        >
          Tus Certificados
        </MyButton>

        <MyButton
          Function={() => {
            navigation.navigate('Events');
          }}
          Icon={AvailableEvents}
          IconProps={{
            width: 30,
            height: 30,
          }}
          TextProps={{
            h3: true,
            color: Theme.colors.white,
            medium: true,
          }}
        >
          Eventos Disponibles
        </MyButton>
        <MyButton Function={signOut}>Cerrar Sesion</MyButton>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  IndexContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 30,
    backgroundColor: Theme.colors.white,
  },

  ConIndexButtons: {
    display: 'flex',
    gap: 20,
  },
});

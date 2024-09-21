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
import Clock2 from '../src/icons/Clock2';
import Semester from '../src/icons/Semester';

import UserComponent from '../src/components/User';

const Menu = ({ navigation }) => {
  const { user } = useAuth();

  //Cambiar minutos a horas
  const hours = user.StudentHours / 60;
  user.StudentHours = hours;

  return (
    <View style={styles.IndexContainer}>
      <UserComponent />
      <View>
        <InfoCard
          Title={'Carrera:'}
          Info={user.StudentCareer}
          Icon={CarreraBook}
        />
        <InfoCard
          Title={'Semestre:'}
          Info={user.StudentSemester}
          Icon={Semester}
        />
        <InfoCard
          Title={'Horas acumuladas:'}
          Info={user.StudentHours}
          Icon={Clock2}
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

import { StyleSheet, View, Platform } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

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

//Notifications
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

//Axios config
import Axiosconfig from '../src/config/Axiosconfig';

const Menu = ({ navigation }) => {
  const { user } = useAuth();

  // Notificaciones
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // Notificaciones
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
      //console.log('Expo Push Token:', token); // Imprime el token
    });

    // Escucha las notificaciones
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        //console.log('Notification received:', notification); // Imrpime la notificación
      });

    // Respuesta al tocar la notificación
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // Enviar token al backend
  const EnviarToken = async () => {
    try {
      await Axiosconfig.post('api/user/pushToken', {
        PushToken: expoPushToken,
        StudentID: user.StudentID,
      });
    } catch (error) {
      console.log('Error al enviar el token', error.message);
    }
  };

  // Ejecutar Enviar notificación al backend
  useEffect(() => {
    if (expoPushToken) {
      EnviarToken();
    }
  }, [expoPushToken]);

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

async function registerForPushNotificationsAsync() {
  let token;
  const projectId = '7b240c19-37d8-48fa-8f31-8bc857da091d'; // Expo Project ID

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Error al obtener el token!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
  } else {
    alert('El dispositivo no es válido');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

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

import { StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';

import Theme from '../styles/Theme';

//Componentes
import MyText from './MyText';
import MyButton from './MyButton';
import Separator from './Separator';

//Iconos
import Date from '../icons/Date';
import Clock from '../icons/Clock';
import Duration from '../icons/Duration';
import Place from '../icons/Place';

//Configuración de Axios
import Axiosconfig from '../config/Axiosconfig';
import config from '../config/Url';

// User context
import { useAuth } from '../../hooks/AuthContext';

// Notificaciones
import Toast from 'react-native-toast-message';

import { useNavigation } from '@react-navigation/native';

const EventCard = () => {
  const [Eventos, setEventos] = React.useState([]);
  const { user } = useAuth();

  const nav = useNavigation();

  const getEvents = async () => {
    try {
      const Eventos = await Axiosconfig.get('api/events');
      if (!Eventos.data) {
        Toast.show({
          type: 'error',
          text1: 'No se encontraron eventos',
        });

        Eventos.return;
      }
      setEventos(Eventos.data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error al cargar los eventos',
        text2: response.data.message,
      });
    }
  };

  React.useEffect(() => {
    getEvents();
  }, []);

  Eventos.map((event) => {
    const date = event.DateandHour.split('T');
    const hour = date[1].split(':');
    event.DateandHour = date[0];
    event.Hour = hour[0] + ':' + hour[1];

    //Agregar PM o AM
    if (hour[0] > 12) {
      event.Hour = hour[0] - 12 + ':' + hour[1] + ' PM';
    } else {
      event.Hour = hour[0] + ':' + hour[1] + ' AM';
    }

    //Separar la fecha en un array
    const dateArray = date[0].split('-');

    //Cambiar el numero del mes a nombre
    switch (dateArray[1]) {
      case '01':
        event.DateandHour = dateArray[2] + ' de Enero de ' + dateArray[0];
        break;
      case '02':
        event.DateandHour = dateArray[2] + ' de Febrero de ' + dateArray[0];
        break;
      case '03':
        event.DateandHour = dateArray[2] + ' de Marzo de ' + dateArray[0];
        break;
      case '04':
        event.DateandHour = dateArray[2] + ' de Abril de ' + dateArray[0];
        break;
      case '05':
        event.DateandHour = dateArray[2] + ' de Mayo de ' + dateArray[0];
        break;
      case '06':
        event.DateandHour = dateArray[2] + ' de Junio de ' + dateArray[0];
        break;
      case '07':
        event.DateandHour = dateArray[2] + ' de Julio de ' + dateArray[0];
        break;
      case '08':
        event.DateandHour = dateArray[2] + ' de Agosto de ' + dateArray[0];
        break;
      case '09':
        event.DateandHour = dateArray[2] + ' de Septiembre de ' + dateArray[0];
        break;
      case '10':
        event.DateandHour = dateArray[2] + ' de Octubre de ' + dateArray[0];
        break;
      case '11':
        event.DateandHour = dateArray[2] + ' de Noviembre de ' + dateArray[0];
        break;
      case '12':
        event.DateandHour = dateArray[2] + ' de Diciembre de ' + dateArray[0];
        break;
    }

    //Si la duración es menor a 60 minutos se muestra en minutos si no en horas
    if (event.Duration < 60) {
      event.Duration = event.Duration + ' Minutos';
    } else {
      event.Duration = event.Duration / 60 + ' Horas';
    }
  });

  const GenerarQR = async (event) => {
    nav.navigate('QR', { event });
  };

  const AgregarListaNotificacion = async (event) => {
    try {
      await Axiosconfig.post('api/registerlistnotify', {
        EventID: event._id,
        StudentID: user.StudentID,
      });
      Toast.show({
        type: 'success',
        text1: 'Ya recibiras notificaciones de este evento, ¡No faltes!',
      });
    } catch (error) {
      console.error('Error al registrar las notificaciones:', {
        response: error,
      });
    }
  };

  return Eventos.map((event, id) => (
    <View
      style={styles.ConEventCard}
      key={id}
    >
      {event.IsActive ? (
        <View style={styles.ConEventCardIsActive}>
          <MyText color={Theme.colors.green}>
            ¡Evento actualmente en curso!
          </MyText>
        </View>
      ) : null}
      {event.IsEnd ? (
        <View style={styles.ConEventCardIsEnd}>
          <MyText color={Theme.colors.red}>¡Este evento a finalizado!</MyText>
        </View>
      ) : null}
      <View>
        <MyText
          medium
          h3
        >
          {event.Title}
        </MyText>
      </View>
      <View>
        <Image
          source={{
            uri: config.API_URL + '/uploads/' + event.Image,
          }}
          style={styles.EventImage}
        />
      </View>
      <View style={styles.ConEventInfo}>
        <View style={styles.ConEventInfo1}>
          <MyText icon={Date}> {event.DateandHour}</MyText>
          <MyText icon={Clock}> {event.Hour}</MyText>
        </View>
        <View style={styles.ConEventInfo2}>
          <MyText icon={Duration}> {event.Duration}</MyText>
          <MyText icon={Place}> {event.Place}</MyText>
        </View>
      </View>
      {event.IsActive || event.IsEnd ? null : (
        <>
          <Separator />
          <View>
            <MyButton
              Function={() => {
                AgregarListaNotificacion(event);
              }}
              TextProps={{
                color: Theme.colors.white,
              }}
            >
              ¡Estaré allí, Notifícame!
            </MyButton>
            <MyButton
              Function={() => {
                GenerarQR(event);
              }}
              TextProps={{
                color: Theme.colors.white,
              }}
            >
              Generar QR para Asistencia
            </MyButton>
          </View>
        </>
      )}
      <Toast />
    </View>
  ));
};

export default EventCard;

const styles = StyleSheet.create({
  ConEventCard: {
    backgroundColor: Theme.colors.white,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: Theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
  },

  ConEventCardIsActive: {
    borderWidth: 1,
    borderColor: Theme.colors.green,
    padding: 5,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ConEventCardIsEnd: {
    borderWidth: 1,
    borderColor: Theme.colors.red,
    padding: 5,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  EventImage: {
    width: 90,
    height: 90,
    borderRadius: 50,

    borderColor: Theme.colors.primary,
    borderWidth: 0.1,
  },

  ConEventInfo: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  ConEventInfo1: {
    gap: 10,
    alignItems: 'flex-start',
  },

  ConEventInfo2: {
    gap: 10,
    alignItems: 'flex-start',
  },
});

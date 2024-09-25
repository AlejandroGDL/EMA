import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

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

const EventCard = () => {
  const [Eventos, setEventos] = React.useState([]);

  const getEvents = async () => {
    try {
      const Eventos = await Axiosconfig.get('api/events');
      setEventos(Eventos.data);
    } catch (error) {
      console.error('Error during get-events:', {
        response: error,
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

  return Eventos.map((event, id) => (
    <View
      style={styles.ConEventCard}
      key={id}
    >
      {event.IsActive ? (
        <View style={styles.ConEventCardWarning}>
          <MyText color={Theme.colors.green}>
            ¡Evento actualmente en curso!
          </MyText>
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
            uri:
              'https://mz15q3zq-3000.usw3.devtunnels.ms//uploads/' +
              event.Image,
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
      {event.IsActive ? null : (
        <>
          <Separator />
          <View>
            <MyButton
              TextProps={{
                color: Theme.colors.white,
              }}
            >
              ¡Estaré allí, Notifícame!
            </MyButton>
          </View>
        </>
      )}
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

  ConEventCardWarning: {
    borderWidth: 1,
    borderColor: Theme.colors.green,
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

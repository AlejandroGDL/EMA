import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

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

const AdminEventCard = () => {
  const nav = useNavigation();
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
    //event.DateandHour = date[0];
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
        event.NewDate = dateArray[2] + ' de Enero de ' + dateArray[0];
        break;
      case '02':
        event.NewDate = dateArray[2] + ' de Febrero de ' + dateArray[0];
        break;
      case '03':
        event.NewDate = dateArray[2] + ' de Marzo de ' + dateArray[0];
        break;
      case '04':
        event.NewDate = dateArray[2] + ' de Abril de ' + dateArray[0];
        break;
      case '05':
        event.NewDate = dateArray[2] + ' de Mayo de ' + dateArray[0];
        break;
      case '06':
        event.NewDate = dateArray[2] + ' de Junio de ' + dateArray[0];
        break;
      case '07':
        event.NewDate = dateArray[2] + ' de Julio de ' + dateArray[0];
        break;
      case '08':
        event.NewDate = dateArray[2] + ' de Agosto de ' + dateArray[0];
        break;
      case '09':
        event.NewDate = dateArray[2] + ' de Septiembre de ' + dateArray[0];
        break;
      case '10':
        event.NewDate = dateArray[2] + ' de Octubre de ' + dateArray[0];
        break;
      case '11':
        event.NewDate = dateArray[2] + ' de Noviembre de ' + dateArray[0];
        break;
      case '12':
        event.NewDate = dateArray[2] + ' de Diciembre de ' + dateArray[0];
        break;
    }

    //Si la duración es menor a 60 minutos se muestra en minutos si no en horas
    if (event.Duration < 60) {
      event.Duration = event.Duration;
      event.DurationString = event.Duration + ' Minutos';
    } else {
      event.DurationString = event.Duration / 60 + ' Horas';
      event.Duration = event.Duration / 60;
    }
  });

  // FUnción para eliminar un evento
  const DeleteEvent = async (event) => {
    try {
      const response = await Axiosconfig.delete('api/event/' + event._id);
      console.log(response);
      getEvents();
    } catch (error) {
      console.error('Error during delete-event:', {
        response: error,
      });
    }
  };

  //Función para editar un evento
  const EditEvent = (event) => {
    nav.navigate('EditForm', { event });
  };

  return Eventos.map((event, id) => (
    <View
      style={styles.ConEventCard}
      key={id}
    >
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
            uri: 'https://emabackend.onrender.com//uploads/' + event.Image,
          }}
          style={styles.EventImage}
        />
      </View>
      <View style={styles.ConEventInfo}>
        <View style={styles.ConEventInfo1}>
          <MyText icon={Date}> {event.NewDate}</MyText>
          <MyText icon={Clock}> {event.Hour}</MyText>
        </View>
        <View style={styles.ConEventInfo2}>
          <MyText icon={Duration}> {event.DurationString}</MyText>
          <MyText icon={Place}> {event.Place}</MyText>
        </View>
      </View>
      <Separator />
      <View style={styles.ConAdminEventCardButtons}>
        <MyButton
          Function={() => EditEvent(event)}
          TextProps={{
            color: Theme.colors.white,
          }}
        >
          Editar
        </MyButton>
        <MyButton
          Function={() => DeleteEvent(event)}
          TextProps={{
            color: Theme.colors.white,
          }}
        >
          Eliminar
        </MyButton>
      </View>
    </View>
  ));
};

export default AdminEventCard;

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
  ConAdminEventCardButtons: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

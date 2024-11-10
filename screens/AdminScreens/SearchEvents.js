import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

//DatePicker and ImagePicker
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

//Components
import MyButton from '../../src/components/MyButton';
import MyText from '../../src/components/MyText';

//Theme
import Theme from '../../src/styles/Theme';

//Axios
import Axiosconfig from '../../src/config/Axiosconfig';

//Toast
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import EventCardComponent from '../../src/components/EventCardComponent';
import { StatusBar } from 'expo-status-bar';

const SearchEvents = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [date, setDate] = React.useState(dayjs().toDate());
  const [events, setEvents] = React.useState([]);
  const nav = useNavigation();

  const getEvents = async () => {
    try {
      const response = await Axiosconfig.post('api/filterevents', {
        date: dayjs(date).format('YYYY-MM-DD'),
      });
      setEvents(response.data);
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Error al cargar los eventos',
      });
    }
  };

  events.map((event) => {
    const date = event.DateandHour.split('T');
    const hour = date[1].split(':');
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

  React.useEffect(() => {
    getEvents();
  }, []);

  const SeeAttendance = (event) => {
    nav.navigate('SeeAttendance', { event });
  };

  return (
    <View style={styles.ConSearch}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.primary}
      />
      <View
        style={[
          styles.ConSearchConDatePicker,

          { display: isVisible ? 'flex' : 'none', zIndex: 1 },
        ]}
      >
        <DateTimePicker
          mode='single'
          date={date}
          onChange={(params) => setDate(params.date)}
          locale={'mx'}
          selectedItemColor={Theme.colors.primary}
          selectedRangeBackgroundColor={Theme.colors.primary}
        />
        <MyButton
          Function={() => {
            setIsVisible(false);
            getEvents();
          }}
          TextProps={{ color: Theme.colors.white }}
        >
          Seleccionar
        </MyButton>
      </View>

      {/* Date and Hour Selected */}
      <View style={styles.ConSearchDateandHour}>
        <View style={styles.ConSearchButtons}>
          <MyButton
            Function={() => {
              if (isVisible) {
                setIsVisible(false);
              } else {
                setIsVisible(true);
              }
            }}
            TextProps={{ color: Theme.colors.white, bold: true }}
          >
            Seleccionar Fecha y Hora
          </MyButton>
        </View>

        <View>
          <MyText>{dayjs(date).format('DD/MM/YYYY')}</MyText>
        </View>
      </View>

      <ScrollView>
        {events.map((event) => (
          <EventCardComponent
            key={event._id}
            event={event}
          >
            <MyButton
              Function={() => {
                SeeAttendance(event);
              }}
              TextProps={{ color: Theme.colors.white }}
            >
              Observar Asistencias
            </MyButton>
          </EventCardComponent>
        ))}
      </ScrollView>
      <Toast />
    </View>
  );
};

export default SearchEvents;

const styles = StyleSheet.create({
  ConSearch: {
    backgroundColor: Theme.colors.primary,
    padding: 10,
    flex: 1,
  },
  ConSearchDateandHour: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: Theme.radius.medium,
    backgroundColor: Theme.colors.white,
  },
  ConSearchButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ConSearchConDatePicker: {
    width: '100%',
    backgroundColor: Theme.colors.white,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
});

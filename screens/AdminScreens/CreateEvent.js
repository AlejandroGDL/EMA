import { StyleSheet, View, TextInput, Image } from 'react-native';
import React from 'react';

//Components
import MyText from '../../src/components/MyText';
import MyButton from '../../src/components/MyButton';
import Separator from '../../src/components/Separator';

//DatePicker and ImagePicker
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

import * as ImagePicker from 'expo-image-picker';

import Theme from '../../src/styles/Theme';

//Axios
import Axiosconfig from '../../src/config/Axiosconfig';
import Toast from 'react-native-toast-message';

import { StatusBar } from 'expo-status-bar';

const CreateEvent = () => {
  const [date, setDate] = React.useState(dayjs().toDate());
  const [isVisible, setIsVisible] = React.useState(false);
  const [image, setImage] = React.useState(null);

  //Inputs
  const [name, setName] = React.useState('');
  const [place, setPlace] = React.useState('');
  const [duration, setDuration] = React.useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const CreateEvent = async () => {
    try {
      const formData = new FormData();
      formData.append('Title', name);
      const dateInCDMX = dayjs(date)
        .tz('America/Mexico_City', true)
        .format('YYYY-MM-DDTHH:mm:ssZ');
      formData.append('DateandHour', dateInCDMX);
      formData.append('Duration', duration * 60);
      formData.append('Place', place);
      if (image) {
        formData.append('Image', {
          uri: image,
          name: 'event_image.jpg',
          type: 'image/jpeg',
        });
      }
      const response = await Axiosconfig.post('api/event', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        Toast.show({ type: 'success', text1: response.data });
        setName('');
        setPlace('');
        setDuration('');
        setDate(dayjs().toDate());
        setImage(null);
      }
      Toast.show({ type: 'error', text1: response.data });
    } catch (error) {
      Toast.show({ type: 'error', text1: error.response.data });
    }
  };

  return (
    <View style={styles.ConCreateEvent}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.primary}
      />
      <View style={styles.ConCreateEventForm}>
        {/* Event Name Input */}
        <View style={styles.ConCreateEventFormInputsCon}>
          <MyText
            bold
            color={Theme.colors.white}
          >
            Nombre Evento:
          </MyText>
          <TextInput
            style={styles.CreateInput}
            placeholder='eg. Evento de Tecnologías Emergentes'
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        {/* Event Place Input */}
        <View style={styles.ConCreateEventFormInputsCon}>
          <MyText
            bold
            color={Theme.colors.white}
          >
            Lugar Evento:
          </MyText>
          <TextInput
            style={styles.CreateInput}
            placeholder='eg. Auditorio'
            value={place}
            onChangeText={(text) => setPlace(text)}
          />
        </View>

        {/* Event Duration Input */}
        <View style={styles.ConCreateEventFormInputsCon}>
          <MyText
            bold
            color={Theme.colors.white}
          >
            Duración Evento:
          </MyText>
          <TextInput
            style={styles.CreateInput}
            placeholder='eg. 2 horas'
            keyboardType='numeric'
            value={duration}
            onChangeText={(text) => setDuration(text)}
          />
        </View>

        {/* Event Date and Hour Input */}
        <View style={styles.ConCreateEventFormDateCon}>
          <MyText bold>Fecha Evento:</MyText>
          <Separator />
          {/* Modal Date Picker */}
          <View
            style={[
              styles.ConCreateEventFormInputsConDatePicker,

              { display: isVisible ? 'flex' : 'none', zIndex: 1 },
            ]}
          >
            <DateTimePicker
              mode='single'
              date={date}
              timePicker={true}
              onChange={(params) => setDate(params.date)}
              locale={'mx'}
              selectedItemColor={Theme.colors.primary}
              selectedRangeBackgroundColor={Theme.colors.primary}
            />
            <MyButton
              Function={() => {
                setIsVisible(false);
              }}
              TextProps={{ color: Theme.colors.white }}
            >
              Seleccionar
            </MyButton>
          </View>

          {/* Date and Hour Selected */}
          <View style={styles.ConCreateEventFormDateCon1}>
            <View style={styles.ConCreateEventFormDateButton}>
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
              <MyText>{dayjs(date).format('HH:mm')}</MyText>
            </View>
          </View>
        </View>

        {/* Event Image Input */}
        <View style={styles.ConCreateEventFormImageCon}>
          <MyText bold>Imagen Evento</MyText>
          <Separator />
          <View style={styles.ConCreateEventFormImageCon1}>
            <MyButton
              Function={pickImage}
              TextProps={{
                bold: true,
                color: Theme.colors.white,
              }}
            >
              {image ? 'Cambiar Imagen' : 'Seleccionar Imagen'}
            </MyButton>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 90, height: 90, borderRadius: 100 }}
              />
            )}
          </View>
        </View>
      </View>

      <View style={styles.ConCreateButtonCon}>
        {/* Event Create Button */}
        <MyButton
          Function={CreateEvent}
          TextProps={{
            h3: true,
            bold: true,
            color: Theme.colors.white,
          }}
        >
          Crear Evento
        </MyButton>
      </View>

      <Toast />
    </View>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  ConCreateEvent: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'space-between',
  },
  ConCreateEventForm: {
    display: 'flex',
    gap: 15,
    padding: 20,
  },
  ConCreateButtonCon: {
    padding: 20,
  },
  CreateInput: {
    backgroundColor: Theme.colors.white,
    padding: 10,
    borderRadius: Theme.radius.small,
    width: '100%',
  },
  ConCreateEventFormInputsCon: {
    gap: 5,
    alignItems: 'flex-start',
  },
  ConCreateEventFormInputsConDatePicker: {
    width: '100%',
    backgroundColor: Theme.colors.white,
    borderRadius: 5,
    padding: 5,
  },
  ConCreateEventFormDateButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ConCreateEventFormDateCon: {
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.radius.medium,
    padding: 10,
  },
  ConCreateEventFormDateCon1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  ConCreateEventFormImageCon: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    padding: 10,

    backgroundColor: Theme.colors.white,
    borderRadius: Theme.radius.medium,
  },
  ConCreateEventFormImageCon1: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
});

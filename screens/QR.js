import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';

//Components
import MyText from '../src/components/MyText';

import { useAuth } from '../hooks/AuthContext';
import { useNavigation, useRoute } from '@react-navigation/native';

//Theme
import Theme from '../src/styles/Theme';

//Icons
import Date from '../src/icons/Date';
import Clock from '../src/icons/Clock';
import Duration from '../src/icons/Duration';
import Place from '../src/icons/Place';

import Separator from '../src/components/Separator';

//API URL
import API_URL from '../src/config/Url';

const QR = () => {
  const { user } = useAuth();

  const route = useRoute();
  const { event } = route.params;

  const qrValue = JSON.stringify({
    EventID: event._id,
    StudentID: user.StudentID,
  });

  return (
    <View style={styles.ConQR}>
      <View>
        <View style={styles.ConEventCard}>
          {event.IsActive ? (
            <View style={styles.ConEventCardIsActive}>
              <MyText color={Theme.colors.green}>
                ¡Evento actualmente en curso!
              </MyText>
            </View>
          ) : null}
          {event.IsEnd ? (
            <View style={styles.ConEventCardIsEnd}>
              <MyText color={Theme.colors.red}>
                ¡Este evento a finalizado!
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
                uri: API_URL + '/uploads/' + event.Image,
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

          <Separator />
          <MyText
            h3
            bold
          >
            {user.StudentName} {user.StudentLastName}
          </MyText>
        </View>
      </View>

      <MyText
        h3
        extraprops={{ textAlign: 'center' }}
      >
        ¡Dile a tu profesor que pase esté código QR para registrar tu
        Asistencia!
      </MyText>
      <QRCode
        value={qrValue}
        size={300}
        color='black'
        backgroundColor='white'
      />
    </View>
  );
};

export default QR;

const styles = StyleSheet.create({
  ConQR: {
    flex: 1,
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',

    gap: 30,
  },

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

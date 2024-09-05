import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import Theme from '../styles/Theme';

import MyText from './MyText';
import MyButton from './MyButton';
import Separator from './Separator';

import User from '../UserData';

//Iconos
import Date from '../icons/Date';
import Clock from '../icons/Clock';
import Duration from '../icons/Duration';
import Place from '../icons/Place';

const CertificateCard = () => {
  return User.assitedevents.map((event, id) => (
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
          source={{ uri: event.Image }}
          style={styles.EventImage}
        />
      </View>
      <View style={styles.ConEventInfo}>
        <View style={styles.ConEventInfo1}>
          <MyText icon={Date}> {event.Date}</MyText>
          <MyText icon={Clock}> {event.Hour}</MyText>
        </View>
        <View style={styles.ConEventInfo2}>
          <MyText icon={Duration}> {event.Duration}</MyText>
          <MyText icon={Place}> {event.Place}</MyText>
        </View>
      </View>
      <Separator />
      <View>
        <MyButton
          TextProps={{
            color: Theme.colors.white,
          }}
        >
          Descargar Certificado
        </MyButton>
      </View>
    </View>
  ));
};

export default CertificateCard;

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
    width: 70,
    height: 70,
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

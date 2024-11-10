import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

import MyText from './MyText';
import Separator from './Separator';

import Date from '../icons/Date';
import Clock from '../icons/Clock';
import Duration from '../icons/Duration';
import Place from '../icons/Place';

import Theme from '../styles/Theme';

import config from '../config/Url';

const EventCardComponent = (props) => {
  const event = props.event;

  return (
    <View
      style={styles.ConEventCard}
      key={event._id}
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
          <MyText icon={Date}> {event.NewDate}</MyText>
          <MyText icon={Clock}> {event.Hour}</MyText>
        </View>
        <View style={styles.ConEventInfo2}>
          <MyText icon={Duration}> {event.DurationString}</MyText>
          <MyText icon={Place}> {event.Place}</MyText>
        </View>
      </View>
      {props.children ? <Separator /> : null}
      <View>{props.children}</View>
    </View>
  );
};

export default EventCardComponent;

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

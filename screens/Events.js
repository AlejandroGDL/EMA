import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

//Estilos y temas
import Theme from '../src/styles/Theme';

//Componentes personalizados
import MyText from '../src/components/MyText';
import EventCard from '../src/components/EventCard';
import axios from 'axios';

export default function Events() {
  return (
    <View style={styles.EventContainer}>
      <MyText
        h1
        bold
        color={Theme.colors.white}
      >
        Eventos Disponibles
      </MyText>

      <ScrollView style={styles.EventScroll}>
        <EventCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EventContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
  },
  EventScroll: {
    marginTop: 50,
    flex: 1,
    width: '90%',
  },
});

import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

//Components
import MyText from '../../src/components/MyText';
import AdminEventCard from '../../src/components/AdminEventCard';

import Theme from '../../src/styles/Theme';

const EditEvent = () => {
  return (
    <View style={styles.AdminEventCon}>
      <MyText
        h1
        bold
        color={Theme.colors.white}
      >
        Eventos Disponibles
      </MyText>
      <ScrollView style={styles.AdminEventScroll}>
        <AdminEventCard />
      </ScrollView>
    </View>
  );
};

export default EditEvent;

const styles = StyleSheet.create({
  AdminEventCon: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
  },
  AdminEventScroll: {
    marginTop: 50,
    flex: 1,
    width: '90%',
  },
});

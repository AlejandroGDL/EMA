import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

//Estilos y temas
import Theme from '../src/styles/Theme';

//Componentes personalizados
import MyText from '../src/components/MyText';
import CertificateCard from '../src/components/CertificatedCard';

import { StatusBar } from 'expo-status-bar';

const Certificates = () => {
  return (
    <View style={styles.ConCerticates}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.primary}
      />
      <MyText
        h1
        bold
        color={Theme.colors.white}
      >
        Eventos Asistidos
      </MyText>

      <ScrollView style={styles.CertificatesScroll}>
        <CertificateCard />
      </ScrollView>
    </View>
  );
};

export default Certificates;

const styles = StyleSheet.create({
  ConCerticates: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
  },
  CertificatesScroll: {
    marginTop: 50,
    flex: 1,
    width: '90%',
  },
});

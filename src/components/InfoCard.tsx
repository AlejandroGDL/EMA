import { StyleSheet, View } from 'react-native';
import React from 'react';

//Componentes personalizados
import MyText from './MyText';

//Estilos
import Theme from '../styles/Theme';

const InfoCard = ({ Title, Info, Icon }) => {
  return (
    <View style={styles.ConInfoCard}>
      <View style={styles.ConInfoCardIcon}>
        <Icon />
      </View>
      <View style={styles.ConInfoCardDesc}>
        <MyText
          h4
          medium
        >
          {Title}
        </MyText>
        <MyText color={Theme.colors.secundary_black}>{Info}</MyText>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  ConInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  ConInfoCardIcon: {
    backgroundColor: Theme.colors.borders,
    padding: 10,
    borderRadius: Theme.radius.small,
    marginRight: 10,
  },

  ConInfoCardDesc: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

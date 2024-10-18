import { StyleSheet, View } from 'react-native';
import React from 'react';

//Componentes personalizados
import MyText from '../src/components/MyText';
import MyButton from '../src/components/MyButton';

//Tema
import Theme from '../src/styles/Theme';

//Imagenes
import TecLogo from '../src/icons/TecLogo';
import GobLogo from '../src/icons/GobLogo';

const ForgotPassword = () => {
  return (
    <View style={styles.ConForgot}>
      <MyText
        h1
        bold
        color={Theme.colors.primary}
      >
        Olvidé mi contraseña
      </MyText>
      <View style={styles.ConForgotConText}>
        <MyText
          h1
          color={Theme.colors.primary}
          extraprops={{ textAlign: 'center' }}
        >
          Para restablecer tu contraseña debes de comunicarte con un
          administrador o docente.
        </MyText>
      </View>
      <View style={styles.ConForgotLogo}>
        <TecLogo />
        <GobLogo />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  ConForgot: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',

    backgroundColor: Theme.colors.white,
  },
  ConForgotConText: {
    flex: 1,
    width: '90%',
    borderColor: Theme.colors.borders,
    borderWidth: 1,
    borderRadius: Theme.radius.medium,
    padding: 20,

    marginTop: 50,
    marginBottom: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
  ConForgotLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,

    borderRadius: Theme.radius.medium,
    backgroundColor: Theme.colors.white,
  },
});

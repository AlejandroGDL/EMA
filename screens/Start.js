import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';

// Componentes personalizados
import MyButton from '../src/components/MyButton';
import MyText from '../src/components/MyText';

//Tema
import Theme from '../src/styles/Theme';

//Imagenes
import TecLogo from '../src/icons/TecLogo';
import GobLogo from '../src/icons/GobLogo';
import WelcomeImage from '../src/icons/WelcomeImage';

const Start = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.ConInicio}>
      <View>
        <WelcomeImage />
      </View>
      <View>
        <MyText
          h1
          medium
          color={Theme.colors.primary}
        >
          ¡Fácil de usar!
        </MyText>
        <MyText
          h3
          medium
          color={Theme.colors.primary}
        >
          Confirma tu participación en eventos con solo tú identificación
        </MyText>
      </View>
      <View>
        <MyButton
          Function={() => {
            navigation.navigate('Login');
          }}
          TextProps={{
            h3: true,
            regular: true,
            color: Theme.colors.white,
          }}
        >
          Comenzar
        </MyButton>
      </View>
      <View style={styles.ConLoginLogos}>
        <TecLogo />
        <GobLogo />
      </View>
    </SafeAreaView>
  );
};

export default Start;

const styles = StyleSheet.create({
  ConInicio: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,

    backgroundColor: Theme.colors.white,

    marginTop: 40,
  },

  ConLoginLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import React from 'react';

//Componentes personalizados
import MyButton from '../src/components/MyButton';
import MyText from '../src/components/MyText';

//Tema
import Theme from '../src/styles/Theme';

//Imagenes
import TecLogo from '../src/icons/TecLogo';
import GobLogo from '../src/icons/GobLogo';

import { useAuth } from '../hooks/AuthContext';
import Toast from 'react-native-toast-message';

import { StatusBar } from 'expo-status-bar';

const Login = ({ navigation }) => {
  const [StudentID, setStudentID] = React.useState('');
  const [StudentPassword, setStudentPassword] = React.useState('');

  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn({ StudentID, StudentPassword });
  };

  return (
    <View style={styles.ConLogin}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.white}
      />
      <View>
        <MyText
          h1
          bold
          color={Theme.colors.primary}
        >
          Iniciar Sesión
        </MyText>
      </View>
      <View style={styles.ConLoginInputs}>
        <View>
          <TecLogo />
        </View>
        <View>
          <View style={styles.ConLoginInput1}>
            <MyText>Identificador estudiantil:</MyText>
            <TextInput
              style={styles.LoginInput}
              placeholder='eg. 1332145671'
              value={StudentID}
              onChangeText={(Number) => setStudentID(Number)}
            />
          </View>
          <View style={styles.ConLoginInput2}>
            <MyText>Contraseña:</MyText>
            <TextInput
              style={styles.LoginInput}
              placeholder='********'
              secureTextEntry={true}
              value={StudentPassword}
              onChangeText={(text) => setStudentPassword(text)}
            />
          </View>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <MyText color={Theme.colors.secundary_black}>
              Olvide mi contraseña
            </MyText>
          </Pressable>
        </View>
        <View>
          <MyButton
            Function={handleSignIn}
            TextProps={{
              h3: true,
              regular: true,
              color: Theme.colors.white,
            }}
          >
            Acceder
          </MyButton>
        </View>
      </View>
      <View style={styles.ConLoginLogos}>
        <TecLogo />
        <GobLogo />
      </View>
      <Toast />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  ConLogin: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.white,
  },
  ConLoginInputs: {
    width: '90%',
    borderColor: Theme.colors.borders,
    borderWidth: 1,
    borderRadius: Theme.radius.medium,
    gap: 40,
    padding: 20,
  },

  LoginInput: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.secundary_black,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },

  ConLoginInput1: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  ConLoginInput2: {
    alignItems: 'flex-start',
  },

  ConLoginLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

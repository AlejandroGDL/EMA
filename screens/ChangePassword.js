import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';

//Components
import MyText from '../src/components/MyText';
import MyButton from '../src/components/MyButton';

import Toast from 'react-native-toast-message';

import Theme from '../src/styles/Theme';

import { useAuth } from '../hooks/AuthContext';

import Axiosconfig from '../src/config/Axiosconfig';

import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
  const [ActualStudentPassword, setActualStudentPassword] = useState('');
  const [NewStudentPassword, setNewStudentPassword] = useState('');
  const [ConfirmStudentPassword, setConfirmStudentPassword] = useState('');

  const nav = useNavigation();
  const { user } = useAuth();

  const FunChangePassword = async () => {
    try {
      if (NewStudentPassword != ConfirmStudentPassword) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Las contraseñas no coinciden',
        });
        return;
      }
      const response = await Axiosconfig.post('api/user/changePassword', {
        StudentID: user.StudentID,
        StudentPassword: ActualStudentPassword,
        StudentNewPassword: NewStudentPassword,
      });
      if (response.data.message) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: response.data.message,
        });
      } else {
        Toast.show({
          type: 'success',
          text1: 'Cambio de contraseña',
          text2: 'Contraseña actualizada correctamente',
        });
        nav.navigate('Menu');
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Error al cambiar la contraseña',
      });
    }
  };
  return (
    <View style={styles.ConChangePassword}>
      <MyText
        h1
        bold
        color={Theme.colors.white}
      >
        Cambio de contraseña
      </MyText>

      <View style={styles.ConChangePasswordCon}>
        {user.IsPasswordChanged ? null : (
          <View style={styles.ConChangePasswordWarning}>
            <MyText color={Theme.colors.red}>
              Sigues con la contraseña por defecto, o fue restablecida hace
              poco, cambiala por seguridad.
            </MyText>
          </View>
        )}

        <View style={styles.ConChangePasswordConInputs}>
          <View style={styles.ConChangePasswordConInputsCon}>
            {/* Contraseña actual */}
            <MyText
              bold
              color={Theme.colors.white}
            >
              Contraseña actual:
            </MyText>
            <TextInput
              style={styles.Input}
              placeholder='********'
              secureTextEntry={true}
              value={ActualStudentPassword}
              onChangeText={(text) => setActualStudentPassword(text)}
            />
          </View>
          <View style={styles.ConChangePasswordConInputsCon}>
            <MyText
              bold
              color={Theme.colors.white}
            >
              Contraseña nueva:
            </MyText>
            {/* Contraseña Nueva */}
            <TextInput
              style={styles.Input}
              placeholder='********'
              secureTextEntry={true}
              value={NewStudentPassword}
              onChangeText={(text) => setNewStudentPassword(text)}
            />
          </View>
          <View style={styles.ConChangePasswordConInputsCon}>
            <MyText
              bold
              color={Theme.colors.white}
            >
              Confirmar Contraseña:
            </MyText>
            {/* Confirmación Contraseña */}
            <TextInput
              style={styles.Input}
              placeholder='********'
              secureTextEntry={true}
              value={ConfirmStudentPassword}
              onChangeText={(text) => setConfirmStudentPassword(text)}
            />
          </View>
        </View>

        <View style={styles.ConChangePasswordConButton}>
          <MyButton
            TextProps={{ h2: true, color: Theme.colors.white, bold: true }}
            Function={() => FunChangePassword()}
          >
            Cambiar Contraseña
          </MyButton>
        </View>
      </View>
      <Toast />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  ConChangePassword: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  ConChangePasswordCon: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ConChangePasswordWarning: {
    borderWidth: 1,
    borderColor: Theme.colors.red,
    padding: 10,
    borderRadius: Theme.radius.medium,
    margin: 20,
  },
  ConChangePasswordConInputs: {
    display: 'flex',
    gap: 15,
    padding: 20,
  },
  ConChangePasswordConInputsCon: {
    gap: 5,
    alignItems: 'flex-start',
  },
  Input: {
    backgroundColor: Theme.colors.white,
    padding: 10,
    borderRadius: Theme.radius.small,
    width: '100%',
  },
  ConChangePasswordConButton: {
    padding: 20,
  },
});

import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';

//Components
import MyButton from '../../src/components/MyButton';
import MyText from '../../src/components/MyText';

//Axios config
import Axiosconfig from '../../src/config/Axiosconfig';

import Theme from '../../src/styles/Theme';

import Toast from 'react-native-toast-message';

import { StatusBar } from 'expo-status-bar';

const ChangePasswordbyAdmin = () => {
  const [StudentID, setStudentID] = useState('');
  const [StudentPassword, setStudentPassword] = useState('');

  const ChangePassword = async () => {
    try {
      const response = await Axiosconfig.post(
        'api/user/changePasswordbyAdmin',
        {
          StudentID: StudentID,
          StudentNewPassword: StudentPassword,
        }
      );

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
    <View style={styles.ConChangePasswordbyAdmin}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.primary}
      />
      <MyText
        h1
        bold
        color={Theme.colors.white}
      >
        Restablecer Contraseña
      </MyText>
      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <MyText color={Theme.colors.white}>
          En este apartado podrás restablecer la contraseña de cualquier otro
          usuario, ¡Mucho Cuidado!
        </MyText>
      </View>

      <View style={styles.ConChangePasswordbyAdminConInputs}>
        <View>
          <View style={styles.ConChangePasswordbyAdminConInputsCon}>
            <MyText
              bold
              color={Theme.colors.white}
            >
              Identificador del alumno:
            </MyText>
            <TextInput
              style={styles.ChangePasswordbyAdminInput}
              placeholder='eg. 201050205'
              value={StudentID}
              onChangeText={(text) => setStudentID(text)}
            />
          </View>
          <View style={styles.ConChangePasswordbyAdminConInputsCon}>
            <MyText
              bold
              color={Theme.colors.white}
            >
              Nueva contraseña:
            </MyText>
            <TextInput
              style={styles.ChangePasswordbyAdminInput}
              placeholder='******'
              value={StudentPassword}
              onChangeText={(text) => setStudentPassword(text)}
            />
          </View>
        </View>
        <View>
          <MyButton
            Function={() => ChangePassword()}
            TextProps={{ color: Theme.colors.white, h2: true, bold: true }}
          >
            Cambiar Contraseña
          </MyButton>
        </View>
      </View>
      <Toast />
    </View>
  );
};

export default ChangePasswordbyAdmin;

const styles = StyleSheet.create({
  ConChangePasswordbyAdmin: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
  },
  ConChangePasswordbyAdminConInputs: {
    gap: 15,
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  ChangePasswordbyAdminInput: {
    backgroundColor: Theme.colors.white,
    padding: 10,
    borderRadius: Theme.radius.small,
    width: '100%',
  },
  ConChangePasswordbyAdminConInputsCon: {
    gap: 5,
    alignItems: 'flex-start',

    marginBottom: 20,
  },
});

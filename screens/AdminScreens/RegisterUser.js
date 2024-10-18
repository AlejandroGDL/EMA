import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';

//Components
import MyText from '../../src/components/MyText';
import MyButton from '../../src/components/MyButton';

//Axios config
import Axiosconfig from '../../src/config/Axiosconfig';

//Theme
import Theme from '../../src/styles/Theme';

//Toast
import Toast from 'react-native-toast-message';

const RegisterUser = () => {
  const [StudentID, setStudentID] = useState('');

  const RegisterAttendace = async () => {
    try {
      const response = await Axiosconfig.post('api/registerevent/${StudentID}');
      if (response.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Asistencia registrada',
          text2: 'La asistencia fue registrada correctamente',
        });
      }
      if (response.status === 400) {
        Toast.show({
          type: 'error',
          text1: 'Error al registrar la asistencia',
          text2: 'Hubo un error al registrar la asistencia',
        });
      }
    } catch (error) {
      if (error.response.status === 404) {
        Toast.show({
          type: 'error',
          text1: 'Error al registrar la asistencia',
          text2: 'El número de control no existe',
        });
      }
    }
  };

  return (
    <View style={styles.ConRegisterUser}>
      <MyText
        h1
        bold
        color={Theme.colors.white}
      >
        Registrar Asistencias
      </MyText>
      <View style={styles.ConRegisterUserConInputs}>
        <View>
          <TextInput
            style={styles.ConRegisterUserInput}
            placeholder='Número de control'
            value={StudentID}
            onChangeText={(text) => setStudentID(text)}
          />
        </View>
        <View></View>
        <View>
          <MyButton Function={RegisterAttendace}>Registrar</MyButton>
        </View>
      </View>
    </View>
  );
};

export default RegisterUser;

const styles = StyleSheet.create({
  ConRegisterUser: {
    flex: 1,
    backgroundColor: Theme.colors.primary,

    alignItems: 'center',
  },
  ConRegisterUserConInputs: {
    width: '80%',
  },
  ConRegisterUserInput: {
    backgroundColor: Theme.colors.white,
    padding: 10,
    borderRadius: Theme.radius.small,
    width: '100%',
  },
});

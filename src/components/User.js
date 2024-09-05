import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

//Componente personalizado
import MyText from './MyText';

import { useAuth } from '../../hooks/AuthContext';

const UserComponent = () => {
  const { user } = useAuth();

  return (
    <View style={styles.ConUserComponent}>
      <Image
        source={{ uri: user.StudentImage }}
        style={styles.UserComponentImage}
      />
      <MyText
        h2
        bold
      >
        {user.StudentName} {user.StudentLastName}
      </MyText>
    </View>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  ConUserComponent: {
    alignItems: 'center',
    marginVertical: 20,
  },

  UserComponentImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});

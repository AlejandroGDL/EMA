import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

//Componente personalizado
import MyText from './MyText';

import { useAuth } from '../../hooks/AuthContext';

import Theme from '../styles/Theme';

const UserComponent = () => {
  const { user } = useAuth();

  return (
    <View style={styles.ConUserComponent}>
      <View style={styles.Avatar}>
        <MyText
          h1
          bold
          color={Theme.colors.white}
        >
          {user.StudentName.split(' ')[0]}
        </MyText>
      </View>
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

// Color Avatar random
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const styles = StyleSheet.create({
  ConUserComponent: {
    alignItems: 'center',
    marginVertical: 20,
    gap: 10,
  },

  UserComponentImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  Avatar: {
    backgroundColor: getRandomColor(),
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

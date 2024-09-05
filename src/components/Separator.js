import { StyleSheet, View } from 'react-native';
import React from 'react';

import Theme from '../styles/Theme';

const Separator = () => {
  return <View style={styles.Separator}></View>;
};

export default Separator;

const styles = StyleSheet.create({
  Separator: {
    width: '100%',
    height: 1,
    backgroundColor: Theme.colors.borders,
  },
});

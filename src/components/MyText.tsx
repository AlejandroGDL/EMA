import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Theme from '../styles/Theme';

type TextProps = {
  children: string[] | string;
  color?: string;
  icon?: any;

  h1?: any;
  h2?: any;
  h3?: any;
  h4?: any;
  p?: any;

  bold?: any;
  medium?: any;
  regular?: any;
  extraprops?: any;
};

// Styles por defecto Text
const styles = StyleSheet.create({
  ConMyText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Estilos por defecto MyText
  MyTextStyle: {
    color: Theme.colors.black,
    fontSize: Theme.fonts.Size.p,
    fontWeight: Theme.fonts.Weight.regular,
  },

  h1: {
    fontSize: Theme.fonts.Size.h1,
  },
  h2: {
    fontSize: Theme.fonts.Size.h2,
  },
  h3: {
    fontSize: Theme.fonts.Size.h3,
  },
  h4: {
    fontSize: Theme.fonts.Size.h4,
  },
  p: {
    fontSize: Theme.fonts.Size.p,
  },

  bold: {
    fontWeight: Theme.fonts.Weight.bold,
  },
  medium: {
    fontWeight: Theme.fonts.Weight.medium,
  },
  regular: {
    fontWeight: Theme.fonts.Weight.regular,
  },
});

const MyText = (props: TextProps) => {
  const TextStyles = [
    styles.MyTextStyle,
    props.h1 && styles.h1,
    props.h2 && styles.h2,
    props.h3 && styles.h3,
    props.h4 && styles.h4,
    props.p && styles.p,

    props.bold && styles.bold,
    props.medium && styles.medium,
    props.regular && styles.regular,
    props.color && { color: props.color },
    props.extraprops,
  ];

  return (
    <View style={styles.ConMyText}>
      {props.icon && (
        <View>
          <props.icon />
        </View>
      )}
      <Text style={TextStyles}>{props.children}</Text>
    </View>
  );
};

export default MyText;

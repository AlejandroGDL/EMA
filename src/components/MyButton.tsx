import { StyleSheet, Pressable, View } from 'react-native';
import React from 'react';
import Theme from '../styles/Theme';
import MyText from './MyText';

type ButtonProps = {
  children?: string;
  Icon?: any;
  IconProps?: {
    width?: number;
    height?: number;
    stroke?: number;
    strokeWidth?: number;
  };
  TextProps?: {
    h1?: any;
    h2?: any;
    h3?: any;
    h4?: any;
    p?: any;

    bold?: any;
    medium?: any;
    regular?: any;
    color?: string;
  };
  Function?: () => void;
  link?: string;
};

// Styles por defecto Button
const styles = StyleSheet.create({
  ConButton: {
    backgroundColor: Theme.colors.primary,
    padding: 15,
    borderRadius: Theme.radius.medium,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default function MyButton(props: ButtonProps) {
  return (
    <Pressable
      onPress={props.Function}
      style={({ pressed }) => [
        styles.ConButton,
        {
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      {/* Si Icon existe, renderiza el componente */}
      {props.Icon && (
        <View>
          <props.Icon
            width={props.IconProps.width}
            height={props.IconProps.height}
            stroke={props.IconProps.stroke}
            strokeWidth={props.IconProps.strokeWidth}
          />
        </View>
      )}

      <MyText {...props.TextProps}>{props.children}</MyText>
    </Pressable>
  );
}

import { StyleSheet, Modal } from 'react-native';
import React from 'react';

const MyModal = (props) => {
  return (
    <Modal
      animationType='slide'
      transparent
      visible={props.isOpen}
      statusBarTranslucent
      {...props.rest}
    >
      {props.children}
    </Modal>
  );
};

export default MyModal;

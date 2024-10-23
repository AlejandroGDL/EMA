import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Components
import MyText from '../../src/components/MyText';
import MyButton from '../../src/components/MyButton';

//Axios Config
import Axiosconfig from '../../src/config/Axiosconfig';

import Toast from 'react-native-toast-message';
import Theme from '../../src/styles/Theme';

import { StatusBar } from 'expo-status-bar';

const RegisterByQR = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [turnflash, setturnFlash] = useState(false);

  const [scanned, setScanned] = useState(false);
  const [cameraActive, setCameraActive] = useState(true);

  if (!permission) {
    return <View />;
  }

  //Solictar permiso de la cámara
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <MyText color={Theme.colors.white}>
          Se necesita permiso para acceder a la cámara
        </MyText>
        <MyButton
          Function={requestPermission}
          TextProps={{ color: Theme.colors.white }}
        >
          PERMITIR ACCESO A LA CÁMARA
        </MyButton>
      </View>
    );
  }

  const CameraTimeout = () => {
    Toast.show({
      type: 'info',
      text1: 'Subiendo...',
      visibilityTime: 1000,
    });
    //setCameraActive(true);
    setScanned(true);
    const timer = setTimeout(() => {
      setScanned(false);
      //setCameraActive(true);
    }, 2000);
    return () => clearTimeout(timer);
  };

  // Funcion para escanear el codigo QR
  function handleBarCodeScanned({ data }) {
    CameraTimeout();

    try {
      data = JSON.parse(data);
      const response = Axiosconfig.post('api/registereventbyqr', {
        EventID: data.EventID,
        StudentID: data.StudentID,
      });
      if (response.status === 200) {
        alert('Asistencia registrada');
        Toast.show({
          type: 'success',
          text1: 'Asistencia registrada',
        });
        setScanned(true);
        clearTimeout(timer);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error al registrar la asistencia',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error al registrar la asistencia',
      });
    }
  }

  // Encender flash
  function enableTorch() {
    setturnFlash((current) => (current === false ? true : false));
  }

  return (
    <View style={styles.CamCon}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.primary}
      />
      {cameraActive ? (
        <CameraView
          style={styles.camera}
          enableTorch={turnflash}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
        >
          <View style={styles.buttonContainer}>
            {/* Encender Flash */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => enableTorch()}
            >
              <Text style={styles.text}>Flash</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View>
          <MyText>Subiendo...</MyText>
        </View>
      )}
      <Toast />
    </View>
  );
};

export default RegisterByQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,

    backgroundColor: Theme.colors.primary,
  },
  camera: {
    flex: 1,
  },
  CamCon: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  qrFrame: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  qrFrameTopLeft: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    borderLeftWidth: 5,
    borderTopWidth: 5,
  },
  qrFrameTopRight: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    borderRightWidth: 5,
    borderTopWidth: 5,
  },
  qrFrameBottomLeft: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    borderLeftWidth: 5,
    borderBottomWidth: 5,
  },
  qrFrameBottomRight: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },
});

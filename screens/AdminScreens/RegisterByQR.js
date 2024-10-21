import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Components
import MyText from '../../src/components/MyText';

//Axios Config
import Axiosconfig from '../../src/config/Axiosconfig';

import Toast from 'react-native-toast-message';

const RegisterByQR = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [turnflash, setturnFlash] = useState(false);

  const [scanned, setScanned] = useState(false);
  const [cameraActive, setCameraActive] = useState(true);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Se necesita permiso para acceder a la cámara
        </Text>
        <Button
          onPress={requestPermission}
          title='Permitir acceso a la cámara'
        />
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
      console.log(response.data);
      if (response.status === 200) {
        alert('Asistencia registrada');
        Toast.show({
          type: 'success',
          text1: 'Asistencia registrada',
        });
        console.log(response.data);
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
    <View style={styles.container}>
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
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
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

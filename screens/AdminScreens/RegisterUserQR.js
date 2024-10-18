import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

//Components
import MyText from '../../src/components/MyText';
import MyButton from '../../src/components/MyButton';

const QRCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setQrData(data); // Aquí tienes el valor escaneado del QR
    alert(`Código QR escaneado: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permiso de cámara...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No tienes acceso a la cámara</Text>;
  }

  return (
    <View style={styles.ConQR}>
      <MyText h3>
        Escanea el código QR de un alumno, para registrarlo al evento
      </MyText>

      <BarCodeScanner
        style={styles.QRCam}
        onBarCodeScanned={
          scanned
            ? () => setTimeout(() => setScanned(false), 3000)
            : handleBarCodeScanned
        }
      />
      {scanned && (
        <MyButton Function={() => setScanned(false)}>
          Escanear de nuevo
        </MyButton>
      )}
      {qrData ? (
        <Text>Datos escaneados: {qrData}</Text>
      ) : (
        <Text>Aún no has escaneado ningún código QR</Text>
      )}
    </View>
  );
};

export default QRCodeScanner;

const styles = StyleSheet.create({
  ConQR: {
    flex: 1,
  },
  QRCam: {
    width: '100%',
    height: 200,
    margin: 0,
  },
});

import { WebView } from 'react-native-webview';
import { StyleSheet, View, Linking, Button, Platform } from 'react-native';
import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Theme from '../../src/styles/Theme';

//Componentes
import MyText from '../../src/components/MyText';

import config from '../../src/config/Url';

const ExcelScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { EventID } = route.params;

  const pdfUrl = config.API_URL + '/excel/excel_' + EventID + '.csv';

  //Función para abrir el PDF en el navegador
  const openInBrowser = () => {
    Linking.openURL(pdfUrl);
  };

  //Si es Android, se descarga el PDF y se cierra la pantalla
  if (Platform.OS === 'android') {
    useEffect(() => {
      setTimeout(() => {
        nav.goBack();
      }, 3000);
    });
  }

  //Si es iOS, se abre el PDF en el navegador y se cierra la pantalla
  if (Platform.OS === 'ios') {
    openInBrowser();
    useEffect(() => {
      setTimeout(() => {
        nav.goBack();
      }, 3000);
    });
  }

  return (
    <View style={styles.WebViewCon}>
      <MyText
        h1={true}
        color={Theme.colors.white}
        style={styles.PDFTexto}
      >
        {Platform.OS === 'android' ? 'Descargando...' : 'Abriendo...'}
      </MyText>
      {Platform.OS === 'android' && (
        <WebView
          style={styles.container}
          userAgent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
          source={{
            uri: config.API_URL + '/excel/excel_' + EventID + '.csv',
          }}
        />
      )}
      {Platform.OS === 'ios' && (
        <Button
          title='Abrir en el navegador'
          onPress={openInBrowser}
        />
      )}
    </View>
  );
};

export default ExcelScreen;

const styles = StyleSheet.create({
  WebViewCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Theme.colors.primary,
  },
  container: {
    display: 'none',
  },
  PDFTexto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

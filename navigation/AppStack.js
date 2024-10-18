import { StyleSheet, Pressable } from 'react-native';
import React from 'react';

import Theme from '../src/styles/Theme';

//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { useNavigation } from '@react-navigation/native';

//Screens
import Menu from '../screens/Menu';
import SettingsScreen from '../screens/Settings';
import EventsScreen from '../screens/Events';
import CertificatesScreen from '../screens/Certificates';
import QR from '../screens/QR';

//PDF View
import PDFWebView from '../src/components/PDFWebView';
import ChangePassword from '../screens/ChangePassword';

//Admin Screens
import AdminScreen from '../screens/AdminScreens/AdminMenu';
import CreateEvent from '../screens/AdminScreens/CreateEvent';
import EditEvent from '../screens/AdminScreens/EditEvent';
import FormEdit from '../screens/AdminScreens/FormEditEvent';
import ChangePasswordbyAdmin from '../screens/AdminScreens/ChangePasswordbyAdmin';
import RegisterUser from '../screens/AdminScreens/RegisterUser';
import RegisterUserQR from '../screens/AdminScreens/RegisterUserQR';

import RegisterByQR from '../screens/AdminScreens/RegisterByQR';

//Icons
import Settings from '../src/icons/Settings';

import { useAuth } from '../hooks/AuthContext';

//Config Button
const SettingButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Settings');
      }}
    >
      <Settings />
    </Pressable>
  );
};

//Aplication Stack
const AppStack = () => {
  const { user } = useAuth();

  //Validate if user is admin
  if (user.IsAdmin == true) {
    ruta = 'Admin';
  } else {
    if (user.IsPasswordChanged == false) {
      ruta = 'ChangePassword';
    } else {
      ruta = 'Menu';
    }
  }

  return (
    <Stack.Navigator initialRouteName={ruta}>
      <Stack.Screen
        name='Menu'
        component={Menu}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
          headerRight: () => <SettingButton />,
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='Events'
        component={EventsScreen}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='Certificates'
        component={CertificatesScreen}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='ChangePassword'
        component={ChangePassword}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='RegisterUser'
        component={RegisterUser}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='QR'
        component={QR}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='RegisterByQR'
        component={RegisterByQR}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      {/*  PDF Web View */}
      <Stack.Screen
        name='PDFWebView'
        component={PDFWebView}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      {/* ========== Admin Screens ========== */}
      <Stack.Screen
        name='Admin'
        component={AdminScreen}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
          headerRight: () => <SettingButton />,
        }}
      />
      <Stack.Screen
        name='Create'
        component={CreateEvent}
        options={{
          title: 'Crear Evento',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='Edit'
        component={EditEvent}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='EditForm'
        component={FormEdit}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='ChangePasswordbyAdmin'
        component={ChangePasswordbyAdmin}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
      <Stack.Screen
        name='RegisterUserQR'
        component={RegisterUserQR}
        options={{
          title: '',
          titleVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Theme.colors.primary,
          },
          headerTintColor: Theme.colors.white,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

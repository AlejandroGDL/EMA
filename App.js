import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

import { AuthProvider } from './hooks/AuthContext';

export default function App() {
  const [userToken, setUserToken] = useState(null);

  return (
    <AuthProvider
      userToken={userToken}
      setUserToken={setUserToken}
    >
      <NavigationContainer>
        {userToken == null ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </AuthProvider>
  );
}

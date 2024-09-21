import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
import Toast from 'react-native-toast-message';

//Configuracion de Axios
import Axiosconfig from '../src/config/Axiosconfig';

export const AuthProvider = ({ children, userToken, setUserToken }) => {
  const [user, setUser] = useState(null);

  const authContext = {
    signIn: async ({ StudentID, StudentPassword }) => {
      const studentIDNumber = Number(StudentID);

      try {
        const response = await Axiosconfig.post('api/login/', {
          StudentID: studentIDNumber,
          StudentPassword: StudentPassword,
        });
        //Guarda el usuario en el estado
        setUser(response.data);

        //Guarda el token en el estado
        if (response.status === 200) {
          setUserToken('user-token');
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: error.response.data,
        });
        console.error(error.response.data);
      }
    },

    // Sign-out
    signOut: () => {
      setUserToken(null);
    },
    userToken,
    user,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

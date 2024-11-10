import { StyleSheet, View, ScrollView, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';

//Components
import MyButton from '../../src/components/MyButton';
import MyText from '../../src/components/MyText';
import EventCardComponent from '../../src/components/EventCardComponent';
import Toast from 'react-native-toast-message';
import Separator from '../../src/components/Separator';
import MyModal from '../../src/components/Modal';
import InfoCard from '../../src/components/InfoCard';

//Theme
import Theme from '../../src/styles/Theme';

//Params
import { useRoute } from '@react-navigation/native';

//StatusBar
import { StatusBar } from 'expo-status-bar';

//Axios Config
import Axiosconfig from '../../src/config/Axiosconfig';

//Icons
import CarreraBook from '../../src/icons/CarreraBook';
import Semester from '../../src/icons/Semester';

//Expo
import * as MediaLibrary from 'expo-media-library';
//Navegación
import { useNavigation } from '@react-navigation/native';

const SeeAttendance = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [Attendance, setAttendance] = useState([]);
  const [Student, setStudent] = useState({
    StudentName: '',
    StudentLastName: '',
    StudentID: '',
    StudentCareer: '',
    StudentSemester: '',
    StudentHours: '',
    IsAdmin: false,
    ExpoPushToken: '',
  });

  const route = useRoute();
  const { event } = route.params;
  const nav = useNavigation();

  //Obtener todos los alumnos que asistieron al evento
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await Axiosconfig.post(`api/eventattendance`, {
          EventID: event._id,
        });
        setAttendance(response.data);
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Ocurrió un error al obtener la lista de asistencia',
        });
      }
    };
    fetchAttendance();
  }, []);

  const DownloadExcel = async () => {
    // Solicitar permisos de almacenamiento
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      alert(
        'Se requieren permisos de almacenamiento para descargar el certificado.'
      );
      return;
    }

    try {
      const Excel = Axiosconfig.post(
        'api/eventattendanceexcel',
        {
          EventID: event._id,
        },
        {
          responseType: 'blob',
        }
      );

      nav.navigate('ExcelScreen', {
        EventID: event._id,
      });
      if (Excel.status === 200) {
      }

      Toast.show({
        type: 'success',
        text1: 'Descarga Exitosa',
        text2: 'El archivo se ha descargado correctamente',
      });
      return;
    } catch (error) {}
  };

  const GetUser = async (StudentID) => {
    try {
      const response = await Axiosconfig.get(`api/user/${StudentID}`);
      setStudent(response.data);
      setModalOpen(true);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Ocurrió un error al obtener la información del estudiante',
      });
    }
  };

  const DownloadUserCertificade = async (event) => {
    // Solicitar permisos de almacenamiento
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      alert(
        'Se requieren permisos de almacenamiento para descargar el certificado.'
      );
      return;
    }
    try {
      const response = await Axiosconfig.post(
        `/api/generatecertificate`,
        {
          EventID: event._id,
          StudentID: Student.StudentID,
        },
        {
          responseType: 'blob',
        }
      );

      if (response.status === 200) {
        nav.navigate('PDFWebView', {
          EventID: event._id,
          StudentID: Student.StudentID,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <ScrollView style={styles.ConAttendance}>
      <StatusBar
        style='light'
        backgroundColor={Theme.colors.primary}
      />
      <MyModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <View style={styles.ModalBackground}>
          <View style={styles.Modal}>
            <MyText
              h3
              bold
              color={Theme.colors.black}
              extraprops={{ textAlign: 'center' }}
            >
              {Student.StudentName} {Student.StudentLastName}
            </MyText>
            <Separator />
            <View style={styles.ConEventInfoCards}>
              <InfoCard
                Title={'Carrera:'}
                Info={Student.StudentCareer}
                Icon={CarreraBook}
              />
              <InfoCard
                Title={'Semestre:'}
                Info={Student.StudentSemester}
                Icon={Semester}
              />
            </View>
            <Separator />
            <View style={styles.ModalButtons}>
              <MyButton
                TextProps={{ color: Theme.colors.white }}
                Function={() => setModalOpen(false)}
              >
                Cerrar
              </MyButton>
              <MyButton
                TextProps={{ color: Theme.colors.white }}
                Function={() => DownloadUserCertificade(event, Student)}
              >
                Descargar certificado
              </MyButton>
            </View>
          </View>
        </View>
      </MyModal>
      {/* Event Card */}
      <EventCardComponent event={event}></EventCardComponent>
      {/* Button Download Excel */}
      <MyButton
        Function={DownloadExcel}
        TextProps={{ color: Theme.colors.white, h3: true }}
      >
        Descargar Asistencias
      </MyButton>
      {/* Students List */}
      <View style={styles.ConStudentsList}>
        <MyText
          h3
          bold
          color={Theme.colors.black}
        >
          Lista de Estudiantes
        </MyText>
        <Separator />
        {Attendance.map((student, id) => (
          <ScrollView
            key={id}
            style={styles.ConStudent}
          >
            <MyButton
              Function={() => GetUser(student.StudentID)}
              TextProps={{ color: Theme.colors.white, bold: true }}
            >
              {student.StudentID}
            </MyButton>
          </ScrollView>
        ))}
      </View>
      <Toast />
    </ScrollView>
  );
  x;
};

export default SeeAttendance;

const styles = StyleSheet.create({
  ConAttendance: {
    flex: 1,
    padding: 10,
    backgroundColor: Theme.colors.primary,
  },
  ConEventCard: {
    backgroundColor: Theme.colors.white,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: Theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
  },
  ConEventInfoCards: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ConEventCardIsActive: {
    borderWidth: 1,
    borderColor: Theme.colors.green,
    padding: 5,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ConEventCardIsEnd: {
    borderWidth: 1,
    borderColor: Theme.colors.red,
    padding: 5,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  EventImage: {
    width: 90,
    height: 90,
    borderRadius: 50,

    borderColor: Theme.colors.primary,
    borderWidth: 0.1,
  },
  ConEventInfo: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  ConEventInfo1: {
    gap: 10,
    alignItems: 'flex-start',
  },
  ConEventInfo2: {
    gap: 10,
    alignItems: 'flex-start',
  },
  ConStudentsList: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Theme.colors.white,
    marginTop: 10,
    marginBottom: 30,
    gap: 10,
  },
  ModalBackground: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,

    width: '100%',
    height: '100%',
  },
  Modal: {
    backgroundColor: Theme.colors.white,
    padding: 20,
    borderRadius: 10,
    width: '90%',
    height: 'min-content',
    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
  },
  ModalButtons: {
    flexDirection: 'row',
    gap: 10,
  },
});

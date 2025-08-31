import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { AlumnoProvider } from './tareaapi/Context/AlumnoContext';
import AgregarAlumnos from './tareaapi/Pages/AgregarAlumnos';

export default function App() {
  return (
    <AlumnoProvider>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <ScrollView>
          <AgregarAlumnos />
        </ScrollView>
      </SafeAreaView>
    </AlumnoProvider>
  );
}

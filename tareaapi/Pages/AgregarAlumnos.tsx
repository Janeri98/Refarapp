import { View, Text, TextInput, Button } from 'react-native';
import React, { useState, useContext } from 'react';
import { AlumnoContext } from '../Context/AlumnoContext';

export default function AgregarAlumnos() {
  const { agregarAlumno } = useContext(AlumnoContext);

  const [nombreAlumno, setNombreAlumno] = useState('');
  const [emailAlumno, setEmailAlumno] = useState('');
  const [cantidadClase, setCantidadClase] = useState('');

  function handleAgregar() {
    agregarAlumno({
      idAlumno: 0,
      nombreAlumno,
      emailAlumno,
      cantidadClases: parseInt(cantidadClase)
    });
  }

  return (
    <View>
      <Text>Agregar Alumnos</Text>
      <TextInput placeholder="Nombre" value={nombreAlumno} onChangeText={setNombreAlumno} />
      <TextInput placeholder="Email" value={emailAlumno} onChangeText={setEmailAlumno} />
      <TextInput placeholder="Cantidad de Clases" value={cantidadClase} onChangeText={setCantidadClase} />
      <Button title="Agregar Alumno" onPress={handleAgregar} />
    </View>
  );
}

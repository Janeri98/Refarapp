import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { AlumnoContext } from '../Context/AlumnoContext';

export default function ListaAlumno() {
  const { alumnos, eliminarAlumno } = useContext(AlumnoContext);

  return (
    <View>
      <Text>Lista de Alumnos</Text>
      {alumnos.map(a => (
        <View key={a.idAlumno} style={{ marginVertical: 5 }}>
          <Text>{a.nombreAlumno} - {a.emailAlumno} - {a.cantidadClases} clases</Text>
          <Button title="Eliminar" onPress={() => eliminarAlumno(a.idAlumno)} />
        </View>
      ))}
    </View>
  );
}

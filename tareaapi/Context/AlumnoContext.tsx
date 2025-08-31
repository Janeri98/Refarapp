import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

export interface Alumno {
  idAlumno: number;
  nombreAlumno: string;
  emailAlumno: string;
  cantidadClases: number;
}

type AlumnoContextType = {
  alumnos: Alumno[];
  agregarAlumno: (alumno: Alumno) => void;
  eliminarAlumno: (id: number) => void;
};

export const AlumnoContext = createContext<AlumnoContextType>({
  alumnos: [],
  agregarAlumno: () => {},
  eliminarAlumno: () => {}
});

export const AlumnoProvider = ({ children }: any) => {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  useEffect(() => {
    fetch('http://192.168.0.7:5000/alumno')
      .then(res => res.json())
      .then(data => setAlumnos(data));
  }, []);

  const agregarAlumno = async (alumno: Alumno) => {
    const res = await fetch('http://192.168.0.7:5000/alumno', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alumno)
    });
    const data = await res.json();
    setAlumnos([...alumnos, data]);
    Alert.alert("Alumno agregado");
  };

  const eliminarAlumno = async (id: number) => {
    await fetch(`http://192.168.0.7:5000/alumno/${id}`, { method: 'DELETE' });
    setAlumnos(alumnos.filter(a => a.idAlumno !== id));
    Alert.alert("Alumno eliminado");
  };

  return (
    <AlumnoContext.Provider value={{ alumnos, agregarAlumno, eliminarAlumno }}>
      {children}
    </AlumnoContext.Provider>
  );
};

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';
const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Mozart', propietario: 'Carlos', sintomas: 'No come'},
    {id: '2', paciente: 'Sanson', propietario: 'Erika', sintomas: 'No duerme'},
    {id: '3', paciente: 'Lucas', propietario: 'Laura', sintomas: 'No camina'},
  ]);

  //Eliminar los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas </Text>

        <Formulario />

        <Text style={styles.titulo}>
          {citas.length > 0
            ? 'Aministra tus citas'
            : 'No hay citas, agrega uno'}
        </Text>
        <FlatList
          data={citas}
          renderItem={({item}) => (
            <Cita item={item} eliminarPaciente={eliminarPaciente} />
          )}
          keyExtractor={(cita) => cita.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#328dd8',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

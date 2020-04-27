import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Cita from './componentes/Cita';
const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Mozart', propietario: 'Carlos', sintomas: 'No come'},
    {id: '2', paciente: 'Sanson', propietario: 'Erika', sintomas: 'No duerme'},
    {id: '3', paciente: 'Lucas', propietario: 'Laura', sintomas: 'No camina'},
  ]);

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas </Text>
        <FlatList
          data={citas}
          renderItem={({item}) => <Cita item={item} />}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Mozart', propietario: 'Carlos', sintomas: 'No come'},
    {id: '2', paciente: 'Sanson', propietario: 'Renata', sintomas: 'No duerme'},
    {id: '3', paciente: 'Lucas', propietario: 'Erika', sintomas: 'No canta'},
  ]);

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas </Text>

        <FlatList
          data={citas}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.paciente}</Text>
              </View>
            );
          }}
          keyExtractor={(cita) => cita.id}
        />

        {/* {citas.map((cita) => {
          return (
            <View>
              <Text>{cita.paciente}</Text>
            </View>
          );
        })} */}
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

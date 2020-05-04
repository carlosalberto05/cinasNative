import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [citas, setCitas] = useState([]);

  //Eliminar los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  //Muestra u oculta formulario
  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  //Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas </Text>

        <TouchableHighlight
          onPress={() => mostrarFormulario()}
          style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}>
            {mostrarForm ? 'Administrar Citas' : 'Crear Nueva Cita'}
          </Text>
        </TouchableHighlight>

        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Cita</Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                setMostrarForm={setMostrarForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length > 0
                  ? 'Aministra tus citas'
                  : 'No hay citas, agrega uno'}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => (
                  <Cita item={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={(cita) => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#328dd8',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '3%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#328df8',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

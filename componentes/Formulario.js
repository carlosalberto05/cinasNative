import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({citas, setCitas, setMostrarForm}) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    setFecha(date.toLocaleDateString('es-Es', opciones));
    hideDatePicker();
  };

  //Muestra u oculta el Time Picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = (hora) => {
    const opciones = {hour: 'numeric', minute: '2-digit'};
    setHora(hora.toLocaleString('en-Us', opciones));
    hideTimePicker();
  };

  // Crear nueva cita
  const crearNuevaCita = () => {
    //Validar
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      //Falla la validación
      mostrarAlerta();
      return;
    }

    //Crear una nueva cita
    const cita = {paciente, propietario, telefono, fecha, hora, sintomas};

    cita.id = shortid.generate();

    // console.log(cita);

    //Agregar al state
    const citasNuevo = [...citas, cita];
    setCitas(citasNuevo);

    //Ocultar el formulario
    setMostrarForm(false);

    //Resetear el formulario
  };

  //Muestra la alerta si falla la validación
  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setPaciente(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Dueño: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setPropietario(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Teléfono Contacto: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setTelefono(texto)}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_Es"
            headerTextIOS="Elige la Fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>

        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Seleccionar hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_Es"
            headerTextIOS="Elige una Hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{hora}</Text>
        </View>

        <View>
          <Text style={styles.label}>Síntomas: </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(texto) => setSintomas(texto)}
          />
        </View>

        <View>
          <TouchableHighlight
            onPress={() => crearNuevaCita()}
            style={styles.btnEnviar}>
            <Text style={styles.textoEnviar}>Crear Nueva Cita</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnEnviar: {
    padding: 10,
    backgroundColor: '#328df8',
    marginVertical: 10,
  },
  textoEnviar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Formulario;

import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Formulario = () => {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Dueño: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Teléfono Contacto: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text style={styles.label}>Síntomas: </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '3%',
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
});

export default Formulario;

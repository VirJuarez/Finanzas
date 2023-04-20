import React, { useState } from 'react';
import { View, TextInput, Button, Picker, StyleSheet } from 'react-native';

const Registros = ({ onRegistro }) => {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [tipoPago, setTipoPago] = useState('Tarjeta');
  const [rubro, setRubro] = useState('');

  const registrarMovimiento = () => {
    // Validar que todos los campos estén completos
    if (descripcion.trim() === '' || monto.trim() === '' || rubro === '') {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Convertir el monto a número
    const montoNumero = parseFloat(monto);

    // Verificar que el monto sea un número válido
    if (isNaN(montoNumero)) {
      alert('Por favor ingresa un monto válido.');
      return;
    }

    // Crear un objeto con los datos del registro
    const registro = {
      descripcion,
      monto: montoNumero,
      tipoPago,
      rubro,
    };

    // Llamar a la función de callback para manejar el registro
    onRegistro(registro);

    // Limpiar los campos después de registrar
    setDescripcion('');
    setMonto('');
    setTipoPago('Tarjeta');
    setRubro('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto"
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />
      <Picker
        style={styles.input}
        selectedValue={tipoPago}
        onValueChange={(itemValue) => setTipoPago(itemValue)}
      >
        <Picker.Item label="Tarjeta" value="Tarjeta" />
        <Picker.Item label="Efectivo" value="Efectivo" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Rubro"
        value={rubro}
        onChangeText={setRubro}
      />
      <Button title="Registrar" onPress={registrarMovimiento} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Registros;

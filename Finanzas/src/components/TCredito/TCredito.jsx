import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TCredito = ({ registros }) => {
  // Filtrar los registros que corresponden a gastos en tarjeta de crédito
  //const gastosTarjeta = registros.filter(registro => registro.tipoPago === 'Tarjeta');

  // Calcular el total de los gastos en tarjeta de crédito
  //const totalGastosTarjeta = gastosTarjeta.reduce((total, registro) => total + registro.monto, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de Gastos en Tarjeta de Crédito</Text>
      <Text style={styles.total}>Total: ${totalGastosTarjeta.toFixed(2)}</Text>
      <FlatList
        data={gastosTarjeta}
        renderItem={({ item }) => (
          <View style={styles.registroContainer}>
            <Text style={styles.registroDescripcion}>{item.descripcion}</Text>
            <Text style={styles.registroMonto}>${item.monto.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No hay registros</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  total: {
    fontSize: 16,
    marginBottom: 16,
  },
  registroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  registroDescripcion: {
    flex: 1,
    fontSize: 16,
  },
  registroMonto: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 16,
  },
});

export default TCredito;

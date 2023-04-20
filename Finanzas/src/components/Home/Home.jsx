import React from "react";
import { Text, View, Button } from "react-native";

export default function Home({ navigation }){
    return(
        <View>
            <Text>Tus Finanzas</Text>
            <Text>La App que te permite llevar el control de tus ingresos y egresos de forma simple</Text>
            <Text>¿Cuánto gano? ¿Cuánto gasto? ¿En qué gasto? ¿Cuánto puedo ahorrar?</Text>
            <Button
                title=" Comienza a registrar tus movimientos"
                onPress={() => navigation.navigate('Registros')}
      />
        </View>
    )
}
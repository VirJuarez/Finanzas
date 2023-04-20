import React from "react";
import { Text, View, Button, Image } from "react-native";

export default function Perfil(){

    let photoUrl= "https://www.institutducontenu.com/wp-content/uploads/2015/07/buyer-persona3.jpg"
    let name = "Virginia Juarez"
    let age = "26"
    let country = "Argentina"
    let moneda = "AR $"
    let email = "vir@gmail.com"
    return(
        <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: photoUrl }} style={{ width: 150, height: 150, borderRadius: 75, marginTop: 30, marginBottom: 10 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>{name}</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>{country}, {age} años</Text>
            <Text style={{ fontSize: 16, marginBottom: 30 }}>{email}</Text>
        </View>
    )
}
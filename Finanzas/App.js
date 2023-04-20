import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/components/Home/Home"
import Registros from './src/components/Registros/Registros';
import MyDrawer from './Drawer';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <MyDrawer/>
    {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Registros" component={Registros} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}


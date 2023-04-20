import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Registros from './src/components/Registros/Registros';
import Home from './src/components/Home/Home';
import Perfil from './src/components/Perfil/Perfil';
import TCredito from './src/components/TCredito/TCredito';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Mi perfil" component={Perfil} /> 
      <Drawer.Screen name="Registros" component={Registros} />
      <Drawer.Screen name="T Credito" component={TCredito} />
    </Drawer.Navigator>
  );
}
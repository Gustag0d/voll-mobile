import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from '@/src/estilos/temas';

import Login from '@/src/Login';
import Rotas from '@/src/Rotas';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer independent={true}>
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
    </NavigationContainer>
  );
}
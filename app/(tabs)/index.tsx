import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base'

import { TEMAS } from '@/src/estilos/temas';
import Cadastro from '@/src/Cadastro';
 
export default function index() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor = {TEMAS.colors.blue[800]} />
      <Cadastro/>
    </NativeBaseProvider>
    
  );
}


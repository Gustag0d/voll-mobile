import {VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView} from 'native-base'
import {TouchableOpacity} from 'react-native'
import Logo from './assets/Logo.png'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Titulo } from './componentes/titulo';
import {EntradaTexto} from '../src/componentes/EntradaTexto'
import { Botao } from './componentes/Botao'
import { useState } from 'react';
import {secoes} from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState (0);
  
  function avancarSecao() {
    if (numSecao < secoes.length -1){
      setNumSecao (numSecao+1)
      
    }
   
  }
  function voltarSecao () {
    if (numSecao > 0)
    setNumSecao (numSecao-1)
  }

  return (
    <ScrollView flex={1}  p={5}>
   <Image source={Logo} alt='Logo Voll' 
   alignSelf="center"
   marginTop={10}
   />

   <Titulo>
      {secoes[numSecao].titulo}
    </Titulo>

      <Box>
    
        {
          secoes [numSecao]?.entradaTexto?.map(entrada=>{
            return <EntradaTexto label={entrada.label}
            placeholder = {entrada.placeholder} key={entrada.id} />
          })
        }

      </Box>

      <Box>
      <Text
      fontSize='16'
      fontWeight='bold'
      color='blue.800'
       >
          Selecione o plano
      </Text>
          {           
         secoes [numSecao]?.checkbox?.map (checkbox =>
            {
            return <Checkbox key={checkbox.id}
            value={checkbox.value}>
              {checkbox.value}
              </Checkbox>
        })
      }

      </Box>

      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>}

      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>
        
    
    </ScrollView>
  );
}

import { VStack,Text, ScrollView, Avatar, Divider, Center, Box  } from 'native-base'
import Logo from './assets/Logo.png'
import { Titulo } from '../componentes/titulo'
import { EntradaTexto } from '../componentes/EntradaTexto'
import { Botao } from '../componentes/Botao'
import { Depoimentos } from "../utils/mock";

export default function Principal (){
    return (
     <ScrollView>
        <VStack justifyContent="flex-start" p={5} >
         
              <Titulo color={'blue.500'}>Bem-Vindo!</Titulo>

        <Box w="100%" borderRadius="5" p={3}mt={10} shadow={1} borderRightRadius={"md"}>
            <EntradaTexto placeholder='Digite a especialidade'>
            </EntradaTexto>

            <EntradaTexto placeholder='Digite sua localização'>
            </EntradaTexto> 
            <Botao>Buscar</Botao>

        </Box>

            <Titulo color={'blue.800'} alignSelf="center">Depoimentos</Titulo>
            <VStack space={3} divider={<Divider/>}
            w="100%">
                {
                    Depoimentos.map(depoimento => (
                        <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                        <Text color="gray.500" fontSize="md" textAlign="justify">
                          {depoimento.text}
                        </Text>
                        <Text color="gray.800" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimento.titulo}</Text>
                      </Box>
                    ))
                }

            </VStack>
        

        </VStack>
     </ScrollView>
      
        
    )
}
import { VStack,Text, ScrollView, Box, Divider } from 'native-base'
import { EntradaTexto } from '../componentes/EntradaTexto'
import { Titulo } from '../componentes/titulo'
import { CardConsulta } from '../componentes/CardConsulta'
import { Botao } from '../componentes/Botao'

export default function Explorar (){
    return (
        <VStack>
            
            <ScrollView
            mt={10}
            p='5'
            >
                <Box
                borderRadius='lg'
                bg={'white'}
                p={5}
                shadow={5}
                >
                <EntradaTexto placeholder='Digite a especialidade'/>
                <EntradaTexto placeholder='Digite sua localização'/>
                <Botao mt={5}>Buscar</Botao>
                </Box>

                <Titulo color={'blue.500'} bold>Resultado da busca</Titulo>
                <Divider mt={5}></Divider>
                <CardConsulta
                nome='Dr. Gustavo'
                especialidade='Pneumologista'
                foto={"https://avatars.githubusercontent.com/u/108375892?v=4"}
               
            />
                <Divider mt={5}></Divider>
                  <CardConsulta
                nome='Dr. Gustavo'
                especialidade='Pneumologista'
                foto={"https://avatars.githubusercontent.com/u/108375892?v=4"}
               
            />
            <Divider mt={5}></Divider>
                  <CardConsulta
                nome='Dr. Gustavo'
                especialidade='Pneumologista'
                foto={"https://avatars.githubusercontent.com/u/108375892?v=4"}
               
            />
            <Divider mt={5}></Divider>
                  <CardConsulta
                
                nome='Dr. Gustavo'
                especialidade='Pneumologista'
                foto={"https://avatars.githubusercontent.com/u/108375892?v=4"}
               
            />
            </ScrollView>
        </VStack>
    )
}
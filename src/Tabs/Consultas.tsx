import { VStack,Text, ScrollView, Box, Divider, Center, Avatar, Flex } from 'native-base'
import { Titulo } from '../componentes/titulo'
import { Botao } from '../componentes/Botao' 
import { CardConsulta } from '../componentes/CardConsulta'

export default function Consultas (){
    return (
        <ScrollView
        p='6'
        w="100%"
        >
           <Titulo mt={5}>Minhas Consultas</Titulo>
           <Botao>Agendar outra consulta</Botao>
           <Titulo>Proximas Consultas</Titulo>
           <Divider mt={5}/>
            <CardConsulta
            nome='Dr. Gustavo'
            especialidade='Alergista'
            foto={"https://avatars.githubusercontent.com/u/108375892?v=4"}
            data='20/04/2023'
            foiAgendado
            />
            <Divider mt={5}/>

            <Titulo>Consultas passadas</Titulo>

            <CardConsulta
            nome='Dr Paulo'
            especialidade='Cardiologista'
            foto={"https://avatars.githubusercontent.com/u/108375892?v=4"}
            data='26/08/2024'
            foiAtendido
            />
       
            <Divider mt={5}/>

            <Divider mt={5}/>
            
            <CardConsulta
            nome='Dr. Gustavo'
            especialidade='Pneumologista'
            foto={"https://avatars.githubusercontent.com/u/108375892?v=4"}
            foiAtendido
            />
        </ScrollView>
       
    )
}
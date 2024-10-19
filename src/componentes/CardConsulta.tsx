import { VStack,Text, ScrollView, Box, Divider, Center, Avatar, Flex } from 'native-base'
import { Botao } from './Botao'

interface CardProps {
    nome: String;
    foto: String;
    especialidade: String;
    data?: String;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

export function CardConsulta({
    nome,
    foto,
    especialidade,
    data,
    foiAtendido,
    foiAgendado

}: CardProps) {
    return (
        <VStack
        p='6'
        w="100%"
        bg={foiAtendido ?  'blue.200' : 'white'}
        borderRadius='lg'
        shadow='2'
        >
        <VStack flexDir='row'>
            <Avatar source={{uri: foto}} />
            <VStack pl={4}>
                <Text fontSize='md' bold>{nome}</Text>
                <Text>{especialidade}</Text>
                <Text>{data}</Text>
            </VStack>
        </VStack>
            <Botao mt='4'>
            { foiAgendado ? 'Cancelar consulta' : 'Agendar consulta'}
            </Botao>
        </VStack>
    )
}
import { VStack,Text, ScrollView, Avatar, Divider, Center } from 'native-base'
import { Titulo } from '../componentes/titulo'

export default function Perfil (){
    return (
       <ScrollView flex={1}>
        <VStack flex={1} alignItems="center" padding={5}>
           <Titulo color={'blue.500'}>Meu Perfil</Titulo>
           <Avatar size={"xl"} source={{uri: "https://avatars.githubusercontent.com/u/108375892?v=4"}} mt={5}
           
           /> 
           <Titulo color={'blue.500'} > Informações pessoais</Titulo>

           <Titulo fontSize={'lg'}color={'gray.500'}>Gustavo Moraski</Titulo>
           <Text fontSize={'lg'}color={'gray.500'}> 20/04/1998 </Text>
           <Text fontSize={'lg'}color={'gray.500'}>Alm Tamandare</Text>

           <Divider mt={5}/>

           <Titulo color={'blue.500'} mb={2}> Historico médico</Titulo>
           <Text fontSize={'lg'}color={'gray.500'}> Asma </Text>
           <Text fontSize={'lg'}color={'gray.500'}> Dengue</Text>
         
        </VStack>
       </ScrollView>
    )
}
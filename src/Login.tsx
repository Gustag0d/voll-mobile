import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import {TouchableOpacity} from 'react-native'
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import {Botao} from './componentes/Botao'


export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center"  marginTop='10' 
    justifyContent='center' p={5}>
   <Image source={Logo} alt='Logo Voll' />

    <Titulo>
      Faça login na sua conta
    </Titulo>

      <Box>
      
        <FormControl marginTop="3">
          <FormControl.Label>e-mail</FormControl.Label>
          <Input
          placeholder='Insira seu endereço de e-mail'
          size='lg'
          w="100%"
          borderRadius='lg'
          backgroundColor='gray.100'
          shadow='3'
          />
        </FormControl>
        

        <FormControl marginTop="3">
          <FormControl.Label>senha</FormControl.Label>
          <Input
          placeholder='Insira sua senha'
          size='lg'
          w="100%"
          borderRadius='lg'
          backgroundColor='gray.100'
          shadow='3'
          />
        </FormControl>

      </Box>
    <Botao onPress={()=> navigation.navigate('Tabs')} >
      Entrar
    </Botao>

    <Link
     href='http://google.com' mt={8}
      >
      esqueceu sua senha?
    </Link>

    <Box width='100%' flexDirection='row' justifyContent='center' mt={8} >
       <Text>
        ainda não tem cadastro?
       </Text>
       <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} >
             <Text color='blue.500' mb={5}>
      faça seu cadastro aqui
            </Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}

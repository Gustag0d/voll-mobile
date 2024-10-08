import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import {TouchableOpacity} from 'react-native'
import Logo from './assets/Logo.png'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Titulo } from './componentes/titulo';

export default function Login() {
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
    <Button
      width="100%"
      bg = 'blue.800'
      mt='10'
      borderRadius='lg'
       >
      Entrar
    </Button>

    <Link
     href='http://google.com' mt={8}
      >
      esqueceu sua senha?
    </Link>

    <Box width='100%' flexDirection='row' justifyContent='center' mt={8}>
       <Text>
        ainda não tem cadastro?
       </Text>
          <TouchableOpacity>
             <Text color='blue.500' >
      faça seu cadastro aqui
            </Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}

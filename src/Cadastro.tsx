import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import {TouchableOpacity} from 'react-native'
import Logo from './assets/Logo.png'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {} from './componentes/Bo'
import { Titulo } from './componentes/titulo';

export default function Titu() {
  const secoes = {
    {
      id: 1,
      titulo: 'insira alguns dados basicos'
      entradaTexto: [
        {
          id: 1,
          label: 'Nome'
          placeholder: 'Digite seu nome completo'
        }
        {
          id: 2,
          label: 'email'
          placeholder: 'Digite seu email'
        }
      ]
    }
  }

  return (
    <VStack flex={1} alignItems="center"  marginTop='10' 
    justifyContent='center' p={5}>
   <Image source={Logo} alt='Logo Voll' />

    <Titulo>
      Faça cadastro na sua conta
    </Titulo>

      <Box>
      
      {
        secoes[0].entradaTexto.map(entrada =>
          return <EntradaTexto/>
        )
      }

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

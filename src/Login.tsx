import {VStack, Image, Text, Box, FormControl, Input} from 'native-base'
import Logo from './assets/Logo.png'

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt='Logo Voll' />

      <Text 
        fontSize="2xl"
        fontWeight= "bold"
        color="gray.500"
        textAlign= "center"
        mt="5"
      >
        Faça Login em sua conta
      </Text>
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
    </VStack>
  );
}

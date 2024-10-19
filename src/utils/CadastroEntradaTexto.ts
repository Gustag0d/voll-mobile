const secoes = [
  //tela de cadastro 1  
  {
      id:1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [{
        id:1,
        label: 'Escreva seu nome',
        placeholder: 'Digite seu nome completo',
      },
      {
        id: 2,
        label: 'Escreva seu e-mail',
        placeholder: 'Digite seu e-mail'
      },
      {
        id: 3,
        label: 'Crie uma senha',
        placeholder: 'Insira sua senha'

      },   
      {
        id: 4,
        label: 'Repita a senha',
        placeholder: 'Insira sua senha'

      }
      ],
    },
    //tela de cadastro 2
    {
      id:2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'Digite seu CEP',
          placeholder: 'Coloque seu CEP'
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Insira seu endereço'
        },
        {
          id: 3,
          label: 'Número',
          placeholder: 'Insira seu número'
        },
        {
          id: 4,
          label: 'Complemento',
          placeholder: 'Insira seu complemento'
        },
        {
          id: 5,
          label: 'Telefone',
          placeholder: '(00) 00000-0000'
        },
        ],

      //check box tela 3
      Checkbox: []   
      },
    {
      
      id: 3,
      titulo: 'Para finalizar, qual seu plano de saude?',
      entradaTexto:[],
      checkbox: [
     
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        }, 
        {
          id: 3,
          value: 'Bradesco'
        }, 
        {
          id: 4,
          value: 'Amil'
        }, 
        {
          id: 5,
          value: 'Biosaude'
        }, 
        {
          id: 6,
          value: 'Biovida'
        }, 
        {
          id: 7,
          value: 'Outros'
        }, 
        {
          id: 2,
          value: 'Não tenho plano de saúde'
        },
      ],
     },
  ]



  export {secoes}
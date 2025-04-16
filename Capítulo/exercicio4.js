const contatos = [
    {
      nome: 'Mario Antonio',
      numero: '1234-5678'
    },
    {
      nome: 'Reinalda Silva',
      numero: '1234-6789'
    },
    {
      nome: 'Bárbara Lopes',
      numero: '1234-5567'
    }
  ];

const [ , segundoContato ] = contatos;

const [ , { nome, numero } ] = contatos;

console.log(nome);
console.log(numero);
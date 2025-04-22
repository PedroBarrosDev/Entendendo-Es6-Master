function montaEnderecoCompleto(rua, cidade, numero, cep) {
    return `${rua}, ${numero} - ${cidade}, ${cep}`;
  }

  console.log(montaEnderecoCompleto('Rua das Flores', 'São Paulo', 123, '01234-567'));
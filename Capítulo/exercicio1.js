function possuiNumero(texto, termo) {
    return texto.split(' ').includes(termo);
  }
  
console.log(possuiNumero('Era uma vez', 'vez'));
console.log(possuiNumero('Dois mais dois é quatro', 'mais'));
console.log(possuiNumero('Não há nada aqui', 'quadro'));
  
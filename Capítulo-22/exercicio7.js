function quantidadePropriedadesEnumeraveis(objeto) {
    return Object.keys(objeto).length;
  }
  
console.log(quantidadePropriedadesEnumeraveis({ nome: 'jão' }));
console.log(quantidadePropriedadesEnumeraveis({ a: 1, b: 2, c: 3 }));

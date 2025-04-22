function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
  
    return palavras
      .join('')
      .split('')
      .filter(letra => vogais.includes(letra))
      .length;
  }

console.log(contaQuantidadeVogaisNaoAcentuadas('banana', 'uva'));
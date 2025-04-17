function tudoParaAEsquerda(palavras, tamanho) {
    for (const palavra of palavras) {
      console.log(palavra.padEnd(tamanho, '-'));
    }
  }
  
  tudoParaAEsquerda([
    'carro',
    'avião',
    'foguete',
    'helicóptero'
  ], 11);
  
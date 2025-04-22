function tudoParaADireita(palavras, tamanhoMaximo) {
    for (const palavra of palavras) {
      const alinhada = palavra.padStart(tamanhoMaximo);
      console.log(alinhada);
    }
  }
  
  tudoParaADireita([
    'carro',
    'avião',
    'foguete',
    'helicóptero'
  ], 11);
  
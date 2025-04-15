function imprimeNomeCompleto(nomeTratado = '', sobrenome = '', nomeDoMeio = '') {
    console.log(`${nomeTratado} ${nomeDoMeio} ${sobrenome}`.trim());
  }
  
imprimeNomeCompleto('João');
imprimeNomeCompleto('João', 'Silva', 'Carlos');
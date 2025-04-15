const dimensoes = (comprimento, alturaInicial) => {
    const altura = (alturaInicial * 9) / 16;
    return { comprimento, altura };
  };
  
  console.log(dimensoes(10, 10));
  
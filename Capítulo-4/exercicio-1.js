function calculaDistancia(ruas) {
    return ruas.reduce(function(total, rua) {
        return total + rua.tamanho;
    }, 0);
}

var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
  ];
  
  console.log(calculaDistancia(ruas));
  
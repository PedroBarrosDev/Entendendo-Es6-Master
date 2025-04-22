function calculaPrecoTotal(...precos) {
    return precos.reduce((total, preco) => total + preco, 0);
  }
  
console.log(calculaPrecoTotal(1, 2, 3, 4, 5));  
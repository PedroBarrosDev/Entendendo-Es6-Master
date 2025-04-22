function criaMacaroca(lista) {
    return lista.reduce((acc, item) => `${acc}${item}`, '');
  }
  
  console.log(criaMacaroca(['a', 'b', 'c', 'd']));
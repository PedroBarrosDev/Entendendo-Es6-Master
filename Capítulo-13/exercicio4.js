function numerosELetras(...args) {
    const numeros = args.filter(arg => typeof arg === 'number');
    const letras = args.filter(arg => typeof arg === 'string');
  
    console.log('Números:', numeros);
    console.log('Letras:', letras);
  }
  
numerosELetras(1, 2, 'a', 'b', 3, 'c');
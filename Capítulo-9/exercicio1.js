function tag(strings, ...values) {
    const lista = values[0].split(',').map(item => `<li>${item}</li>`).join('');
    return `<ul>${lista}</ul>`;
  }
  
  const compras = 'leite,feijão,arroz,mandioca';
  const elemento = tag`${compras}`;
  
  console.log(elemento);
function somenteValores(objeto) {
    for (const valor of Object.values(objeto)) {
      console.log(valor);
    }
  }
  
somenteValores({ nome: 'Maria', idade: 30, cidade: 'Recife' });

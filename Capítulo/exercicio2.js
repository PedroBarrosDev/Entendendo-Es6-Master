function detalhaObjeto(objeto) {
    for (const [chave, valor] of Object.entries(objeto)) {
      console.log(`${chave}: ${valor}`);
    }
  }
  
detalhaObjeto({ rua: 'oscar freire', cidade: 'São Paulo' });

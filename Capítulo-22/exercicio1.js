function mapeiaObjeto(objeto) {
    const mapa = new Map();
  
    for (const chave of Object.keys(objeto)) {
      mapa.set(chave, objeto[chave]);
    }
  
    return mapa;
  }

  const resultado = mapeiaObjeto({ nome: 'joão bobão' });

  console.log(resultado.get('nome'));
  
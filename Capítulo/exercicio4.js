function criaObjetoComCaracteristicas(caracteristicas) {
    return Object.fromEntries(caracteristicas);
  }
  

const mapa = new Map([
    ['idade', 25],
    ['nome', 'Ana'],
    ['cidade', 'São Paulo']
  ]);
  
console.log(criaObjetoComCaracteristicas(mapa));

  
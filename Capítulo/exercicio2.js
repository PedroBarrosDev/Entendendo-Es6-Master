class VideoGame {
    constructor(marca, nControles, tipoMidia) {
      this.marca = marca;
      this.nControles = nControles;
      this.tipoMidia = tipoMidia;
    }
  }
  
class PlayStation extends VideoGame {
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais) {
      super(marca, nControles, tipoMidia);
      this.nEntradasUSB = nEntradasUSB;
      this.voltagem = voltagem;
      this.adicionais = adicionais;
    }
  }

const meuPlaystation = new PlayStation(
    'Sony',
    2,
    'blu-ray',
    3,
    110,
    ['Controle sem fio', 'Volante']
  );
  
console.log(meuPlaystation);
  
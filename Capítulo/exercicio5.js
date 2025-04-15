const equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
      this.membros.forEach(membro => {
        console.log(`${membro} é da equipe ${this.nome}`);
      });
    }
  };
  
equipe.imprimeNomes();
  
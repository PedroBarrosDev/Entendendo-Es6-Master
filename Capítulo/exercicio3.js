const pessoa = {
    nome: 'Goku',
    equipe: 'Guerreiro Z',
    seApresentar() {
      console.log(`Oi, eu sou o ${this.nome}!`);
    }
  };
  
  pessoa.seApresentar();
  
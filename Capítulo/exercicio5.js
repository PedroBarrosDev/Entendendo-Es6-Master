const equipe = {
    gerente: 'Gilberto',
    estagiario: 'Fernanda',
    senior: 'Paulo',
    pleno: 'Camila',
    junior: 'Adão',
    [Symbol.iterator]() {
      const valores = Object.values(this);
      let index = 0;
      return {
        next() {
          if (index < valores.length) {
            return { value: valores[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
for (let integrante of equipe) {
  console.log(integrante);
  }
  
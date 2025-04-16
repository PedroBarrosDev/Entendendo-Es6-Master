function simulaPromise(sucesso) {
    const promessa = new Promise((resolve, reject) => {
      if (sucesso) {
        resolve('ok');
      } else {
        reject('not ok');
      }
    });
  
    promessa
      .then((mensagem) => console.log(mensagem))
      .catch((erro) => console.log(erro));
  }
  
simulaPromise(true);
simulaPromise(false);
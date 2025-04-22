function simulaPromise(sucesso, delay) {
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sucesso) {
          resolve('ok');
        } else {
          reject('not ok');
        }
      }, delay);
    });
  
    promessa
      .then((mensagem) => console.log(mensagem))
      .catch((erro) => console.log(erro));
  }
  
simulaPromise(true, 2000);
simulaPromise(false, 1000);
   
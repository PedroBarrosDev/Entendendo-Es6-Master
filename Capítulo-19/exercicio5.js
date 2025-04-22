//O problema é que o segundo .then() não recebe o data do primeiro .then() porque o primeiro .then() não retorna nada.

//correção

promise
  .then((data) => {
    console.log(`resultado positivo: ${data}`);
    return data;
  })
  .then((data) => console.log(`resultado positivo 2: ${data}`))
  .catch((data) => console.log(`resultado negativo: ${data}`));

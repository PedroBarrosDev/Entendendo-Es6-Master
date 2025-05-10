function todosSaoMaioresQue(referencia, ...numeros) {
    return numeros.every(num => num > referencia);
  }

console.log(todosSaoMaioresQue(2, 3, 4, 5, 6, 7));
console.log(todosSaoMaioresQue(5, 4, 3, 2, 1));
console.log(todosSaoMaioresQue(1, 2));
console.log(todosSaoMaioresQue(10));
  
function* correBolt() {
    for (let i = 1; i <= 4; i++) {
      yield `Usain passou no Checkpoint ${i}`;
    }
  }
  
const corrida = correBolt();
  
console.log(corrida.next().value);
console.log(corrida.next().value);
console.log(corrida.next().value);
console.log(corrida.next().value);
console.log(corrida.next().value);
class Livro {
    constructor(titulo, autor) {
      this.titulo = 'ECMAScript 6 - Entre de cabeça no futuro do JavaScript';
      this.autor = 'Diego Martins de Pinho';
    }
  }
  
  const livroOriginal = new Livro();
  
  const livroComProxy = new Proxy(livroOriginal, {
    get(target, prop) {
      console.log(`A propriedade "${prop}" foi acessada.`);
      return target[prop];
    },
    set(target, prop, value) {
      console.log(`A propriedade "${prop}" foi alterada para "${value}".`);
      target[prop] = value;
      return true;
    }
  });

console.log(livroComProxy.titulo);
console.log(livroComProxy.autor);
  
livroComProxy.titulo = 'JavaScript: O Guia Definitivo';
livroComProxy.autor = 'David Flanagan';

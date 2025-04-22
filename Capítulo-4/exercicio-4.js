function criaIterador(lista) {
    let indice = 0;

    return {
        next: function() {
            if (indice < lista.length) {
                return { value: lista[indice++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}

const meuIterador = criaIterador([1, 2]);

console.log(meuIterador.next()); // { value: 1, done: false }
console.log(meuIterador.next()); // { value: 2, done: false }
console.log(meuIterador.next()); // { value: undefined, done: true }

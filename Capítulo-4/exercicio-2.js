function isListaVazia(lista) {
    const iterador = lista[Symbol.iterator]();
    const resultado = iterador.next();
    return resultado.done === true;
}

console.log(isListaVazia([]));
console.log(isListaVazia([1, 2, 3])); 

function soletraPalavra(palavra) {
    const iterador = palavra[Symbol.iterator]();
    let proximo = iterador.next();

    while (!proximo.done) {
        console.log(proximo.value);
        proximo = iterador.next();
    }
}

soletraPalavra("Teste");
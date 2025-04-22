function removeDuplicatas(array) {
    return array.reduce((acumulador, valorAtual) => {
        const jaExiste = acumulador.find(item => item === valorAtual);
        if (!jaExiste) {
            acumulador.push(valorAtual);
        }
        return acumulador;
    }, []);
}

console.log(removeDuplicatas([1, 2, 3, 3, 4, 5]));
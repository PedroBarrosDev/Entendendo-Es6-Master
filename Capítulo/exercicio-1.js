function somaFaturamento(valores) {
    return valores.reduce(function(total, valorAtual) {
        return total + valorAtual;
    }, 0);
}

console.log(somaFaturamento([1, 2, 3, 4]));
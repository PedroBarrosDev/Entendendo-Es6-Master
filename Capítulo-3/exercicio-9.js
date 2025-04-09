function calculaRaizesQuadradas(array) {
    return array.map(function(numero) {
        return Math.sqrt(numero);
    });
}

console.log(calculaRaizesQuadradas([4, 9, 16, 25])); 